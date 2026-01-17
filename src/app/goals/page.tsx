"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const GOALS = [
    {
        id: "fire",
        title: "Retire Early (FIRE)",
        icon: Zap,
        description: "Aggressive saving for maximum freedom.",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        hover: "hover:border-orange-500/50"
    },
    {
        id: "safety",
        title: "Safety Net",
        icon: Shield,
        description: "Build a solid foundation for peace of mind.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        hover: "hover:border-emerald-500/50"
    },
    {
        id: "wealth",
        title: "Wealth Builder",
        icon: TrendingUp,
        description: "Balanced growth for a comfortable future.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        hover: "hover:border-blue-500/50"
    }
];

export default function GoalSetting() {
    const { updateGoal } = useAuth();
    const [selected, setSelected] = useState<string | null>(null);

    const handleContinue = () => {
        if (selected) {
            updateGoal(selected);
        }
    };

    return (
        <main className="min-h-screen bg-[#121212] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        What's your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Driver?</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Select your primary financial goal to customize your dashboard.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {GOALS.map((goal, index) => {
                        const Icon = goal.icon;
                        const isSelected = selected === goal.id;

                        return (
                            <motion.div
                                key={goal.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelected(goal.id)}
                                className={`
                                    cursor-pointer relative p-8 rounded-2xl border transition-all duration-300
                                    ${goal.bg} ${isSelected ? 'border-2 scale-105 shadow-2xl shadow-black/50' : `border border-transparent ${goal.border} ${goal.hover}`}
                                    ${isSelected ? goal.border.replace('/20', '') : ''}
                                `}
                            >
                                {isSelected && (
                                    <div className="absolute top-4 right-4 text-emerald-400">
                                        <CheckCircle2 size={24} />
                                    </div>
                                )}
                                <div className={`p-4 rounded-xl inline-flex mb-6 ${isSelected ? 'bg-white/10' : 'bg-black/20'} ${goal.color}`}>
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{goal.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{goal.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleContinue}
                        disabled={!selected}
                        className={`
                            flex items-center gap-2 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300
                            ${selected
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-105 shadow-lg shadow-emerald-500/20'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'}
                        `}
                    >
                        Continue to Verification <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </main>
    );
}
