'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { ethers } from 'ethers';

// --- Blockchain Constants ---
const PROVIDER_URL = "https://rpc-amoy.polygon.technology/"; // Polygon Amoy RPC
const CONTRACT_ADDRESS = "0xC0BEaf390B583F5956D130A499C1C856d492B764";
const TOKEN_ADDRESS = "0x1b1626359e9239537f59d9972847c0b028bbe2b6";

const ABI = [
    {"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"getPensionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

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

export async function getUserStats() {
    const userId = (await cookies()).get('user_id')?.value;
    if (!userId) return { success: true, data: { totalEarnings: 0, totalStreamed: 0, pending: 0, netWorth: 0, yieldGained: 0 } };

    try {
        // 1. Get Earnings from SQLite
        const stmt = db.prepare(`
            SELECT 
                SUM(amount) as totalEarnings
            FROM deliveries 
            WHERE user_id = ?
        `);
        const result = stmt.get(userId) as { totalEarnings: number };
        const totalEarnings = result.totalEarnings || 0;

        // 2. Get Live Pension Balance from Blockchain
        let totalStreamed = 0;
        try {
            const provider = new ethers.JsonRpcProvider(PROVIDER_URL);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
            const balance: bigint = await contract.getPensionBalance(TOKEN_ADDRESS);
            totalStreamed = parseFloat(ethers.formatUnits(balance, 18)); // Assuming 18 decimals
        } catch (chainError) {
            console.error("Blockchain Error:", chainError);
            // Fallback to 0 if chain unreachable, or maybe cache? For now 0 or keep old behavior?
            // Prompt says: "Instead of querying SQLite... call getPensionBalance"
            totalStreamed = 0; 
        }

        const pending = totalEarnings - totalStreamed; // rough estimate
        // Actually, pending logic might be flawed if 'totalStreamed' is now real money in vault
        // and totalEarnings is what was logged.
        // If I log $100, pensionCut is $1.
        // If I streamed $1 to vault, totalStreamed is $1.
        // Pending is $99. Correct.

        const yieldGained = totalStreamed * 0.04; // Mock yield on top of real balance
        const netWorth = totalEarnings + yieldGained;

        return {
            success: true,
            data: {
                totalEarnings,
                totalStreamed,
                pending,
                netWorth,
                yieldGained
            }
        };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function prepareWithdrawal() {
    // Return encoded data for client to sign
    const iface = new ethers.Interface(ABI);
    const data = iface.encodeFunctionData("withdraw", [TOKEN_ADDRESS]);
    
    return {
        success: true,
        to: CONTRACT_ADDRESS,
        data: data,
        value: "0"
    };
}

export async function getLiveBalanceAction() {
    try {
        const provider = new ethers.JsonRpcProvider(PROVIDER_URL);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
        const balance: bigint = await contract.getPensionBalance(TOKEN_ADDRESS);
        const formatted = parseFloat(ethers.formatUnits(balance, 18));
        return { success: true, balance: formatted };
    } catch (error: any) {
        console.error("Live Balance Error:", error);
        return { success: false, error: error.message }; // Return error to let client handle retry
    }
}

export async function getUserProfile() {
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
    // Deprecated in favor of getLiveBalanceAction or getUserStats, but kept for compatibility if needed
    // or updated to use blockchain?
    // Let's update it to use blockchain just in case
    return getLiveBalanceAction();
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
