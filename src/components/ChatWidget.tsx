"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Minimize2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi! I'm the GigStream AI. Ask me about your pension, yield, or anything blockchain! 🚀" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMsg = input;
        setInput("");
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setLoading(true);

        try {
            const res = await fetch("http://localhost:8000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg }),
            });

            if (res.ok) {
                const data = await res.json();
                setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't reach the server. Is `python backend/main.py` running?" }]);
            }
        } catch (err) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Connection error. Ensure the backend is running." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-[#18181b]/90 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gradient-to-r from-emerald-900/20 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">GigStream AI</h3>
                                    <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                            >
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "flex w-full",
                                        msg.role === 'user' ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                                            msg.role === 'user'
                                                ? "bg-emerald-500 text-black font-medium rounded-tr-none"
                                                : "bg-gray-800 text-gray-200 rounded-tl-none"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start w-full">
                                    <div className="bg-gray-800 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                                        <Loader2 size={14} className="animate-spin text-emerald-500" />
                                        <span className="text-xs text-gray-400">Thinking...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about crypto or your earnings..."
                                    className="w-full bg-black/40 border border-gray-700 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || loading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-emerald-500 transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center transition-all duration-300",
                    isOpen
                        ? "bg-gray-800 text-white rotate-90"
                        : "bg-emerald-500 text-black hover:bg-emerald-400"
                )}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" />}
            </motion.button>
        </div>
    );
}
