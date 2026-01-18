"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { login, signup } from "@/app/actions";
import { useAuth } from "@/context/AuthContext";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { login: contextLogin } = useAuth(); // To update context state

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);

        let res;
        if (isLogin) {
            res = await login(null, formData);
        } else {
            res = await signup(null, formData);
        }

        if (res?.success) {
            // If signup, maybe auto-login or ask to login. For MVP, assuming signup logs in or returns success.
            // But signup action sets cookies too.
            // We need to fetch the user or just construct it if we know it.
            // Our actions return user on login, but let's just refresh or push to dashboard via context.
            // Ideally context should reload user. 
            // For now, let's hard reload or use the returned user if available.

            // @ts-ignore
            if (res.user) {
                // @ts-ignore
                contextLogin(res.user);
            } else {
                // If signup didn't return user object but set cookie, we can redirect.
                // Or just force a window reload to let Context pick up the cookie.
                window.location.href = "/dashboard";
            }
        } else {
            // @ts-ignore
            setError(res?.message || "Authentication failed");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md z-10"
            >
                {/* Logo / Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] mx-auto">
                            <span className="font-black text-black text-2xl">GS</span>
                        </div>
                    </div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">
                        Gig<span className="text-emerald-500">Stream</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Turn every delivery into financial freedom.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-[#18181b] border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                    <div className="flex gap-4 mb-8 bg-black/20 p-1.5 rounded-xl">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${isLogin ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${!isLogin ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'text-gray-500 hover:text-white'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {!isLogin && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Alex Driver"
                                            required={!isLogin}
                                            className="w-full bg-[#09090b] border border-gray-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-white outline-none transition-colors"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                className="w-full bg-[#09090b] border border-gray-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-white outline-none transition-colors"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                className="w-full bg-[#09090b] border border-gray-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-white outline-none transition-colors"
                            />
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm font-medium text-center pt-2">{error}</p>
                        )}

                        <button
                            disabled={isLoading}
                            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 mt-6 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 ${isLogin ? 'bg-white text-black hover:bg-gray-200' : 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'}`}
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                <>
                                    {isLogin ? "Welcome Back" : "Get Started"} <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center text-gray-600 text-xs mt-8">
                    By continuing, you agree to our Terms of Service. <br />
                    We verify gig worker identities for security.
                </p>

            </motion.div>
        </div>
    );
}
