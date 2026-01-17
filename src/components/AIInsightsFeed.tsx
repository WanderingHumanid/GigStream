"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Flame, ArrowRight } from "lucide-react";

interface AIInsightsFeedProps {
    dailyDeliveries: number;
}

export default function AIInsightsFeed({ dailyDeliveries }: AIInsightsFeedProps) {
    // Dynamic Logic for "Power Up" card
    const extraDeliveries = 3;
    const daysSaved = Math.round((extraDeliveries / Math.max(1, dailyDeliveries)) * 20); // Mock logic

    return (
        <div className="flex flex-col gap-6 w-full lg:w-80 shrink-0">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                AI Insights Feed
            </h3>

            {/* Card 1: Power Up */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-5 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all"></div>
                <div className="flex items-start justify-between mb-3 relative z-10">
                    <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                        <Zap size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-full">Pro Tip</span>
                </div>
                <h4 className="text-white font-bold mb-2">Power Up</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    If you increase your stream to <span className="text-white font-bold">1.5%</span> for this week, you'll reach your next milestone <span className="text-indigo-400 font-bold">{daysSaved} days earlier</span>.
                </p>
                <button className="flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
                    Apply Strategy <ArrowRight size={12} />
                </button>
            </motion.div>

            {/* Card 2: Market Watch */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#18181b] border border-gray-800 rounded-2xl p-5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
            >
                <div className="flex items-start justify-between mb-3">
                    <div className="bg-green-500/10 p-2 rounded-lg text-green-500">
                        <TrendingUp size={20} />
                    </div>
                </div>
                <h4 className="text-white font-bold mb-2">Market Watch</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Aave yield just increased to <span className="text-emerald-500 font-bold">5.2%</span>. Your projected 20-year total just grew by <span className="text-white font-bold">+$450</span>.
                </p>
            </motion.div>

            {/* Card 3: Streak */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#18181b] border border-gray-800 rounded-2xl p-5 relative overflow-hidden group hover:border-orange-500/30 transition-colors"
            >
                <div className="flex items-start justify-between mb-3">
                    <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500">
                        <Flame size={20} />
                    </div>
                </div>
                <h4 className="text-white font-bold mb-2">on Fire!</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                    You've streamed for <span className="text-orange-500 font-bold">5 days straight</span>. You're in the top 10% of consistent savers in your city!
                </p>
            </motion.div>
        </div>
    );
}
