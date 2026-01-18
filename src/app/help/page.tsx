import Navbar from "@/components/Navbar";
import { ArrowRight, Wallet, TrendingUp, Shield } from "lucide-react";

export default function HelpPage() {
    return (
        <main className="min-h-screen bg-[#09090b] selection:bg-emerald-500/30 relative overflow-hidden">
            <Navbar />

            <div className="absolute top-0 left-0 w-full h-[600px] bg-emerald-900/20 blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-[1200px] mx-auto px-6 py-20 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
                        Why <span className="text-emerald-500">GigStream?</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        The first pension system designed for the gig economy.
                        No paperwork. No minimums. Just instant streams.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <FeatureCard
                        icon={<Wallet size={32} />}
                        title="Micro-Stream"
                        desc="We take a tiny % (like 1%) of every gig you log and stream it instantly into savings. You won't even miss it."
                    />
                    <FeatureCard
                        icon={<TrendingUp size={32} />}
                        title="DeFi Yields"
                        desc="Traditional banks give 0.5% APY. We stream your money into Superfluid DeFi pools earning 8-12% APY in real-time."
                    />
                    <FeatureCard
                        icon={<Shield size={32} />}
                        title="Self-Custody"
                        desc="You own your keys. You own your money. Withdraw any time instantly. No lock-up periods."
                    />
                </div>

                {/* How it Works Step */}
                <div className="bg-[#18181b] border border-gray-800 rounded-3xl p-10 md:p-16 mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">How it Works</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                        <Step number="1" text="Log your delivery earnings on the dashboard." />
                        <ArrowRight className="hidden md:block text-gray-600" />
                        <Step number="2" text="Smart Contract streams 1% to your yield pool." />
                        <ArrowRight className="hidden md:block text-gray-600" />
                        <Step number="3" text="Watch your pension grow with real-time compound interest." />
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FAQCard q="Is my money safe?" a="Yes! You own your private keys. We use Superfluid's audited smart contracts on the Optimism network." />
                        <FAQCard q="Can I withdraw anytime?" a="Absolutely. There are no lock-up periods. Unstream your money back to your wallet instantly." />
                        <FAQCard q="How much does it cost?" a="GigStream is free for beta users. We only take a 0.5% fee on the yield generated, not your principal." />
                        <FAQCard q="Which apps do you support?" a="We support manual entry for all gig apps: Uber, Lyft, DoorDash, Instacart, Amazon Flex, and more." />
                    </div>
                </div>

            </div>
        </main>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-[#121212] border border-gray-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
            <div className="bg-emerald-500/10 w-fit p-4 rounded-2xl text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function FAQCard({ q, a }: { q: string, a: string }) {
    return (
        <div className="bg-[#121212] border border-gray-800 p-6 rounded-2xl hover:bg-[#18181b] transition-colors">
            <h4 className="text-emerald-500 font-bold mb-2">{q}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
    );
}

function Step({ number, text }: { number: string, text: string }) {
    return (
        <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-12 h-12 bg-white text-black font-black text-xl rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                {number}
            </div>
            <p className="text-gray-300 font-medium">{text}</p>
        </div>
    );
}
