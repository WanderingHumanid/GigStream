"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoTooltip({ text }: { text: string }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative inline-block ml-2 pointer-events-auto z-50">
            <button
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsVisible(!isVisible); }}
                className="text-gray-600 hover:text-emerald-500 transition-colors"
                type="button"
            >
                <HelpCircle size={16} />
            </button>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-3 bg-gray-900 border border-gray-700 text-xs text-gray-300 rounded-xl shadow-xl z-50 leading-relaxed text-center pointer-events-none"
                    >
                        {text}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-gray-900 border-r border-b border-gray-700 rotate-45 transform -translate-y-1"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
