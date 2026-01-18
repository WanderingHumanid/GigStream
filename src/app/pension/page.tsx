import Navbar from "@/components/Navbar";
import PensionHero from "@/components/PensionHero";
import RecentDeliveries from "@/components/RecentDeliveries";
import { usePensionStream } from "@/hooks/usePensionStream";
import { getTodayStats } from "@/app/actions";
import PensionPageClient from "@/components/PensionPageClient";

export const dynamic = "force-dynamic";

export default async function PensionPage() {
    const statsRes = await getTodayStats();
    const todayCount = statsRes.success && statsRes.data ? statsRes.data.count : 0;

    // We reuse the hook here, though ideally context or global state management 
    // would keep this consistent across pages. For MVP, re-initializing is acceptable visually.
    // Client-side hook usage in Server Component wrapper? No, usePensionStream is likely a hook.
    // We need to wrap client parts. But wait, PensionPage was "use client".
    // If we make it server, we can't use the hook directly in the default export if it's async.
    // Actually, let's keep it simple. Let's make a wrapper or pass data to a client component.
    // OR, we can just fetch data in the component if it stays client, but we can't do async component then.
    // Best approach: Make PensionPage Server Component, move hook usage to a Client Component wrapper or push down.

    return (
        <PensionPageClient initialDailyDeliveries={todayCount} />
    );
}

// We need to create the client wrapper or split the file.
// Easier: Split the file. But I only have one tool call per file right now.
// Alternative: Fetch using SWR/useEffect in the original Client Component.
// Let's stick to the pattern used in YieldPage: Server Page -> Client Component.
// But PensionPage uses `usePensionStream` and renders `PensionHero`.
// Let's verify `usePensionStream` usage.

