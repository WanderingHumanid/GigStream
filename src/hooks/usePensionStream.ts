"use client";

import { useState, useEffect } from "react";

export function usePensionStream(dailyDeliveries: number = 12, initialBalance: number = 0) {
    // Start with server-provided real data
    const [currentBalance, setCurrentBalance] = useState(initialBalance);
    const [isStreaming, setIsStreaming] = useState(true);

    // Simulation effect to keep the "live" feel in the UI
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isStreaming && dailyDeliveries > 0) {
            // Speed = Base * Deliveries Multiplier
            const baseIncrement = 0.00005; // 10x speed boost for demo visibility
            const activitySpeed = dailyDeliveries * 0.5; // Directly proportional to activity
            const tickAmount = baseIncrement * activitySpeed;

            interval = setInterval(() => {
                setCurrentBalance((prev) => prev + tickAmount);
            }, 16);
        }
        return () => clearInterval(interval);
    }, [isStreaming, dailyDeliveries]);

    const startGlobalStream = () => {
        console.log("Transaction Initiated");
        setIsStreaming(true);
    };

    const stopGlobalStream = () => {
        console.log("Transaction Stopped");
        setIsStreaming(false);
    }

    return {
        currentBalance,
        isStreaming,
        startGlobalStream,
        stopGlobalStream
    };
}
