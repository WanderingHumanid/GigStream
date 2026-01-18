"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logDelivery, getTodayStats, getUserProfile } from "@/app/actions";
import { Plus, Loader2, Check, Bike, DollarSign } from "lucide-react";
import { toast } from "sonner"; // Assuming sonner or generic toast, will use simple state for now if not installed

export default function DeliveryLogger() {
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);
    const [stats, setStats] = useState({ count: 0, total_earnings: 0 });
    const [goal, setGoal] = useState(12);

    // Form Stats
    const [platform, setPlatform] = useState("");
    const [amount, setAmount] = useState("");

    const fetchStats = async () => {
        const res = await getTodayStats();
        if (res.success && res.data) {
            setStats(res.data);
        }
    };

    useEffect(() => {
        fetchStats();
        // Also get goal
        getUserProfile().then(res => {
            if (res.success && res.data) {
                // @ts-ignore
                setGoal(res.data.daily_delivery_goal || 12);
            }
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!amount || !platform) return;

        const res = await logDelivery(platform, parseFloat(amount));
        if (res.success) {
            setAmount("");
            setIsAdding(false);
            fetchStats(); // Refresh stats
        }
        setLoading(false);
    };

    const progress = Math.min((stats.count / goal) * 100, 100);

    return (
        <div className="w-full bg-[#121212] border border-gray-800 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

                {/* Stats Section */}
                <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                            <Bike size={20} />
                        </div>
                        <h3 className="text-gray-400 font-medium uppercase text-xs tracking-wider">Today's Hustle</h3>
                    </div>

                    <div className="flex items-end gap-3 mb-4">
                        <span className="text-6xl font-black text-white leading-none tracking-tighter">
                            {stats.count}
                        </span>
                        <span className="text-gray-500 font-medium mb-1">
                            / {goal} deliveries
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-24 bg-gray-800"></div>

                {/* Action Section */}
                <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-4 min-w-[300px]">

                    <AnimatePresence mode="wait">
                        {!isAdding ? (
                            <motion.button
                                key="add-btn"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => setIsAdding(true)}
                                className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold h-14 px-8 rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all active:scale-95"
                            >
                                <Plus size={24} strokeWidth={3} />
                                Log Delivery
                            </motion.button>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3 w-full"
                            >
                                <div className="flex gap-2 w-full">
                                    <div className="relative flex-1">
                                        <Bike size={14} className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500" />
                                        <input
                                            type="text"
                                            placeholder="Platform (e.g. Uber)"
                                            value={platform}
                                            onChange={(e) => setPlatform(e.target.value)}
                                            className="w-full bg-[#18181b] border border-gray-700 text-white text-sm rounded-xl pl-8 pr-3 py-3 outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                    <div className="relative flex-1">
                                        <DollarSign size={14} className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500" />
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            autoFocus
                                            className="w-full bg-[#18181b] border border-gray-700 text-white text-sm rounded-xl pl-8 pr-3 py-3 outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsAdding(false)}
                                        className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-3 rounded-xl transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-[2] bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                                    >
                                        {loading ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
                                        {loading ? "Saving..." : "Confirm"}
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div >
    );
}
