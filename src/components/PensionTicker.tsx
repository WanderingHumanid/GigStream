"use client";

import { useEffect, useState } from "react";
import { getPensionBalance } from "@/app/actions";
import { TrendingUp, Loader2 } from "lucide-react";

export default function PensionTicker() {
    const [balance, setBalance] = useState<number | null>(null);

    useEffect(() => {
        const fetchBalance = async () => {
            const res = await getPensionBalance();
            if (res.success) {
                setBalance(res.data as number);
            }
        };
        fetchBalance();

        // Optional: Poll every few seconds to keep it "live" if user logs delivery in another tab
        const interval = setInterval(fetchBalance, 10000);
        return () => clearInterval(interval);
    }, []);

    if (balance === null) return <div className="w-20 h-8 animate-pulse bg-gray-800 rounded-lg"></div>;

    return (
        <div className="hidden md:flex items-center gap-2 bg-[#18181b] border border-gray-800 rounded-full px-3 py-1.5 text-sm font-bold shadow-sm">
            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <TrendingUp size={12} />
            </div>
            <span className="text-emerald-400 font-mono">
                ${balance.toFixed(2)}
            </span>
            <span className="text-gray-600 text-xs font-medium">Pension</span>
        </div>
    );
}
