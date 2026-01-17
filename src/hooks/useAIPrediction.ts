import { useState, useEffect } from 'react';
import { generatePrediction, AIPredictionResponse } from '@/services/aiPredictor';

export function useAIPrediction(dailyDeliveries: number, currentBalance: number) {
    const [prediction, setPrediction] = useState<AIPredictionResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPrediction = async () => {
            setLoading(true);
            setError(null);
            try {
                // Debounce slightly to avoid rapid calls
                await new Promise(resolve => setTimeout(resolve, 800));
                const result = await generatePrediction(dailyDeliveries, currentBalance);
                setPrediction(result);
            } catch (err) {
                setError("Failed to generate prediction");
            } finally {
                setLoading(false);
            }
        };

        fetchPrediction();
    }, [dailyDeliveries, currentBalance]);

    return { prediction, loading, error };
}
