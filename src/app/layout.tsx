import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "sonner";
import { TransactionProvider } from "@/context/TransactionContext";
import ChatWidget from "@/components/ChatWidget";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GigStream - Web3 Pension",
    description: "Turn your gig earnings into a streamed pension.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <AuthProvider>
                    <TransactionProvider>
                        {children}
                        <ChatWidget />
                    </TransactionProvider>
                </AuthProvider>
                <Toaster position="top-center" theme="dark" />
            </body>
        </html>
    );
}
