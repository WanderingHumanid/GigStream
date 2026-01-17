"use client";

import { useState, useMemo } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { MoveRight } from "lucide-react";

interface FuturePredictorProps {
    dailyDeliveries: number;
    setDailyDeliveries: (value: number) => void;
}

export default function FuturePredictor({ dailyDeliveries, setDailyDeliveries }: FuturePredictorProps) {
    // const [dailyDeliveries, setDailyDeliveries] = useState(12); // Lifted to Dashboard
    const [contributionRate, setContributionRate] = useState(0.01); // 1% default

    const data = useMemo(() => {
        const ratePerDelivery = 50 * contributionRate; // Assuming $50 order value
        const annualReturn = 0.08; // 8% APY
        const years = 20;
        const workingDays = 260;

        let currentPrincipal = 0;
        const projection = [];

        for (let year = 1; year <= years; year++) {
            const annualContribution = dailyDeliveries * ratePerDelivery * workingDays;
            currentPrincipal = (currentPrincipal + annualContribution) * (1 + annualReturn);
            projection.push({
                year: `Y${year}`,
                amount: Math.round(currentPrincipal),
            });
        }
        return projection;
    }, [dailyDeliveries, contributionRate]);

    return (
        <div className="w-full max-w-6xl mx-auto px-6 pb-20">
            <div className="bg-[#18181b] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden group">
                {/* Ambient Background Glow */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-700"></div>

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8 relative z-10">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Your Future Self</h3>
                        <p className="text-gray-400">Projected growth over 20 years based on activity.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
                        {/* Stream Rate Toggle */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-emerald-500">Stream Rate</label>
                            <div className="flex bg-[#121212] p-1 rounded-xl border border-gray-700">
                                <button
                                    onClick={() => setContributionRate(0.01)}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${contributionRate === 0.01 ? 'bg-emerald-500 text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
                                >
                                    1%
                                </button>
                                <button
                                    onClick={() => setContributionRate(0.02)}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${contributionRate === 0.02 ? 'bg-emerald-500 text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
                                >
                                    2%
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-emerald-500">Daily Deliveries</label>
                            <div className="flex items-center gap-3 bg-[#121212] p-1.5 pl-4 rounded-xl border border-gray-700 focus-within:border-emerald-500 transition-colors">
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={dailyDeliveries}
                                    onChange={(e) => setDailyDeliveries(Number(e.target.value))}
                                    className="bg-transparent text-white font-bold text-xl w-16 text-center outline-none"
                                />
                                <div className="bg-gray-800 rounded-lg px-3 py-1.5 text-xs text-gray-400 font-medium">
                                    orders/day
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[350px] w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                            <XAxis
                                dataKey="year"
                                stroke="#52525b"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                interval={2}
                            />
                            <YAxis
                                stroke="#52525b"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value / 1000}k`}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                                itemStyle={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}
                                labelStyle={{ color: '#a1a1aa', marginBottom: '4px', fontSize: '12px' }}
                                formatter={(value: number | undefined) => [value ? `$${value.toLocaleString()}` : '', 'Projected Balance']}
                            />
                            <Area
                                type="monotone"
                                dataKey="amount"
                                stroke="#10b981"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorAmount)"
                                animationDuration={600}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 border-t border-gray-800 pt-6 gap-4">
                    <p>Assumptions: Average order value $50, {contributionRate * 100}% stream rate & 8% APY.</p>
                    <button className="flex items-center gap-2 text-white font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all group-hover:scale-105">
                        Start Contributing <MoveRight size={16} className="text-emerald-500" />
                    </button>
                </div>
            </div>
        </div>
    );
}
