export interface AIPredictionResponse {
    estimated_total: string;
    purchasing_power_adjustment: string;
    insight_summary: string;
    power_move: string;
}

export const generatePrediction = async (dailyDeliveries: number, currentBalance: number): Promise<AIPredictionResponse> => {
    const prompt = `
    You are a Financial Actuary and Retirement Coach for gig workers.
    
    Worker Profile:
    - Daily Deliveries: ${dailyDeliveries}
    - Current Balance: $${currentBalance}
    - Assumption: 1% of earnings are streamed to a DeFi yield vault (8% APY).
    - Timeframe: 20 Years.

    Task:
    1. Calculate the estimated total after 20 years.
    2. Adjust for purchasing power (assuming 2.5% inflation).
    3. Provide a brief financial insight summary.
    4. Provide ONE "Power Move" (a specific, small action to improve the outcome, e.g., "Increase stream to 1.5%").

    Return ONLY a JSON object with the following keys and no markdown formatting:
    {
        "estimated_total": "$X,XXX",
        "purchasing_power_adjustment": "$X,XXX (adjusted)",
        "insight_summary": "Brief insight...",
        "power_move": "Specific advice..."
    }
    `;

    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "qwen2.5:3b",
                prompt: prompt,
                stream: false,
                format: "json"
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to connect to AI service");
        }

        const data = await response.json();
        return JSON.parse(data.response);
    } catch (error) {
        console.error("AI Service Error:", error);
        // Fallback mock data if AI is offline
        return {
            estimated_total: "$Calculating...",
            purchasing_power_adjustment: "Check local AI connection",
            insight_summary: "Unable to connect to Actuary Agent.",
            power_move: "Ensure Ollama is running with qwen2.5:3b"
        };
    }
};
