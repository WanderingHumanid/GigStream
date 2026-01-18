"use client";

import Navbar from "@/components/Navbar";
import UserProfile from "@/components/UserProfile";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-[#121212] selection:bg-emerald-500/30">
            <Navbar />

            <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
                <UserProfile />
            </div>
        </main>
    );
}
