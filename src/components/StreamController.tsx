"use client";

import { useSuperfluid } from "@/hooks/useSuperfluid";
import { Play, Square } from "lucide-react";

export default function StreamController({ onStartStream, onStopStream, isStreaming }: { onStartStream: () => void, onStopStream: () => void, isStreaming: boolean }) {
    const { createFlow, deleteFlow, wrapETH } = useSuperfluid();

    const handleWrap = async () => {
        await wrapETH("0.005");
    };

    // Rate: 1000 tokens / month ~ 0.00038 per second
    // 38580246913580 in wei units (approx)
    const FLOW_RATE = "38580246913580";

    const toggleStream = async () => {
        if (isStreaming) {
            await deleteFlow();
            onStopStream();
        } else {
            await createFlow(FLOW_RATE);
            onStartStream();
        }
    };

    return (
        <div className="bg-[#18181b] p-6 rounded-2xl border border-gray-800 mt-6">
            <h3 className="font-bold text-white mb-4">Pension Stream Control</h3>
            <button
                onClick={toggleStream}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${isStreaming
                    ? "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                    : "bg-emerald-500 text-black hover:bg-emerald-400"
                    }`}
            >
                {isStreaming ? (
                    <>
                        <Square size={18} fill="currentColor" /> Stop Stream
                    </>
                ) : (
                    <>
                        <Play size={18} fill="currentColor" /> Start Pension Stream
                    </>
                )}
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">
                Stream Rate: ~1000 ETHx / month
            </p>

            {/* Helper for Real-Deal Testing */}
            <div className="mt-4 pt-4 border-t border-gray-800">
                <button
                    onClick={handleWrap}
                    className="w-full text-xs font-bold text-gray-400 hover:text-white bg-white/5 py-2 rounded-lg hover:bg-white/10 transition"
                >
                    🍬 Wrap 0.01 ETH (Get Tokens)
                </button>
            </div>
        </div>
    );
}
