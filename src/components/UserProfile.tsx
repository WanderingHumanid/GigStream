"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getUserProfile, updateUserProfile } from "@/app/actions";
import { User, Save, Loader2 } from "lucide-react";

export default function UserProfile() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        retirement_goal: 1000000,
        daily_delivery_goal: 12,
        contribution_rate: 1.0
    });

    useEffect(() => {
        getUserProfile().then((res) => {
            if (res.success && res.data) {
                // Cast or ensure data matches the shape
                setFormData(res.data as any);
            }
            setLoading(false);
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name.includes("goal") ? Number(value) : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage("");

        const res = await updateUserProfile(formData);
        if (res.success) {
            setMessage("Profile updated successfully!");
        } else {
            setMessage("Error updating profile.");
        }
        setSaving(false);
    };

    if (loading) return <div className="text-white p-10">Loading profile...</div>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#18181b] border border-gray-800 rounded-3xl p-8 max-w-2xl mx-auto"
        >
            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    {formData.name.charAt(0) || "U"}
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Your Profile</h2>
                    <p className="text-gray-400 text-sm">Manage your personal details and financial goals.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Retirement Goal ($)</label>
                        <input
                            type="number"
                            name="retirement_goal"
                            value={formData.retirement_goal}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors font-mono"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Daily Delivery Goal</label>
                        <input
                            type="number"
                            name="daily_delivery_goal"
                            value={formData.daily_delivery_goal}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Pension Contribution (%)</label>
                        <input
                            type="number"
                            name="contribution_rate"
                            step="0.1"
                            max="100"
                            value={formData.contribution_rate || 1.0}
                            onChange={handleChange}
                            className="w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                    <p className={`text-sm font-medium ${message.includes("Error") ? "text-red-500" : "text-emerald-500"}`}>
                        {message}
                    </p>
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl flex items-center gap-2 transition-transform active:scale-95 disabled:opacity-50"
                    >
                        {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                        Save Changes
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
