"use client";

import { logDelivery } from "@/app/actions";
import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export default function DeliveryLogger() {
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        const platform = formData.get("platform") as string;
        const amount = parseFloat(formData.get("amount") as string);

        if (!platform || !amount) {
            toast.error("Please enter both platform and amount.");
            setIsLoading(false);
            return;
        }

        const res = await logDelivery(platform, amount);

        if (res.success) {
            toast.success(`Logged $${amount} from ${platform}!`);
            (document.getElementById("delivery-form") as HTMLFormElement).reset();
        } else {
            toast.error("Failed for some reason. Try again.");
        }
        setIsLoading(false);
    }

    return (
        <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-500">
                    <Plus size={16} />
                </div>
                Log New Gig
            </h3>

            <form id="delivery-form" action={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:w-auto flex-1">
                    <label className="block text-xs text-gray-400 mb-1.5 ml-1">Platform</label>
                    <input
                        type="text"
                        name="platform"
                        placeholder="Uber, DoorDash..."
                        className="w-full bg-[#18181b] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                        required
                    />
                </div>

                <div className="w-full md:w-32">
                    <label className="block text-xs text-gray-400 mb-1.5 ml-1">Amount ($)</label>
                    <input
                        type="number"
                        name="amount"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full bg-[#18181b] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors font-mono"
                        required
                    />
                </div>

                <button
                    disabled={isLoading}
                    className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Logging..." : "Log Earnings"}
                </button>
            </form>
        </div>
    );
}
