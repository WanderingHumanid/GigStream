"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PensionHero from "@/components/PensionHero";
import FuturePredictor from "@/components/FuturePredictor";
import RecentDeliveries from "@/components/RecentDeliveries";
import AIInsightsFeed from "@/components/AIInsightsFeed";
import RoadToRetirement from "@/components/RoadToRetirement";
import { usePensionStream } from "@/hooks/usePensionStream";

export default function Dashboard() {
    const [dailyDeliveries, setDailyDeliveries] = useState(12);
    const { currentBalance, isStreaming } = usePensionStream(dailyDeliveries);

    return (
        <main className="min-h-screen bg-[#121212] selection:bg-emerald-500/30">
            <Navbar />

            <div className="w-full max-w-[1400px] mx-auto px-6 pb-20 pt-6">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Main Content Area (Left) */}
                    <div className="flex-1 flex flex-col gap-8 w-full">
                        <PensionHero
                            dailyDeliveries={dailyDeliveries}
                            currentBalance={currentBalance}
                            isStreaming={isStreaming}
                        />
                        <RoadToRetirement currentBalance={currentBalance} />
                        <FuturePredictor dailyDeliveries={dailyDeliveries} setDailyDeliveries={setDailyDeliveries} />
                        <RecentDeliveries />
                    </div>

                    {/* Sidebar Area (Right) */}
                    <aside className="hidden lg:block sticky top-24">
                        <AIInsightsFeed dailyDeliveries={dailyDeliveries} currentBalance={currentBalance} />
                    </aside>

                    {/* Mobile Sidebar (Stacked) - Optional: could hide or show differently */}
                    <div className="lg:hidden w-full">
                        <AIInsightsFeed dailyDeliveries={dailyDeliveries} currentBalance={currentBalance} />
                    </div>

                </div>
            </div>
        </main>
    );
}
