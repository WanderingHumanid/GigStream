import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Web3Provider } from "@/context/Web3Provider";
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
                    <Web3Provider>
                        <TransactionProvider>
                            {children}
                            <ChatWidget />
                        </TransactionProvider>
                    </Web3Provider>
                </AuthProvider>
                <Toaster position="top-center" theme="dark" />
            </body>
        </html>
    );
}
