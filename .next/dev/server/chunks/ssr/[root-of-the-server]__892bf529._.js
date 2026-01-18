module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/pension/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PensionPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
;
;
const dynamic = "force-dynamic";
async function PensionPage() {
    const statsRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTodayStats"])();
    const todayCount = statsRes.success && statsRes.data ? statsRes.data.count : 0;
    // We reuse the hook here, though ideally context or global state management 
    // would keep this consistent across pages. For MVP, re-initializing is acceptable visually.
    // Client-side hook usage in Server Component wrapper? No, usePensionStream is likely a hook.
    // We need to wrap client parts. But wait, PensionPage was "use client".
    // If we make it server, we can't use the hook directly in the default export if it's async.
    // Actually, let's keep it simple. Let's make a wrapper or pass data to a client component.
    // OR, we can just fetch data in the component if it stays client, but we can't do async component then.
    // Best approach: Make PensionPage Server Component, move hook usage to a Client Component wrapper or push down.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PensionPageClient, {
        initialDailyDeliveries: todayCount
    }, void 0, false, {
        fileName: "[project]/src/app/pension/page.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
} // We need to create the client wrapper or split the file.
 // Easier: Split the file. But I only have one tool call per file right now.
 // Alternative: Fetch using SWR/useEffect in the original Client Component.
 // Let's stick to the pattern used in YieldPage: Server Page -> Client Component.
 // But PensionPage uses `usePensionStream` and renders `PensionHero`.
 // Let's verify `usePensionStream` usage.
}),
"[project]/src/app/pension/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/pension/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__892bf529._.js.map