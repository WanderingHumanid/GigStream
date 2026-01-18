import Database from 'better-sqlite3';
import path from 'path';

// Initialize the database
// In Next.js dev mode, this might run multiple times, but better-sqlite3 checks lock file.
// For production, this path needs to be persistent.
const dbPath = path.join(process.cwd(), 'gigstream.db');
const db = new Database(dbPath);

// Create tables if they don't exist
const initDb = () => {
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

export default db;
