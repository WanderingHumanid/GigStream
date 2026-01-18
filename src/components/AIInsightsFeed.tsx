"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Flame, ArrowRight } from "lucide-react";
import { useAiCoach } from "@/hooks/useAiCoach";
import InfoTooltip from "./InfoTooltip";

interface AIInsightsFeedProps {
    dailyDeliveries: number;
    currentBalance?: number;
    streakDays?: number; // Adding streak support for future or simplified mock
    totalStreamed?: number;
}

export default function AIInsightsFeed({ dailyDeliveries, totalStreamed = 0 }: AIInsightsFeedProps) {
    // Dynamic Logic for "Power Up" card
    const extraDeliveries = 3;
    const daysSaved = Math.round((extraDeliveries / Math.max(1, dailyDeliveries)) * 20); // Mock logic

    // AI Coach Integration (Mocking earnings for now based on deliveries)
    const { aiMessage, loading } = useAiCoach(dailyDeliveries * 15, dailyDeliveries);

    return (
        <div className="w-full">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                AI Insights & Stats
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Power Move (AI Coach) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden group h-full"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all"></div>

                    <div className="flex items-start justify-between mb-4 relative z-10">
                        <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400">
                            <Zap size={20} className="fill-emerald-500/50" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                            AI Coach
                        </span>
                    </div>

                    <h4 className="text-white font-bold mb-2">Power Move</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        {loading ? (
                            <span className="animate-pulse">Consulting the oracle... 🔮</span>
                        ) : (
                            aiMessage
                        )}
                    </p>
                </motion.div>

                {/* Card 2: Market Watch */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#18181b] border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/30 transition-colors h-full"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="bg-green-500/10 p-2 rounded-lg text-green-500">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                    <h4 className="text-white font-bold mb-2 flex items-center">
                        Market Watch <InfoTooltip text="Live feed from Aave Lending Pool (Mock for Demo)." />
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Aave yield just increased to <span className="text-emerald-500 font-bold">5.2%</span>. Your projected 20-year total just grew by <span className="text-white font-bold">+$450</span>.
                    </p>
                </motion.div>

                {/* Card 3: Streak */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-[#18181b] border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/30 transition-colors h-full"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500">
                            <Flame size={20} />
                        </div>
                    </div>
                    <h4 className="text-white font-bold mb-2">on Fire!</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Total Value Streamed: <span className="text-orange-500 font-bold">${totalStreamed.toFixed(2)}</span>. You're actively building your future!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
