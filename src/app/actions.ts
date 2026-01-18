'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

// --- Auth Actions ---

export async function signup(currentState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    if (!email || !password || !name) {
        return { success: false, message: 'All fields are required' };
    }

    try {
        const stmt = db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)');
        const result = stmt.run(email, password, name);

        // Simple cookie session
        (await cookies()).set('user_id', result.lastInsertRowid.toString());
        (await cookies()).set('user_name', name); // For easy access

        return { success: true, message: 'Account created' };
    } catch (error: any) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return { success: false, message: 'Email already exists' };
        }
        return { success: false, message: error.message };
    }
}

export async function login(currentState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        const stmt = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?');
        const user = stmt.get(email, password) as any;

        if (!user) {
            return { success: false, message: 'Invalid credentials' };
        }

        (await cookies()).set('user_id', user.id.toString());
        (await cookies()).set('user_name', user.name);

        return { success: true, message: 'Login successful', user };
    } catch (error: any) {
        return { success: false, message: error.message };
    }
}

export async function logoutAction() {
    (await cookies()).delete('user_id');
    (await cookies()).delete('user_name');
    return { success: true };
}

export async function getCurrentUser() {
    const userId = (await cookies()).get('user_id')?.value;
    if (!userId) return null;

    try {
        const stmt = db.prepare('SELECT id, name, email FROM users WHERE id = ?');
        const user = stmt.get(userId);
        return user;
    } catch (error) {
        return null;
    }
}

// --- Delivery Actions ---

// --- Delivery Actions ---

export async function deductPension(amount: number, platform: string = 'Generic') {
    const userId = (await cookies()).get('user_id')?.value;
    if (!userId) return { success: false, message: "Not authenticated" };

    console.log(`Processing deduction for amount: $${amount} from ${platform} for user ${userId}`);
    const pensionCut = amount * 0.01;

    try {
        const stmt = db.prepare('INSERT INTO deliveries (user_id, platform, amount, pension_cut) VALUES (?, ?, ?, ?)');
        const result = stmt.run(userId, platform, amount, pensionCut);

        revalidatePath('/dashboard');
        revalidatePath('/pension');
        return { success: true, data: { id: result.lastInsertRowid, amount, pensionCut } };
    } catch (error: any) {
        console.error("SQLite Error:", error);
        return { success: false, error: error.message };
    }
}

export async function getRecentDeliveries() {
    const userId = (await cookies()).get('user_id')?.value;
    if (!userId) return { success: true, data: [] }; // Return empty if not logged in

    try {
        const stmt = db.prepare('SELECT * FROM deliveries WHERE user_id = ? ORDER BY created_at DESC LIMIT 10');
        const transactions = stmt.all(userId);
        return { success: true, data: transactions };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}


// --- User Profile Actions ---

export async function getUserProfile() {
    // For MVP, user_profile is single row, but we should conceptually link it. 
    // Since table schema for user_profile wasn't changed to have user_id (it was a singleton mock), 
    // we will keep it as is for now, or assume row 1 is the current user. 
    // The prompt asked for "Recent Activities" specifically to be user logged.
    try {
        const user = db.prepare('SELECT * FROM user_profile LIMIT 1').get();
        return { success: true, data: user };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function updateUserProfile(data: { name: string; email: string; retirement_goal: number; daily_delivery_goal: number, contribution_rate?: number }) {
    try {
        const stmt = db.prepare(`
            UPDATE user_profile 
            SET name = ?, email = ?, retirement_goal = ?, daily_delivery_goal = ?, contribution_rate = ?
            WHERE id = (SELECT id FROM user_profile LIMIT 1)
        `);
        stmt.run(data.name, data.email, data.retirement_goal, data.daily_delivery_goal, data.contribution_rate || 1.0);

        revalidatePath('/profile');
        revalidatePath('/dashboard');
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

// --- Manual Delivery Actions ---

export async function logDelivery(platform: string, amount: number) {
    return deductPension(amount, platform);
}

export async function getTodayStats() {
    const userId = (await cookies()).get('user_id')?.value;
    if (!userId) return { success: true, data: { count: 0, total_earnings: 0 } };

    try {
        const stmt = db.prepare(`
            SELECT 
                COUNT(*) as count, 
                SUM(amount) as total_earnings 
            FROM deliveries 
            WHERE user_id = ? AND date(created_at) = date('now')
        `);
        const stats = stmt.get(userId) as { count: number, total_earnings: number };
        return {
            success: true,
            data: {
                count: stats.count || 0,
                total_earnings: stats.total_earnings || 0
            }
        };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getPensionBalance() {
    const userId = (await cookies()).get('user_id')?.value;
    if (!userId) return { success: true, data: 0 };

    try {
        const stmt = db.prepare('SELECT SUM(pension_cut) as total FROM deliveries WHERE user_id = ?');
        const result = stmt.get(userId) as { total: number } | undefined;
        return { success: true, data: result?.total || 0 };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getTotalDeliveries() {
    const userId = (await cookies()).get('user_id')?.value;
    if (!userId) return { success: true, data: 0 };

    try {
        const stmt = db.prepare('SELECT COUNT(*) as count FROM deliveries WHERE user_id = ?');
        const result = stmt.get(userId) as { count: number } | undefined;
        return { success: true, data: result?.count || 0 };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
