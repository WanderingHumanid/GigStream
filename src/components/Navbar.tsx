"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { LogOut, Wallet } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import PensionTicker from "./PensionTicker";
import { useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { toast } from "sonner";

export default function Navbar() {
    const { user, logout } = useAuth();
    const { isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();

    const handleLogout = () => {
        if (isConnected) {
            disconnect();
        }
        logout();
    };

    useEffect(() => {
        if (isConnected && address) {
            toast.success("Wallet Connected Successfully!", {
                description: `Connected to ${address.slice(0, 6)}...${address.slice(-4)}`
            });
        }
    }, [isConnected, address]);

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
                {/* Custom Connect Button */}
                <div className="mr-2">
                    <ConnectButton.Custom>
                        {({
                            account,
                            chain,
                            openAccountModal,
                            openChainModal,
                            openConnectModal,
                            authenticationStatus,
                            mounted,
                        }) => {
                            const ready = mounted && authenticationStatus !== 'loading';
                            const connected =
                                ready &&
                                account &&
                                chain &&
                                (!authenticationStatus ||
                                    authenticationStatus === 'authenticated');

                            return (
                                <div
                                    {...(!ready && {
                                        'aria-hidden': true,
                                        'style': {
                                            opacity: 0,
                                            pointerEvents: 'none',
                                            userSelect: 'none',
                                        },
                                    })}
                                >
                                    {(() => {
                                        if (!connected) {
                                            return (
                                                <button
                                                    onClick={() => {
                                                        console.log("Connect Wallet Clicked");
                                                        console.log("OpenConnectModal type:", typeof openConnectModal);
                                                        if (openConnectModal) openConnectModal();
                                                    }}
                                                    className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-5 py-2.5 rounded-2xl hover:bg-emerald-500/20 transition-all font-semibold text-sm border border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                                >
                                                    <Wallet size={18} />
                                                    Connect Wallet
                                                </button>
                                            );
                                        }

                                        if (chain.unsupported) {
                                            return (
                                                <button onClick={openChainModal} className="bg-red-500/10 text-red-500 px-4 py-2 rounded-xl border border-red-500/20 font-bold text-sm">
                                                    Wrong Network
                                                </button>
                                            );
                                        }

                                        return (
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={openChainModal}
                                                    className="hidden md:flex items-center align-middle gap-2 bg-[#18181b] px-3 py-2 rounded-xl border border-gray-800 text-xs font-bold text-white hover:border-gray-700 transition"
                                                >
                                                    {chain.hasIcon && (
                                                        <div
                                                            style={{
                                                                background: chain.iconBackground,
                                                                width: 12,
                                                                height: 12,
                                                                borderRadius: 999,
                                                                overflow: 'hidden',
                                                                marginRight: 4,
                                                            }}
                                                        >
                                                            {chain.iconUrl && (
                                                                <img
                                                                    alt={chain.name ?? 'Chain icon'}
                                                                    src={chain.iconUrl}
                                                                    style={{ width: 12, height: 12 }}
                                                                />
                                                            )}
                                                        </div>
                                                    )}
                                                    {chain.name}
                                                </button>

                                                <button onClick={openAccountModal} className="bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-xl border border-emerald-500/20 font-bold text-sm hover:bg-emerald-500/20 transition-all">
                                                    {account.displayName}
                                                </button>
                                            </div>
                                        );
                                    })()}
                                </div>
                            );
                        }}
                    </ConnectButton.Custom>
                </div>

                {user ? (
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-1 bg-[#18181b] px-2 py-1.5 rounded-full border border-gray-800/50">
                            <NavLink href="/dashboard" label="Home" />
                            <div className="w-px h-4 bg-gray-800 mx-2"></div>
                            <NavLink href="/yield" label="Yield" />
                            <div className="w-px h-4 bg-gray-800 mx-2"></div>
                            <NavLink href="/help" label="Help" />
                            <div className="w-px h-4 bg-gray-800 mx-2"></div>
                            <NavLink href="/pension" label="Pension" />
                        </div>

                        <div className="hidden lg:block ml-2">
                            <PensionTicker />
                        </div>

                        <div className="h-6 w-px bg-gray-800 hidden md:block"></div>

                        <div className="flex items-center gap-3">
                            <a href="/profile" className="flex items-center gap-3 group">
                                <div className="w-9 h-9 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full border-2 border-[#121212] flex items-center justify-center text-xs font-bold text-black ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/50 transition-all">
                                    {userInitial}
                                </div>
                            </a>
                            <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded-full hover:bg-white/5">
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <a href="/" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
                        Log in
                    </a>
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
