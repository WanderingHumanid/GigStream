"use client";

import { useEffect, useState } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { useEthersProvider, useEthersSigner } from "@/lib/ethersAdapters"; // Need adapters for Wagmi -> Ethers
import { parseEther } from "viem";
import { toast } from "sonner";
import { useAccount } from "wagmi";

// Optimism Sepolia Addresses
const fUSDCx_ADDRESS = "0xd04383398dd2426297da660f9cca3d439af9ce1b"; // Correct fUSDCx on Op Sepolia
const RECIPIENT_ADDRESS = "0x4388C838638F9d17d91d0A1b7C395029352e6D78"; // Treasury/Pool Mock

export function useSuperfluid() {
    const { address, isConnected } = useAccount();
    const provider = useEthersProvider();
    const signer = useEthersSigner();

    const [sf, setSf] = useState<Framework | null>(null);

    useEffect(() => {
        if (provider) {
            Framework.create({
                chainId: 11155420, // Optimism Sepolia
                provider: provider,
            }).then((framework) => {
                setSf(framework);
                console.log("Superfluid Framework Initialized");
            }).catch((err) => {
                console.error("Failed to initialize Superfluid Framework:", err);
            });
        }
    }, [provider]);

    // Use "ETHx" which commonly resolves to the Native Asset Super Token
    const TOKEN_SYMBOL = "ETHx";

    async function wrapETH(amount: string) {
        if (!sf || !signer || !address) return;

        try {
            const ethx = await sf.loadSuperToken(TOKEN_SYMBOL);

            console.log("Wrapping ETH to ETHx...", ethx.address);

            // Standard upgrade flow
            const upgradeOperation = ethx.upgrade({
                amount: parseEther(amount).toString()
            });

            const tx = await upgradeOperation.exec(signer);

            toast.promise(tx.wait(), {
                loading: "Wrapping ETH...",
                success: "Wrapped to ETHx! 🍬",
                error: "Wrap failed."
            });

            await tx.wait();
        } catch (error: any) {
            console.error(error);
            toast.error("Wrap Error: " + error.message);
        }
    }

    async function createFlow(flowRate: string) {
        if (!sf || !signer || !address) {
            toast.error("Wallet not connected or SDK not ready.");
            return;
        }

        const superSigner = sf.createSigner({ signer: signer });

        try {
            // Log for debugging
            console.log("Creating Flow with params:");
            console.log("Sender:", address);
            console.log("Receiver:", RECIPIENT_ADDRESS);

            // Load token by explicit address to avoid resolution errors
            const daix = await sf.loadSuperToken(TOKEN_SYMBOL);

            console.log("Creating Stream with token:", daix.address);

            // Check formatted flow rate
            const createFlowOperation = daix.createFlow({
                sender: address,
                receiver: RECIPIENT_ADDRESS,
                flowRate: flowRate,
            });

            console.log("Creating Stream...");
            const tx = await createFlowOperation.exec(superSigner);

            toast.promise(tx.wait(), {
                loading: "Starting Stream Transaction...",
                success: "Stream Started Successfully! 🌊",
                error: "Failed to start stream."
            });

            await tx.wait();
        } catch (error: any) {
            console.error(error);
            toast.error(`Error: ${error.message || "Unknown error"}`);
        }
    }

    async function deleteFlow() {
        if (!sf || !signer || !address) return;

        const superSigner = sf.createSigner({ signer: signer });

        try {
            const daix = await sf.loadSuperToken(TOKEN_SYMBOL);

            const deleteFlowOperation = daix.deleteFlow({
                sender: address,
                receiver: RECIPIENT_ADDRESS,
            });

            console.log("Deleting Stream...");
            const tx = await deleteFlowOperation.exec(superSigner);

            toast.promise(tx.wait(), {
                loading: "Stopping Stream...",
                success: "Stream Stopped.",
                error: "Failed to stop stream."
            });

            await tx.wait();
        } catch (error: any) {
            toast.error(`Error: ${error.message}`);
        }
    }

    return { createFlow, deleteFlow, wrapETH, sf };
}
