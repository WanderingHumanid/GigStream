import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { getRecentDeliveries } from "@/app/actions";
import { useEffect, useState } from "react";

// Define locally since we're decoupling from context for read
type Transaction = {
    id: number;
    user_id: number;
    platform: string;
    amount: number;
    pension_cut: number;
    created_at: string;
    // Mapped for display
    type: 'earning' | 'pension_stream';
    description: string;
    timestamp: Date;
};

export default function RecentDeliveries() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTx = async () => {
            const res = await getRecentDeliveries();
            // @ts-ignore
            if (res.success && res.data) {
                // Map DB shape to UI shape
                // @ts-ignore
                const mapped = res.data.map((tx: any) => ({
                    ...tx,
                    type: 'earning', // All logged deliveries are earnings
                    description: `${tx.platform} Delivery`,
                    timestamp: new Date(tx.created_at)
                }));
                setTransactions(mapped);
            }
            setLoading(false);
        };
        fetchTx();
    }, []);

    if (loading) return <div className="p-8 text-center text-gray-500">Loading activity...</div>;

    return (
        <div className="w-full bg-[#18181b] border border-gray-800 rounded-3xl p-8 relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-500 text-xs uppercase tracking-wider border-b border-gray-800">
                            <th className="pb-3 pl-4">Type</th>
                            <th className="pb-3">Description</th>
                            <th className="pb-3">Amount</th>
                            <th className="pb-3 text-right pr-4">Time</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {transactions.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="py-8 text-center text-gray-500">
                                    No recent activity. Log a delivery to see it here!
                                </td>
                            </tr>
                        ) : (
                            transactions.map((tx) => (
                                <motion.tr
                                    key={tx.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="group hover:bg-white/5 transition-colors border-b border-gray-800/50 last:border-0"
                                >
                                    <td className="py-4 pl-4">
                                        <div className={`p-2 rounded-lg w-fit ${tx.type === 'earning' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                            {tx.type === 'earning' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                                        </div>
                                    </td>
                                    <td className="py-4 font-medium text-gray-300">
                                        {tx.description}
                                    </td>
                                    <td className="py-4 font-bold text-white">
                                        ${tx.amount.toFixed(2)}
                                    </td>
                                    <td className="py-4 text-right pr-4 text-gray-500">
                                        {tx.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </td>
                                </motion.tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
