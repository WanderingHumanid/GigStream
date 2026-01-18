module.exports = [
"[project]/src/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs, [project]/node_modules/better-sqlite3)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
// Initialize the database
// In Next.js dev mode, this might run multiple times, but better-sqlite3 checks lock file.
// For production, this path needs to be persistent.
const dbPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'gigstream.db');
const db = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__["default"](dbPath);
// Create tables if they don't exist
const initDb = ()=>{
    // Deliveries Table
    db.exec(`
        CREATE TABLE IF NOT EXISTS deliveries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            platform TEXT NOT NULL,
            amount REAL NOT NULL,
            pension_cut REAL NOT NULL,
            status TEXT DEFAULT 'pending',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    // Migration: Add user_id if missing
    try {
        db.exec("ALTER TABLE deliveries ADD COLUMN user_id INTEGER");
    } catch (err) {
    // Column likely exists
    }
    // User Profile Table (for strictly local demo)
    db.exec(`
        CREATE TABLE IF NOT EXISTS user_profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            retirement_goal REAL DEFAULT 1000000,
            daily_delivery_goal INTEGER DEFAULT 12,
            contribution_rate REAL DEFAULT 1.0
        )
    `);
    // Migration for existing tables (safe add column)
    try {
        db.exec("ALTER TABLE user_profile ADD COLUMN contribution_rate REAL DEFAULT 1.0");
    } catch (err) {
    // Column likely exists
    }
    // Users Table for Authentication
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            name TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    // Seed default user if not exists
    const user = db.prepare('SELECT * FROM user_profile LIMIT 1').get();
    if (!user) {
        db.prepare('INSERT INTO user_profile (name, email, retirement_goal, daily_delivery_goal) VALUES (?, ?, ?, ?)').run('Gig Worker', 'worker@example.com', 1000000, 12);
    }
};
initDb();
const __TURBOPACK__default__export__ = db;
}),
"[project]/src/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000bd9fa8b488666613e062640fc6f4368d07aadfe":"getPensionBalance","007a03cbf77dcd1d1c393507cf97adc55f1a4c7139":"getTodayStats","007dfa8c5b463e4b54b60778dff1f137f77b9a8762":"getCurrentUser","00a51f74af4052aded4e3e70084fead39b7ace33b9":"getTotalDeliveries","00bb40412c575ed72142c43129f06b8fdbe766f8c7":"getRecentDeliveries","00ce7d3195f50a4f742871dad2c080aa91d00379bc":"logoutAction","00e21efef33cc8489298ef13ed5a8ed318a9ccf723":"getUserProfile","4023cc948914f548c3afa8f13b50f5bbd46640785a":"updateUserProfile","603102c0ae65968f51bafb3fce5c86483d1384fb32":"logDelivery","60646c74f8931d8f643861f4dfbebc8d3461ed00e1":"deductPension","60ab0e837fabd3624a0713b02ce650af01fc56aceb":"login","60c105fbc6d5287262e1d064267fb6a20261f563fa":"signup"},"",""] */ __turbopack_context__.s([
    "deductPension",
    ()=>deductPension,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getPensionBalance",
    ()=>getPensionBalance,
    "getRecentDeliveries",
    ()=>getRecentDeliveries,
    "getTodayStats",
    ()=>getTodayStats,
    "getTotalDeliveries",
    ()=>getTotalDeliveries,
    "getUserProfile",
    ()=>getUserProfile,
    "logDelivery",
    ()=>logDelivery,
    "login",
    ()=>login,
    "logoutAction",
    ()=>logoutAction,
    "signup",
    ()=>signup,
    "updateUserProfile",
    ()=>updateUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function signup(currentState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    if (!email || !password || !name) {
        return {
            success: false,
            message: 'All fields are required'
        };
    }
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)');
        const result = stmt.run(email, password, name);
        // Simple cookie session
        (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set('user_id', result.lastInsertRowid.toString());
        (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set('user_name', name); // For easy access
        return {
            success: true,
            message: 'Account created'
        };
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {
                success: false,
                message: 'Email already exists'
            };
        }
        return {
            success: false,
            message: error.message
        };
    }
}
async function login(currentState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM users WHERE email = ? AND password = ?');
        const user = stmt.get(email, password);
        if (!user) {
            return {
                success: false,
                message: 'Invalid credentials'
            };
        }
        (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set('user_id', user.id.toString());
        (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set('user_name', user.name);
        return {
            success: true,
            message: 'Login successful',
            user
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}
async function logoutAction() {
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete('user_id');
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete('user_name');
    return {
        success: true
    };
}
async function getCurrentUser() {
    const userId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_id')?.value;
    if (!userId) return null;
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, name, email FROM users WHERE id = ?');
        const user = stmt.get(userId);
        return user;
    } catch (error) {
        return null;
    }
}
async function deductPension(amount, platform = 'Generic') {
    const userId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_id')?.value;
    if (!userId) return {
        success: false,
        message: "Not authenticated"
    };
    console.log(`Processing deduction for amount: $${amount} from ${platform} for user ${userId}`);
    const pensionCut = amount * 0.01;
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('INSERT INTO deliveries (user_id, platform, amount, pension_cut) VALUES (?, ?, ?, ?)');
        const result = stmt.run(userId, platform, amount, pensionCut);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/pension');
        return {
            success: true,
            data: {
                id: result.lastInsertRowid,
                amount,
                pensionCut
            }
        };
    } catch (error) {
        console.error("SQLite Error:", error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getRecentDeliveries() {
    const userId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_id')?.value;
    if (!userId) return {
        success: true,
        data: []
    }; // Return empty if not logged in
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM deliveries WHERE user_id = ? ORDER BY created_at DESC LIMIT 10');
        const transactions = stmt.all(userId);
        return {
            success: true,
            data: transactions
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getUserProfile() {
    // For MVP, user_profile is single row, but we should conceptually link it. 
    // Since table schema for user_profile wasn't changed to have user_id (it was a singleton mock), 
    // we will keep it as is for now, or assume row 1 is the current user. 
    // The prompt asked for "Recent Activities" specifically to be user logged.
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM user_profile LIMIT 1').get();
        return {
            success: true,
            data: user
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateUserProfile(data) {
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`
            UPDATE user_profile 
            SET name = ?, email = ?, retirement_goal = ?, daily_delivery_goal = ?, contribution_rate = ?
            WHERE id = (SELECT id FROM user_profile LIMIT 1)
        `);
        stmt.run(data.name, data.email, data.retirement_goal, data.daily_delivery_goal, data.contribution_rate || 1.0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profile');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function logDelivery(platform, amount) {
    return deductPension(amount, platform);
}
async function getTodayStats() {
    const userId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_id')?.value;
    if (!userId) return {
        success: true,
        data: {
            count: 0,
            total_earnings: 0
        }
    };
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`
            SELECT 
                COUNT(*) as count, 
                SUM(amount) as total_earnings 
            FROM deliveries 
            WHERE user_id = ? AND date(created_at) = date('now')
        `);
        const stats = stmt.get(userId);
        return {
            success: true,
            data: {
                count: stats.count || 0,
                total_earnings: stats.total_earnings || 0
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getPensionBalance() {
    const userId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_id')?.value;
    if (!userId) return {
        success: true,
        data: 0
    };
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT SUM(pension_cut) as total FROM deliveries WHERE user_id = ?');
        const result = stmt.get(userId);
        return {
            success: true,
            data: result?.total || 0
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getTotalDeliveries() {
    const userId = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_id')?.value;
    if (!userId) return {
        success: true,
        data: 0
    };
    try {
        const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT COUNT(*) as count FROM deliveries WHERE user_id = ?');
        const result = stmt.get(userId);
        return {
            success: true,
            data: result?.count || 0
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signup,
    login,
    logoutAction,
    getCurrentUser,
    deductPension,
    getRecentDeliveries,
    getUserProfile,
    updateUserProfile,
    logDelivery,
    getTodayStats,
    getPensionBalance,
    getTotalDeliveries
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signup, "60c105fbc6d5287262e1d064267fb6a20261f563fa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "60ab0e837fabd3624a0713b02ce650af01fc56aceb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutAction, "00ce7d3195f50a4f742871dad2c080aa91d00379bc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentUser, "007dfa8c5b463e4b54b60778dff1f137f77b9a8762", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deductPension, "60646c74f8931d8f643861f4dfbebc8d3461ed00e1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecentDeliveries, "00bb40412c575ed72142c43129f06b8fdbe766f8c7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserProfile, "00e21efef33cc8489298ef13ed5a8ed318a9ccf723", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserProfile, "4023cc948914f548c3afa8f13b50f5bbd46640785a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logDelivery, "603102c0ae65968f51bafb3fce5c86483d1384fb32", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTodayStats, "007a03cbf77dcd1d1c393507cf97adc55f1a4c7139", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPensionBalance, "000bd9fa8b488666613e062640fc6f4368d07aadfe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTotalDeliveries, "00a51f74af4052aded4e3e70084fead39b7ace33b9", null);
}),
"[project]/.next-internal/server/app/profile/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/.next-internal/server/app/profile/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000bd9fa8b488666613e062640fc6f4368d07aadfe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPensionBalance"],
    "007dfa8c5b463e4b54b60778dff1f137f77b9a8762",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"],
    "00ce7d3195f50a4f742871dad2c080aa91d00379bc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutAction"],
    "00e21efef33cc8489298ef13ed5a8ed318a9ccf723",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"],
    "4023cc948914f548c3afa8f13b50f5bbd46640785a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserProfile"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$profile$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/profile/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_90c45fe9._.js.map