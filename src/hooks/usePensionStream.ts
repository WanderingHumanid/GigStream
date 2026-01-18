"use client";

import { useState, useEffect } from "react";
import { getLiveBalanceAction } from "@/app/actions";

export function usePensionStream(dailyDeliveries: number = 12, initialBalance: number = 0) {
    const [currentBalance, setCurrentBalance] = useState(initialBalance);
    const [isStreaming, setIsStreaming] = useState(true);

    // Real-time Blockchain Polling
    useEffect(() => {
        let interval: NodeJS.Timeout;

        const fetchBalance = async () => {
            const res = await getLiveBalanceAction();
            if (res.success && res.balance !== undefined) {
                setCurrentBalance(res.balance);
            }
        };

        if (isStreaming) {
            // Fetch immediately
            fetchBalance();
            // Then poll every 1 second
            interval = setInterval(fetchBalance, 1000);
        }

        return () => clearInterval(interval);
    }, [isStreaming]);

    const startGlobalStream = () => {
        setIsStreaming(true);
    };

    const stopGlobalStream = () => {
        setIsStreaming(false);
    };

    return {
        currentBalance,
        isStreaming,
        startGlobalStream,
        stopGlobalStream
    };
}
