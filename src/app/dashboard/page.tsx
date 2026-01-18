import { getUserStats, getTodayStats } from "@/app/actions";
import DashboardClient from "@/components/DashboardClient";

export default async function Dashboard() {
    // 1. Fetch Server Data directly
    const statsRes = await getUserStats();
    const todayRes = await getTodayStats();

    // safe defaults
    const stats = statsRes.success && statsRes.data ? statsRes.data : { totalEarnings: 0, totalStreamed: 0, pending: 0, netWorth: 0, yieldGained: 0 };
    const dailyDeliveries = todayRes.success && todayRes.data ? todayRes.data.count : 0;

    return (
        <DashboardClient
            initialStats={stats}
            todaysCount={dailyDeliveries}
        />
    );
}
