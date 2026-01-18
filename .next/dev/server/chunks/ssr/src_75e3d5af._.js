module.exports = [
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Navbar() {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // @ts-ignore
    const userInitial = user?.name ? user.name[0] : "U";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 flex items-center justify-between p-6 border-b border-gray-800/50 bg-[#121212]/80 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-black text-xs",
                            children: "GS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-xl tracking-tight text-white",
                        children: "GigStream"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-1 bg-[#18181b] px-2 py-1.5 rounded-full border border-gray-800/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    href: "/dashboard",
                                    label: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-4 bg-gray-800 mx-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    href: "/yield",
                                    label: "Yield"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 27,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                                    href: "/pension",
                                    label: "Pension"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 w-px bg-gray-800 hidden md:block"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 31,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/profile",
                                    className: "flex items-center gap-3 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold text-gray-400 group-hover:text-white transition-colors text-right hidden sm:block",
                                            children: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 35,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full border-2 border-[#121212] flex items-center justify-center text-xs font-bold text-black ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/50 transition-all",
                                            children: user.name.charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 38,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 34,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: logout,
                                    className: "p-2 text-gray-500 hover:text-red-400 transition-colors rounded-full hover:bg-white/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 43,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 23,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-5 py-2.5 rounded-2xl hover:bg-emerald-500/20 transition-all font-semibold text-sm border border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this),
                        "Connect Wallet"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
function NavLink({ href, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: "text-sm font-bold text-gray-400 hover:text-white transition-colors relative group",
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/data:df8831 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserProfile",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00e21efef33cc8489298ef13ed5a8ed318a9ccf723":"getUserProfile"},"src/app/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00e21efef33cc8489298ef13ed5a8ed318a9ccf723", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserProfile");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgZGIgZnJvbSAnQC9saWIvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcclxuXHJcbi8vIC0tLSBBdXRoIEFjdGlvbnMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbnVwKGN1cnJlbnRTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIW5hbWUpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ0lOU0VSVCBJTlRPIHVzZXJzIChlbWFpbCwgcGFzc3dvcmQsIG5hbWUpIFZBTFVFUyAoPywgPywgPyknKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBzdG10LnJ1bihlbWFpbCwgcGFzc3dvcmQsIG5hbWUpO1xyXG5cclxuICAgICAgICAvLyBTaW1wbGUgY29va2llIHNlc3Npb25cclxuICAgICAgICAoYXdhaXQgY29va2llcygpKS5zZXQoJ3VzZXJfaWQnLCByZXN1bHQubGFzdEluc2VydFJvd2lkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIChhd2FpdCBjb29raWVzKCkpLnNldCgndXNlcl9uYW1lJywgbmFtZSk7IC8vIEZvciBlYXN5IGFjY2Vzc1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnQWNjb3VudCBjcmVhdGVkJyB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSAnU1FMSVRFX0NPTlNUUkFJTlRfVU5JUVVFJykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgZXhpc3RzJyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oY3VycmVudFN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykgYXMgc3RyaW5nO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSA/IEFORCBwYXNzd29yZCA9ID8nKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gc3RtdC5nZXQoZW1haWwsIHBhc3N3b3JkKSBhcyBhbnk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoYXdhaXQgY29va2llcygpKS5zZXQoJ3VzZXJfaWQnLCB1c2VyLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIChhd2FpdCBjb29raWVzKCkpLnNldCgndXNlcl9uYW1lJywgdXNlci5uYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0xvZ2luIHN1Y2Nlc3NmdWwnLCB1c2VyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dEFjdGlvbigpIHtcclxuICAgIChhd2FpdCBjb29raWVzKCkpLmRlbGV0ZSgndXNlcl9pZCcpO1xyXG4gICAgKGF3YWl0IGNvb2tpZXMoKSkuZGVsZXRlKCd1c2VyX25hbWUnKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgY29uc3QgdXNlcklkID0gKGF3YWl0IGNvb2tpZXMoKSkuZ2V0KCd1c2VyX2lkJyk/LnZhbHVlO1xyXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ1NFTEVDVCBpZCwgbmFtZSwgZW1haWwgRlJPTSB1c2VycyBXSEVSRSBpZCA9ID8nKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gc3RtdC5nZXQodXNlcklkKTtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBEZWxpdmVyeSBBY3Rpb25zIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlZHVjdFBlbnNpb24oYW1vdW50OiBudW1iZXIsIHBsYXRmb3JtOiBzdHJpbmcgPSAnR2VuZXJpYycpIHtcclxuICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzaW5nIGRlZHVjdGlvbiBmb3IgYW1vdW50OiAkJHthbW91bnR9IGZyb20gJHtwbGF0Zm9ybX1gKTtcclxuICAgIGNvbnN0IHBlbnNpb25DdXQgPSBhbW91bnQgKiAwLjAxO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ0lOU0VSVCBJTlRPIGRlbGl2ZXJpZXMgKHBsYXRmb3JtLCBhbW91bnQsIHBlbnNpb25fY3V0KSBWQUxVRVMgKD8sID8sID8pJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RtdC5ydW4ocGxhdGZvcm0sIGFtb3VudCwgcGVuc2lvbkN1dCk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9wZW5zaW9uJyk7IC8vIFJldmFsaWRhdGUgbmV3IHBlbnNpb24gcGFnZVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgaWQ6IHJlc3VsdC5sYXN0SW5zZXJ0Um93aWQsIGFtb3VudCwgcGVuc2lvbkN1dCB9IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNRTGl0ZSBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZW50RGVsaXZlcmllcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ1NFTEVDVCAqIEZST00gZGVsaXZlcmllcyBPUkRFUiBCWSBjcmVhdGVkX2F0IERFU0MgTElNSVQgMTAnKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBzdG10LmFsbCgpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRyYW5zYWN0aW9ucyB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gLS0tIFVzZXIgUHJvZmlsZSBBY3Rpb25zIC0tLVxyXG5cclxuLy8gLS0tIFVzZXIgUHJvZmlsZSBBY3Rpb25zIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gZGIucHJlcGFyZSgnU0VMRUNUICogRlJPTSB1c2VyX3Byb2ZpbGUgTElNSVQgMScpLmdldCgpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJQcm9maWxlKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBlbWFpbDogc3RyaW5nOyByZXRpcmVtZW50X2dvYWw6IG51bWJlcjsgZGFpbHlfZGVsaXZlcnlfZ29hbDogbnVtYmVyLCBjb250cmlidXRpb25fcmF0ZT86IG51bWJlciB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKGBcclxuICAgICAgICAgICAgVVBEQVRFIHVzZXJfcHJvZmlsZSBcclxuICAgICAgICAgICAgU0VUIG5hbWUgPSA/LCBlbWFpbCA9ID8sIHJldGlyZW1lbnRfZ29hbCA9ID8sIGRhaWx5X2RlbGl2ZXJ5X2dvYWwgPSA/LCBjb250cmlidXRpb25fcmF0ZSA9ID9cclxuICAgICAgICAgICAgV0hFUkUgaWQgPSAoU0VMRUNUIGlkIEZST00gdXNlcl9wcm9maWxlIExJTUlUIDEpXHJcbiAgICAgICAgYCk7XHJcbiAgICAgICAgc3RtdC5ydW4oZGF0YS5uYW1lLCBkYXRhLmVtYWlsLCBkYXRhLnJldGlyZW1lbnRfZ29hbCwgZGF0YS5kYWlseV9kZWxpdmVyeV9nb2FsLCBkYXRhLmNvbnRyaWJ1dGlvbl9yYXRlIHx8IDEuMCk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gTWFudWFsIERlbGl2ZXJ5IEFjdGlvbnMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nRGVsaXZlcnkocGxhdGZvcm06IHN0cmluZywgYW1vdW50OiBudW1iZXIpIHtcclxuICAgIC8vIFJldXNlIHNwZWNpZmljIHBlbnNpb24gZGVkdWN0aW9uIGxvZ2ljIG9yIGN1c3RvbSBsb2dpY1xyXG4gICAgcmV0dXJuIGRlZHVjdFBlbnNpb24oYW1vdW50LCBwbGF0Zm9ybSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb2RheVN0YXRzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdG10ID0gZGIucHJlcGFyZShgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcclxuICAgICAgICAgICAgICAgIENPVU5UKCopIGFzIGNvdW50LCBcclxuICAgICAgICAgICAgICAgIFNVTShhbW91bnQpIGFzIHRvdGFsX2Vhcm5pbmdzIFxyXG4gICAgICAgICAgICBGUk9NIGRlbGl2ZXJpZXMgXHJcbiAgICAgICAgICAgIFdIRVJFIGRhdGUoY3JlYXRlZF9hdCkgPSBkYXRlKCdub3cnKVxyXG4gICAgICAgIGApO1xyXG4gICAgICAgIGNvbnN0IHN0YXRzID0gc3RtdC5nZXQoKSBhcyB7IGNvdW50OiBudW1iZXIsIHRvdGFsX2Vhcm5pbmdzOiBudW1iZXIgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudDogc3RhdHMuY291bnQgfHwgMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsX2Vhcm5pbmdzOiBzdGF0cy50b3RhbF9lYXJuaW5ncyB8fCAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVJBNEdzQiwyTEFBQSJ9
}),
"[project]/src/app/data:58326d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateUserProfile",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4023cc948914f548c3afa8f13b50f5bbd46640785a":"updateUserProfile"},"src/app/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4023cc948914f548c3afa8f13b50f5bbd46640785a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUserProfile");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgZGIgZnJvbSAnQC9saWIvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcclxuXHJcbi8vIC0tLSBBdXRoIEFjdGlvbnMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbnVwKGN1cnJlbnRTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIW5hbWUpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ0lOU0VSVCBJTlRPIHVzZXJzIChlbWFpbCwgcGFzc3dvcmQsIG5hbWUpIFZBTFVFUyAoPywgPywgPyknKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBzdG10LnJ1bihlbWFpbCwgcGFzc3dvcmQsIG5hbWUpO1xyXG5cclxuICAgICAgICAvLyBTaW1wbGUgY29va2llIHNlc3Npb25cclxuICAgICAgICAoYXdhaXQgY29va2llcygpKS5zZXQoJ3VzZXJfaWQnLCByZXN1bHQubGFzdEluc2VydFJvd2lkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIChhd2FpdCBjb29raWVzKCkpLnNldCgndXNlcl9uYW1lJywgbmFtZSk7IC8vIEZvciBlYXN5IGFjY2Vzc1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnQWNjb3VudCBjcmVhdGVkJyB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSAnU1FMSVRFX0NPTlNUUkFJTlRfVU5JUVVFJykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgZXhpc3RzJyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oY3VycmVudFN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykgYXMgc3RyaW5nO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSA/IEFORCBwYXNzd29yZCA9ID8nKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gc3RtdC5nZXQoZW1haWwsIHBhc3N3b3JkKSBhcyBhbnk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoYXdhaXQgY29va2llcygpKS5zZXQoJ3VzZXJfaWQnLCB1c2VyLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIChhd2FpdCBjb29raWVzKCkpLnNldCgndXNlcl9uYW1lJywgdXNlci5uYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0xvZ2luIHN1Y2Nlc3NmdWwnLCB1c2VyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dEFjdGlvbigpIHtcclxuICAgIChhd2FpdCBjb29raWVzKCkpLmRlbGV0ZSgndXNlcl9pZCcpO1xyXG4gICAgKGF3YWl0IGNvb2tpZXMoKSkuZGVsZXRlKCd1c2VyX25hbWUnKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgY29uc3QgdXNlcklkID0gKGF3YWl0IGNvb2tpZXMoKSkuZ2V0KCd1c2VyX2lkJyk/LnZhbHVlO1xyXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ1NFTEVDVCBpZCwgbmFtZSwgZW1haWwgRlJPTSB1c2VycyBXSEVSRSBpZCA9ID8nKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gc3RtdC5nZXQodXNlcklkKTtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBEZWxpdmVyeSBBY3Rpb25zIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlZHVjdFBlbnNpb24oYW1vdW50OiBudW1iZXIsIHBsYXRmb3JtOiBzdHJpbmcgPSAnR2VuZXJpYycpIHtcclxuICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzaW5nIGRlZHVjdGlvbiBmb3IgYW1vdW50OiAkJHthbW91bnR9IGZyb20gJHtwbGF0Zm9ybX1gKTtcclxuICAgIGNvbnN0IHBlbnNpb25DdXQgPSBhbW91bnQgKiAwLjAxO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ0lOU0VSVCBJTlRPIGRlbGl2ZXJpZXMgKHBsYXRmb3JtLCBhbW91bnQsIHBlbnNpb25fY3V0KSBWQUxVRVMgKD8sID8sID8pJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RtdC5ydW4ocGxhdGZvcm0sIGFtb3VudCwgcGVuc2lvbkN1dCk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9wZW5zaW9uJyk7IC8vIFJldmFsaWRhdGUgbmV3IHBlbnNpb24gcGFnZVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHsgaWQ6IHJlc3VsdC5sYXN0SW5zZXJ0Um93aWQsIGFtb3VudCwgcGVuc2lvbkN1dCB9IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNRTGl0ZSBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZW50RGVsaXZlcmllcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RtdCA9IGRiLnByZXBhcmUoJ1NFTEVDVCAqIEZST00gZGVsaXZlcmllcyBPUkRFUiBCWSBjcmVhdGVkX2F0IERFU0MgTElNSVQgMTAnKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBzdG10LmFsbCgpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRyYW5zYWN0aW9ucyB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gLS0tIFVzZXIgUHJvZmlsZSBBY3Rpb25zIC0tLVxyXG5cclxuLy8gLS0tIFVzZXIgUHJvZmlsZSBBY3Rpb25zIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gZGIucHJlcGFyZSgnU0VMRUNUICogRlJPTSB1c2VyX3Byb2ZpbGUgTElNSVQgMScpLmdldCgpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJQcm9maWxlKGRhdGE6IHsgbmFtZTogc3RyaW5nOyBlbWFpbDogc3RyaW5nOyByZXRpcmVtZW50X2dvYWw6IG51bWJlcjsgZGFpbHlfZGVsaXZlcnlfZ29hbDogbnVtYmVyLCBjb250cmlidXRpb25fcmF0ZT86IG51bWJlciB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0bXQgPSBkYi5wcmVwYXJlKGBcclxuICAgICAgICAgICAgVVBEQVRFIHVzZXJfcHJvZmlsZSBcclxuICAgICAgICAgICAgU0VUIG5hbWUgPSA/LCBlbWFpbCA9ID8sIHJldGlyZW1lbnRfZ29hbCA9ID8sIGRhaWx5X2RlbGl2ZXJ5X2dvYWwgPSA/LCBjb250cmlidXRpb25fcmF0ZSA9ID9cclxuICAgICAgICAgICAgV0hFUkUgaWQgPSAoU0VMRUNUIGlkIEZST00gdXNlcl9wcm9maWxlIExJTUlUIDEpXHJcbiAgICAgICAgYCk7XHJcbiAgICAgICAgc3RtdC5ydW4oZGF0YS5uYW1lLCBkYXRhLmVtYWlsLCBkYXRhLnJldGlyZW1lbnRfZ29hbCwgZGF0YS5kYWlseV9kZWxpdmVyeV9nb2FsLCBkYXRhLmNvbnRyaWJ1dGlvbl9yYXRlIHx8IDEuMCk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZScpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gTWFudWFsIERlbGl2ZXJ5IEFjdGlvbnMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nRGVsaXZlcnkocGxhdGZvcm06IHN0cmluZywgYW1vdW50OiBudW1iZXIpIHtcclxuICAgIC8vIFJldXNlIHNwZWNpZmljIHBlbnNpb24gZGVkdWN0aW9uIGxvZ2ljIG9yIGN1c3RvbSBsb2dpY1xyXG4gICAgcmV0dXJuIGRlZHVjdFBlbnNpb24oYW1vdW50LCBwbGF0Zm9ybSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb2RheVN0YXRzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdG10ID0gZGIucHJlcGFyZShgXHJcbiAgICAgICAgICAgIFNFTEVDVCBcclxuICAgICAgICAgICAgICAgIENPVU5UKCopIGFzIGNvdW50LCBcclxuICAgICAgICAgICAgICAgIFNVTShhbW91bnQpIGFzIHRvdGFsX2Vhcm5pbmdzIFxyXG4gICAgICAgICAgICBGUk9NIGRlbGl2ZXJpZXMgXHJcbiAgICAgICAgICAgIFdIRVJFIGRhdGUoY3JlYXRlZF9hdCkgPSBkYXRlKCdub3cnKVxyXG4gICAgICAgIGApO1xyXG4gICAgICAgIGNvbnN0IHN0YXRzID0gc3RtdC5nZXQoKSBhcyB7IGNvdW50OiBudW1iZXIsIHRvdGFsX2Vhcm5pbmdzOiBudW1iZXIgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudDogc3RhdHMuY291bnQgfHwgMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsX2Vhcm5pbmdzOiBzdGF0cy50b3RhbF9lYXJuaW5ncyB8fCAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1JBcUhzQiw4TEFBQSJ9
}),
"[project]/src/components/UserProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$df8831__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:df8831 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$58326d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:58326d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
"use client";
;
;
;
;
;
function UserProfile() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        retirement_goal: 1000000,
        daily_delivery_goal: 12,
        contribution_rate: 1.0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$df8831__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserProfile"])().then((res)=>{
            if (res.success && res.data) {
                // Cast or ensure data matches the shape
                setFormData(res.data);
            }
            setLoading(false);
        });
    }, []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: name.includes("goal") ? Number(value) : value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSaving(true);
        setMessage("");
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$58326d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUserProfile"])(formData);
        if (res.success) {
            setMessage("Profile updated successfully!");
        } else {
            setMessage("Error updating profile.");
        }
        setSaving(false);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-white p-10",
        children: "Loading profile..."
    }, void 0, false, {
        fileName: "[project]/src/components/UserProfile.tsx",
        lineNumber: 53,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "bg-[#18181b] border border-gray-800 rounded-3xl p-8 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-2xl",
                        children: formData.name.charAt(0) || "U"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserProfile.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white",
                                children: "Your Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: "Manage your personal details and financial goals."
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserProfile.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserProfile.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold uppercase text-gray-500",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        value: formData.name,
                                        onChange: handleChange,
                                        className: "w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold uppercase text-gray-500",
                                        children: "Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleChange,
                                        className: "w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserProfile.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold uppercase text-gray-500",
                                        children: "Retirement Goal ($)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 97,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "retirement_goal",
                                        value: formData.retirement_goal,
                                        onChange: handleChange,
                                        className: "w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors font-mono"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold uppercase text-gray-500",
                                        children: "Daily Delivery Goal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "daily_delivery_goal",
                                        value: formData.daily_delivery_goal,
                                        onChange: handleChange,
                                        className: "w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 108,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold uppercase text-gray-500",
                                        children: "Pension Contribution (%)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "contribution_rate",
                                        step: "0.1",
                                        max: "100",
                                        value: formData.contribution_rate || 1.0,
                                        onChange: handleChange,
                                        className: "w-full bg-[#121212] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserProfile.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm font-medium ${message.includes("Error") ? "text-red-500" : "text-emerald-500"}`,
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: saving,
                                className: "bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl flex items-center gap-2 transition-transform active:scale-95 disabled:opacity-50",
                                children: [
                                    saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "animate-spin",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 139,
                                        columnNumber: 35
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserProfile.tsx",
                                        lineNumber: 139,
                                        columnNumber: 84
                                    }, this),
                                    "Save Changes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserProfile.tsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserProfile.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserProfile.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserProfile.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/profile/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserProfile.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ProfilePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#121212] selection:bg-emerald-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/profile/page.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[1400px] mx-auto px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/profile/page.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/profile/page.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profile/page.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_75e3d5af._.js.map