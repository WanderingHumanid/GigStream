
import { getPensionBalance, getTotalDeliveries } from "@/app/actions";
import YieldPageClient from "@/components/YieldPageClient";

export const dynamic = "force-dynamic";

export default async function YieldPage() {
    const balanceRes = await getPensionBalance();
    const deliveriesRes = await getTotalDeliveries();

    const balance = balanceRes.success && typeof balanceRes.data === 'number' ? balanceRes.data : 0;
    const deliveryCount = deliveriesRes.success && typeof deliveriesRes.data === 'number' ? deliveriesRes.data : 0;

    return (
        <YieldPageClient balance={balance} deliveryCount={deliveryCount} />
    );
}
