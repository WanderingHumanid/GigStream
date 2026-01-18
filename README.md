# GigStream: The Automated Pension Protocol for the Gig Economy

**Team Name:** ALTRAFLUGEL

## Executive Summary

GigStream is a decentralized application designed to bridge the financial security gap for gig economy workers. By leveraging real-time finance protocols and local artificial intelligence, we provide an automated, frictionless mechanism for drivers and couriers to build long-term wealth without changing their daily behavior.

## The Problem

The modern gig economy offers flexibility but lacks the structural safety nets inherent in traditional employment. Unlike corporate employees who benefit from automatic 401(k) contributions and pension matching, gig workers face a "liquidity trap."

Every dollar earned is paid out immediately to cover short-term expenses, creating a significant psychological barrier to saving. The decision to transfer funds into a savings account is often deprioritized against immediate financial pressures. Consequently, millions of workers generate high aggregate cash flow but accumulate zero long-term assets, leaving them financially vulnerable.

## The Solution

GigStream re-engineers the mechanism of saving by aligning it with the continuous nature of gig work.

**1. Frictionless Accumulation**
Instead of manual monthly transfers, GigStream utilizes the Superfluid protocol to "stream" a micro-percentage (e.g., 1%) of earnings into a secure DeFi pool second by second. This automation removes the need for active decision-making.

**2. Real-Time Wealth Visualization**
We replace the delayed gratification of traditional banking with immediate visual feedback. Users can watch their pension balance grow in real time, transforming the passive act of saving into an engaging metric of daily success.

**3. Intelligent Financial Coaching**
Recognizing that financial literacy is a barrier, we integrate a local Large Language Model (LLM) that analyzes earning patterns and provides personalized, context-aware financial advice without compromising user data privacy.

## Technical Architecture

GigStream is built on a hybrid Web3/AI stack designed for speed, security, and low-cost execution.

### Blockchain Layer (The Financial Rail)
*   **Protocol:** Superfluid (Constant Flow Agreements)
*   **Network:** Optimism Sepolia (Layer 2 for sub-cent transaction fees)
*   **Asset:** ETHx (Native Super Ether)
*   **Wallet Connection:** Wagmi + RainbowKit

### Artificial Intelligence Layer (The Coach)
*   **Engine:** Ollama (Local Interference)
*   **Model:** Qwen 2.5 (3B Parameters)
*   **Backend:** FastAPI (Python)
*   **Function:** Generates personalized "wealth insights" based on delivery history and earnings data.

### Frontend Layer
*   **Framework:** Next.js 14
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS

## Getting Started

To run the application locally, follow these steps.

### Prerequisites
*   Node.js (v18+)
*   Python (v3.10+)
*   Ollama installed and running

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/ALTRAFLUGEL/GigStream.git
    cd GigStream
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    pip install -r requirements.txt
    ```

3.  **Run the Development Stack**
    Start the frontend and backend services.
    ```bash
    npm run dev
    # In a separate terminal
    python backend/main.py
    ```

4.  **Access the Application**
    Navigate to `http://localhost:3000` in your browser.

## Security and Privacy

*   **Non-Custodial:** User funds remain in their own wallets until streamed to the smart contract.
*   **Local AI:** Financial data is processed locally via Ollama and is not sent to external cloud logs.

---
*Built for the Hackathon 2026.*
