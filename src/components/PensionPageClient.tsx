"use client";

import Navbar from "@/components/Navbar";
import PensionHero from "@/components/PensionHero";
import RecentDeliveries from "@/components/RecentDeliveries";
import { usePensionStream } from "@/hooks/usePensionStream";

export default function PensionPageClient({ initialDailyDeliveries }: { initialDailyDeliveries: number }) {
    const { currentBalance, isStreaming } = usePensionStream(initialDailyDeliveries);

    return (
        <main className="min-h-screen bg-[#121212] selection:bg-emerald-500/30">
            <Navbar />

            <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="flex-1">
                        <PensionHero
                            dailyDeliveries={initialDailyDeliveries}
                            currentBalance={currentBalance}
                            isStreaming={isStreaming}
                        />

                        <div className="mt-8">
                            <RecentDeliveries />
                        </div>
                    </div>

                    {/* Sidebar / Extra Info */}
                    <aside className="w-full lg:w-80 space-y-6">
                        <div className="bg-[#18181b] border border-gray-800 rounded-2xl p-6">
                            <h3 className="font-bold text-white mb-3">How it works</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Every time you complete a gig, a micro-transaction (1%) is streamed instantly into a DeFi yield pool.
                            </p>
                            <div className="bg-emerald-500/10 text-emerald-500 text-xs font-bold px-3 py-2 rounded-lg inline-block">
                                Powered by Superfluid
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
}
