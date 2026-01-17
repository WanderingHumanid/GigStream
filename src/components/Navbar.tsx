"use client";

import { Wallet, LogOut, Verified } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const { user, isVerified, logout } = useAuth();

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between p-6 border-b border-gray-800/50 bg-[#121212]/80 backdrop-blur-xl">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <span className="font-bold text-black text-xs">GS</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-white">GigStream</span>
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pl-1 pr-4 py-1">
                        <div className="relative">
                            <img src={user.profileImage} alt={user.name} className="w-8 h-8 rounded-full bg-gray-700" />
                            {isVerified && (
                                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[1px]">
                                    <Verified size={12} className="text-blue-500 fill-blue-500 text-white" />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-white leading-none">{user.name}</span>
                            <span className="text-[10px] text-gray-400 leading-none mt-0.5">{isVerified ? "Verified Driver" : "Unverified"}</span>
                        </div>
                        <button onClick={logout} className="ml-2 text-gray-500 hover:text-white transition-colors">
                            <LogOut size={14} />
                        </button>
                    </div>
                ) : (
                    <button className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-5 py-2.5 rounded-2xl hover:bg-emerald-500/20 transition-all font-semibold text-sm border border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <Wallet size={18} />
                        Connect Wallet
                    </button>
                )}
            </div>
        </nav>
    );
}
