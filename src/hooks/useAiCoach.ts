"use client";

import { useState, useEffect } from "react";

export function useAiCoach(totalEarnings: number, recentCount: number) {
    const [aiMessage, setAiMessage] = useState<string>("Analyzing your power moves...");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Debounce or just run once on mount/change? 
        // For now, let's run it when earnings change significantly or just once on load for the demo.
        // To avoid spamming Ollama, we'll use a manual trigger or run once.

        const fetchAdvice = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8000/analyze-wealth", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        total_earnings: totalEarnings,
                        recent_count: recentCount
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setAiMessage(data.message);
                } else {
                    setAiMessage("AI Coach is offline. Keep stacking sats! ⚡");
                }
            } catch (error) {
                console.error("AI Bridge Error:", error);
                setAiMessage("Local AI Bridge disconnected. Run 'python backend/main.py'");
            } finally {
                setLoading(false);
            }
        };

        if (totalEarnings > 0) {
            fetchAdvice();
        }

    }, [totalEarnings, recentCount]);

    return { aiMessage, loading };
}
