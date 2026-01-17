"use client";

import { motion } from "framer-motion";
import { usePensionStream } from "@/hooks/usePensionStream";

interface PensionHeroProps {
    dailyDeliveries: number;
    currentBalance: number;
    isStreaming: boolean;
}

export default function PensionHero({ dailyDeliveries, currentBalance, isStreaming }: PensionHeroProps) {
    // const { currentBalance, isStreaming } = usePensionStream(dailyDeliveries); // Lifted to Dashboard


    // Financial Health Calculations
    // Gamification: Increase speed of calculation to show progress. 
    // In real life this is slow, but for "Hackathon Mode" we scale it up.
    const dailyCostOfLiving = 85;
    // We show "projected days funded" based on POTENTIAL, not just actual balance, to make it look exciting.
    // Or just make the balance bigger? No, let's keep balance realistic but show days funded with high precision.
    const daysFunded = currentBalance / dailyCostOfLiving;

    const yearOneGoal = 500;
    const progressPercent = Math.min((currentBalance / yearOneGoal) * 100, 100);

    // Dynamic Health Score
    const getHealthScore = () => {
        if (dailyDeliveries > 20) return { label: "Excellent", color: "text-emerald-500" };
        if (dailyDeliveries > 10) return { label: "Good", color: "text-blue-400" };
        return { label: "Fair", color: "text-yellow-400" };
    }
    const health = getHealthScore();

    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-20 text-center space-y-8 w-full max-w-4xl mx-auto px-6">

            {/* Streaming Pill */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/5 px-4 py-1.5 rounded-full border border-emerald-500/10"
            >
                <div className="relative flex h-2 w-2">
                    {isStreaming && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isStreaming ? 'bg-emerald-500' : 'bg-gray-500'}`}></span>
                </div>
                {isStreaming ? "System Active" : "Stream Paused"}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                {/* Metric Card 1: Balance & Score */}
                <div className="bg-[#18181b] border border-gray-800 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-500">
                            <path d="M12 2v20M2 12h20" />
                        </svg>
                    </div>
                    <h2 className="text-gray-400 font-medium text-sm mb-2">Pension Balance</h2>
                    <div className="text-5xl md:text-6xl font-black text-white tracking-tighter tabular-nums mb-4">
                        ${currentBalance.toFixed(5)}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-800">
                        <span>Financial Health Score:</span>
                        <span className={`${health.color} font-bold`}>{health.label}</span>
                    </div>
                </div>

                {/* Metric Card 2: Days Funded & Milestones */}
                <div className="bg-[#18181b] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between text-left relative overflow-hidden">

                    <div className="mb-6">
                        <h3 className="text-gray-400 font-medium text-sm mb-1">Retirement Freedom</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-white tabular-nums">{daysFunded.toFixed(6)}</span>
                            <span className="text-emerald-500 font-medium">Days Funded</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Based on ${dailyCostOfLiving}/day cost of living.</p>
                    </div>

                    <div>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Year 1 Goal</span>
                            <span className="text-xs text-white font-bold">{progressPercent.toFixed(1)}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercent}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-emerald-500"
                            />
                        </div>
                        <p className="text-right text-[10px] text-gray-600 mt-1">${currentBalance.toFixed(0)} / ${yearOneGoal}</p>
                    </div>
                </div>

            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 max-w-md text-sm"
            >
                <span className="text-gray-300 decoration-emerald-500 underline decoration-1 underline-offset-4">12 deliveries</span> completed today. Your consistent activity is compounding daily.
            </motion.p>
        </div>
    );
}
