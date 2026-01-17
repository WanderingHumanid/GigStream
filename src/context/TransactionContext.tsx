"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Transaction = {
    id: string;
    type: 'earning' | 'pension_stream';
    amount: number;
    timestamp: Date;
    description: string;
};

type TransactionContextType = {
    transactions: Transaction[];
    addTransaction: (tx: Omit<Transaction, 'id' | 'timestamp'>) => void;
};

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export function TransactionProvider({ children }: { children: ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([
        { id: '1', type: 'earning', amount: 45.50, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), description: 'Uber Eats Batch' },
        { id: '2', type: 'pension_stream', amount: 4.55, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), description: 'Auto-Stream (10%)' },
        { id: '3', type: 'earning', amount: 32.00, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), description: 'DoorDash Standard' },
        { id: '4', type: 'pension_stream', amount: 3.20, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), description: 'Auto-Stream (10%)' },
    ]);

    const addTransaction = (tx: Omit<Transaction, 'id' | 'timestamp'>) => {
        const newTx: Transaction = {
            ...tx,
            id: Math.random().toString(36).substr(2, 9),
            timestamp: new Date()
        };
        setTransactions(prev => [newTx, ...prev]);
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionContext);
    if (context === undefined) {
        throw new Error('useTransactions must be used within a TransactionProvider');
    }
    return context;
}
