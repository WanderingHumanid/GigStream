"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function KYCPage() {
    const { verifyIdentity } = useAuth();
    const [isUploading, setIsUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

    const handleUpload = () => {
        setIsUploading(true);
        // Simulate upload delay
        setTimeout(() => {
            setIsUploading(false);
            setUploadComplete(true);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-6 text-center">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-[#18181b] border border-gray-800 rounded-3xl p-8 shadow-2xl space-y-8"
            >
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-2">
                        <ShieldCheck size={32} />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-white">Identity Verification</h1>
                    <p className="text-gray-400 text-sm">
                        To activate your pension stream, verify your identity as a registered gig worker.
                    </p>
                </div>

                <div
                    onClick={!uploadComplete ? handleUpload : undefined}
                    className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer group
                ${uploadComplete
                            ? 'border-emerald-500 bg-emerald-500/5'
                            : 'border-gray-700 hover:border-gray-500 hover:bg-white/5'
                        }
            `}
                >
                    {isUploading ? (
                        <div className="flex flex-col items-center gap-2 text-emerald-500">
                            <Loader2 size={32} className="animate-spin" />
                            <span className="text-xs font-bold uppercase tracking-widest">Scanning ID...</span>
                        </div>
                    ) : uploadComplete ? (
                        <div className="flex flex-col items-center gap-2 text-emerald-500">
                            <CheckCircle2 size={40} />
                            <span className="font-bold">ID Uploaded Successfully</span>
                        </div>
                    ) : (
                        <>
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-gray-700 transition-colors">
                                <Upload size={20} />
                            </div>
                            <div className="space-y-1">
                                <p className="text-white font-medium text-sm">Upload Driver License / ID</p>
                                <p className="text-gray-500 text-xs">Tap to browse or drag & drop</p>
                            </div>
                        </>
                    )}
                </div>

                <button
                    disabled={!uploadComplete}
                    onClick={verifyIdentity}
                    className={`w-full font-bold h-12 rounded-xl flex items-center justify-center transition-all
                ${uploadComplete
                            ? 'bg-emerald-500 text-black hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }
            `}
                >
                    {uploadComplete ? "Complete Verification" : "Verify Identity"}
                </button>
            </motion.div>

        </div>
    );
}
