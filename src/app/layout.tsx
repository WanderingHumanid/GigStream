import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { TransactionProvider } from "@/context/TransactionContext";

export const metadata: Metadata = {
    title: "GigStream - Micro-Pension",
    description: "Streaming pension for gig workers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased bg-[#121212] text-white min-h-screen">
                <AuthProvider>
                    <TransactionProvider>
                        {children}
                    </TransactionProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
