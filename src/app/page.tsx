"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const { login } = useAuth();

    return (
        <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4 mb-12 relative z-10"
            >
                <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-4 border border-white/5 shadow-2xl">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        <span className="font-bold text-black text-xl">GS</span>
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                    Gig<span className="text-emerald-500">Stream</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md mx-auto">
                    Turn your daily deliveries into a lifelong pension. Stream a micro-percentage of every gig directly to your future self.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-md space-y-4 relative z-10"
            >
                <button
                    onClick={() => login('google')}
                    className="w-full bg-white text-black font-bold h-14 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="Google" />
                    Continue with Google
                </button>

                <div className="relative flex items-center justify-center py-2">
                    <div className="h-px bg-gray-800 w-full absolute"></div>
                    <span className="bg-[#121212] px-3 relative text-xs text-gray-500 font-bold uppercase">Or</span>
                </div>

                <button
                    onClick={() => login('phone')}
                    className="w-full bg-[#18181b] border border-gray-700 text-white font-bold h-14 rounded-2xl flex items-center justify-center gap-3 hover:border-emerald-500/50 hover:bg-[#202025] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    Login with Phone Number
                </button>
            </motion.div>

            <p className="mt-12 text-xs text-center text-gray-600 max-w-sm">
                By continuing, you agree to our Terms of Service. We verify all gig worker identities to ensure platform security.
            </p>

        </div>
    );
}
