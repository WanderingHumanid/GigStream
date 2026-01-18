"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { optimismSepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

import { http } from 'wagmi';
import { cookieStorage, createStorage } from 'wagmi';

// Fix for Node.js environments where localStorage might exist but without getItem (e.g. newer Node versions or strange polyfills)
if (typeof window === 'undefined' && typeof global.localStorage !== 'undefined' && typeof global.localStorage.getItem !== 'function') {
    console.warn("Detected broken global.localStorage in Node environement, patching it.");
    const noopStorage = {
        getItem: (_key: string) => null,
        setItem: (_key: string, _value: string) => { },
        removeItem: (_key: string) => { },
        clear: () => { },
        key: (_index: number) => null,
        length: 0,
    };
    // @ts-ignore
    global.localStorage = noopStorage;
}

const config = getDefaultConfig({
    appName: "GigStream",
    // Hardcoded for debugging
    projectId: "473a32078e8c3b46870b7958ac902a7b",
    chains: [optimismSepolia],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [optimismSepolia.id]: http(),
    },
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    theme={darkTheme({
                        accentColor: '#10b981', // emerald-500
                        accentColorForeground: 'white',
                        borderRadius: 'large',
                    })}
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
