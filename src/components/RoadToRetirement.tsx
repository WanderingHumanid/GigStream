"use client";

import { motion } from "framer-motion";
import { Check, Trophy, Lock, Flame, Zap, Shield, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

interface RoadToRetirementProps {
    currentBalance: number;
}

const MILESTONE_SETS = {
    fire: [
        { id: 1, amount: 50, label: "Hustle Started", icon: Zap },
        { id: 2, amount: 200, label: "Aggressive Saver", icon: Flame },
        { id: 3, amount: 500, label: "Compound Genius", icon: TrendingUp },
        { id: 4, amount: 1500, label: "Freedom Fund", icon: Trophy },
        { id: 5, amount: 5000, label: "Mini-Retirement", icon: Trophy },
    ],
    safety: [
        { id: 1, amount: 20, label: "First Step", icon: Check },
        { id: 2, amount: 100, label: "Groceries Covered", icon: Shield },
        { id: 3, amount: 300, label: "Emergency Stash", icon: Lock },
        { id: 4, amount: 1000, label: "Rent Secure", icon: Lock },
        { id: 5, amount: 2500, label: "3 Months Safe", icon: Shield },
    ],
    wealth: [
        { id: 1, amount: 25, label: "Account Open", icon: Check },
        { id: 2, amount: 150, label: "Consistent Earner", icon: TrendingUp },
        { id: 3, amount: 400, label: "Investing 101", icon: TrendingUp },
        { id: 4, amount: 1200, label: "Portfolio Growing", icon: Trophy },
        { id: 5, amount: 3000, label: "Future Wealth", icon: Trophy },
    ],
    default: [
        { id: 1, amount: 10, label: "First Stream", icon: Check },
        { id: 2, amount: 50, label: "Weekly Goal Met", icon: Check },
        { id: 3, amount: 130, label: "1 Month Streak", icon: Flame },
        { id: 4, amount: 500, label: "Safety Net Started", icon: Lock },
        { id: 5, amount: 1200, label: "1 Year Rent", icon: Trophy },
    ]
};

export default function RoadToRetirement({ currentBalance }: RoadToRetirementProps) {
    const { user } = useAuth();
    // Default to 'default' set if no goal or invalid key
    const currentGoal = user?.retirementGoal as keyof typeof MILESTONE_SETS || 'default';
    const milestones = MILESTONE_SETS[currentGoal] || MILESTONE_SETS['default'];
    const maxAmount = milestones[milestones.length - 1].amount;

    return (
        <div className="w-full bg-[#18181b] border border-gray-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-1">Road to Retirement</h3>
                <p className="text-sm text-gray-500">
                    Milestones: <span className="text-emerald-400 capitalize">{currentGoal === 'fire' ? 'FIRE (Early Retire)' : currentGoal}</span>
                </p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-800 rounded-full">
                    {/* Progress Fill */}
                    <div
                        className="w-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ height: `${Math.min((currentBalance / maxAmount) * 100, 100)}%` }}
                    ></div>
                </div>

                <div className="space-y-8 relative z-10">
                    {milestones.map((milestone) => {
                        const isUnlocked = currentBalance >= milestone.amount;
                        const Icon = milestone.icon;

                        return (
                            <div key={milestone.id} className="flex items-center gap-4 group">
                                {/* Milestone Node */}
                                <div className={cn(
                                    "w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 shrink-0",
                                    isUnlocked
                                        ? "bg-emerald-500 border-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                                        : "bg-[#121212] border-gray-700 text-gray-600"
                                )}>
                                    <Icon size={isUnlocked ? 20 : 18} />
                                </div>

                                {/* Content */}
                                <div className={cn(
                                    "flex-1 transition-all duration-500",
                                    isUnlocked ? "opacity-100 translate-x-0" : "opacity-30 translate-x-0"
                                )}>
                                    <h4 className={cn("text-base font-bold", isUnlocked ? "text-white" : "text-gray-400")}>
                                        {milestone.label}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-mono text-gray-500">${milestone.amount} Target</span>
                                        {isUnlocked && (
                                            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                                Bit Saved
                                            </span>
                                        )}
                                    </div>

                                    {isUnlocked && milestone.id >= 3 && (
                                        <motion.button
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded-lg transition-colors"
                                        >
                                            Share Achievement
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
