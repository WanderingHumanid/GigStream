"use client";

import { useState, useEffect } from "react";

export function usePensionStream(dailyDeliveries: number = 12) {
    // Dummy data as requested
    const [currentBalance, setCurrentBalance] = useState(124.50);
    const [isStreaming, setIsStreaming] = useState(true);

    // Simulation effect to keep the "live" feel in the UI
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isStreaming) {
            // Speed = Base * Deliveries Multiplier
            const baseIncrement = 0.00005; // 10x speed boost for demo visibility
            const activitySpeed = Math.max(1, dailyDeliveries / 3); // Faster response
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
