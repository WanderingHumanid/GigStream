"use client";

import { Wallet, LogOut, Verified } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import PensionTicker from "./PensionTicker";

export default function Navbar() {
    const { user, logout } = useAuth();
    // @ts-ignore
    const userInitial = user?.name ? user.name[0] : "U";

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
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-1 bg-[#18181b] px-2 py-1.5 rounded-full border border-gray-800/50">
                            <NavLink href="/dashboard" label="Home" />
                            <div className="w-px h-4 bg-gray-800 mx-2"></div>
                            <NavLink href="/yield" label="Yield" />
                            <div className="w-px h-4 bg-gray-800 mx-2"></div>
                            <NavLink href="/pension" label="Pension" />
                        </div>

                        <div className="hidden lg:block ml-2">
                            <PensionTicker />
                        </div>

                        <div className="h-6 w-px bg-gray-800 hidden md:block"></div>

                        <div className="flex items-center gap-3">
                            <a href="/profile" className="flex items-center gap-3 group">
                                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors text-right hidden sm:block">
                                    {user.name}
                                </span>
                                <div className="w-9 h-9 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full border-2 border-[#121212] flex items-center justify-center text-xs font-bold text-black ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/50 transition-all">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            </a>
                            <button onClick={logout} className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded-full hover:bg-white/5">
                                <LogOut size={18} />
                            </button>
                        </div>
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

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <a href={href} className="text-sm font-bold text-gray-400 hover:text-white transition-colors relative group">
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
        </a>
    );
}
