"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Zap } from "lucide-react";

interface YieldBattleProps {
    initialPrincipal?: number;
    deliveryCount?: number;
}

export default function YieldBattle({ initialPrincipal = 50.00, deliveryCount = 0 }: YieldBattleProps) {
    const principal = initialPrincipal || 50.00;

    const [bankBalance, setBankBalance] = useState(principal > 0 ? principal : 50);
    const [streamBalance, setStreamBalance] = useState(principal > 0 ? principal : 50);

    const isDemo = principal === 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setBankBalance(prev => prev + 0.000001);
            setStreamBalance(prev => prev + 0.0005);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const bankGain = bankBalance - principal;
    const streamGain = streamBalance - principal;
    const diffMultiplier = (streamGain / (bankGain || 0.000001)).toFixed(1);

    return (
        <div className="w-full max-w-6xl mx-auto px-6 mb-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl"
            >

                {/* ------------------------------------------------ */}
                {/* LEFT SIDE: THE OLD WAY (BANK)                   */}
                {/* ------------------------------------------------ */}
                <div className="bg-[#18181b] p-8 md:p-12 flex flex-col justify-between relative group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-700"></div>

                    <div className="space-y-6 z-10">
                        <div className="flex items-center gap-3 text-gray-500">
                            <div className="p-3 bg-gray-800/50 rounded-xl">
                                <Building2 size={24} />
                            </div>
                            <h3 className="font-bold text-lg tracking-wide uppercase">Traditional Bank</h3>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm text-gray-500 font-medium">Your Deposit</p>
                            <div className="text-5xl md:text-6xl font-black text-gray-600 tracking-tighter tabular-nums">
                                ${bankBalance.toFixed(4)}
                            </div>
                            <p className="text-xs text-gray-600 font-mono pt-2">
                                +${bankGain.toFixed(6)} earned
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="flex items-center gap-2 text-gray-600 bg-gray-900/50 w-fit px-4 py-2 rounded-lg border border-gray-800">
                            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                            <span className="text-sm font-bold">0.5% APY</span>
                        </div>
                    </div>
                </div>


                {/* ------------------------------------------------ */}
                {/* RIGHT SIDE: THE NEW WAY (STREAM SETTLE)         */}
                {/* ------------------------------------------------ */}
                <div className="bg-[#0f281e] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-300"></div>

                    <div className="space-y-6 z-10">
                        <div className="flex items-center gap-3 text-emerald-400">
                            <div className="p-3 bg-emerald-500/10 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                <Zap size={24} className="fill-emerald-500 text-emerald-500" />
                            </div>
                            <h3 className="font-bold text-lg tracking-wide uppercase">StreamSettle</h3>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm text-emerald-500/70 font-medium">High Yield Protocol</p>
                            <div className="text-5xl md:text-6xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                ${streamBalance.toFixed(4)}
                            </div>
                            <div className="flex items-center gap-2 pt-2">
                                <p className="text-xs text-emerald-400 font-mono">
                                    +${streamGain.toFixed(6)} earned
                                </p>
                                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                                    {diffMultiplier}x Faster
                                </span>
                            </div>
                            {deliveryCount > 0 && (
                                <p className="text-xs text-emerald-500/60 font-medium pt-2">
                                    Fueled by your {deliveryCount} deliveries
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white bg-emerald-950/50 w-fit px-4 py-2 rounded-lg border border-emerald-500/30 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-bold">8.0% - 12% APY</span>
                        </div>

                        <button className="group flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                            Start Saving <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>

            </motion.div>

            <p className="text-center text-gray-500 text-xs mt-6">
                *Simulated projection based on current DeFi yield rates vs national average savings rate.
            </p>
        </div>
    );
}
