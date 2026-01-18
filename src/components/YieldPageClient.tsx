"use client";

import Navbar from "@/components/Navbar";
import YieldBattle from "@/components/YieldBattle";
import { motion } from "framer-motion";

interface YieldPageClientProps {
    balance: number;
    deliveryCount: number;
}

export default function YieldPageClient({ balance, deliveryCount }: YieldPageClientProps) {
    return (
        <main className="min-h-screen bg-[#121212] selection:bg-emerald-500/30">
            <Navbar />

            <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        The Yield <span className="text-emerald-500">Battle</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        See exactly why your bank account is losing the fight against inflation,
                        and how StreamSettle puts your money to work instantly.
                    </p>
                </motion.div>

                <YieldBattle initialPrincipal={balance} deliveryCount={deliveryCount} />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Educational / Hype Cards can go here in future */}
                </div>
            </div>
        </main>
    );
}
