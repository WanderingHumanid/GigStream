"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RecentDeliveries from "@/components/RecentDeliveries";
import AIInsightsFeed from "@/components/AIInsightsFeed";
import { usePensionStream } from "@/hooks/usePensionStream";
import { ArrowUpRight, Wallet, Leaf } from "lucide-react";

import DeliveryLogger from "@/components/DeliveryLogger";

export default function Dashboard() {
    const [dailyDeliveries, setDailyDeliveries] = useState(12);
    const { currentBalance, isStreaming } = usePensionStream(dailyDeliveries);

    return (
        <main className="min-h-screen bg-[#09090b] selection:bg-emerald-500/30">
            <Navbar />

            <div className="w-full max-w-[1200px] mx-auto px-6 pb-20 pt-8">

                {/* HERO SECTION: Net Worth & Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2 bg-[#121212] border border-gray-800 rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Wallet size={120} className="text-white" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-gray-400 font-medium mb-1">Total Net Worth</h2>
                            <div className="text-5xl font-black text-white tracking-tight mb-6">
                                ${(currentBalance * 2.5).toFixed(2)}
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
                                    <span className="block text-xs text-emerald-500 font-bold uppercase">Streaming</span>
                                    <span className="text-lg font-bold text-white">${currentBalance.toFixed(2)}</span>
                                </div>
                                <div className="bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20">
                                    <span className="block text-xs text-blue-500 font-bold uppercase">Pending</span>
                                    <span className="text-lg font-bold text-white">$145.20</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-900/20 to-[#121212] border border-emerald-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-[-20px] left-[-20px] w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
                        <Leaf className="text-emerald-500 mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Eco-Impact</h3>
                        <p className="text-gray-400 text-sm mb-4">Your green investments have offset <span className="text-white font-bold">12kg</span> of CO2.</p>
                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[65%]"></div>
                        </div>
                    </div>
                </div>

                {/* NEW COMPONENT: Delivery Logger */}
                <div className="mb-12">
                    <DeliveryLogger />
                </div>

                {/* Main Content Flow: Tools -> AI (Horizontal) -> Recent Activity */}
                <div className="flex flex-col gap-12">

                    {/* Your Tools */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Your Tools</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <a href="/yield" className="bg-[#18181b] p-6 rounded-2xl border border-gray-800 hover:border-emerald-500/50 hover:bg-[#1f1f23] transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 group-hover:text-emerald-400 transition-colors">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                                <h4 className="font-bold text-white text-lg">Yield Battle</h4>
                                <p className="text-sm text-gray-500 mt-1">Visualize your 8% vs 0.5% gains.</p>
                            </a>

                            <a href="/pension" className="bg-[#18181b] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-[#1f1f23] transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:text-blue-400 transition-colors">
                                        <Wallet size={24} />
                                    </div>
                                </div>
                                <h4 className="font-bold text-white text-lg">Pension Ticker</h4>
                                <p className="text-sm text-gray-500 mt-1">Track your real-time stream status.</p>
                            </a>
                        </div>
                    </div>

                    {/* Horizontal AI Feed */}
                    <AIInsightsFeed dailyDeliveries={dailyDeliveries} currentBalance={currentBalance} />

                    <div className="w-full h-px bg-gray-800/50"></div>

                    {/* Recent Activity */}
                    <RecentDeliveries />
                </div>
            </div>
        </main>
    );
}
