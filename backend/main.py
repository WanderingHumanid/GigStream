from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import requests
import json

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DeliveryHistory(BaseModel):
    total_earnings: float
    recent_count: int

@app.post("/analyze-wealth")
async def analyze_wealth(data: DeliveryHistory):
    # Prompt Engineering
    prompt = f"""
    You are a financial hype-man. 
    The user just earned ${data.total_earnings} from {data.recent_count} deliveries this week. 
    Tell them in one sentence how much closer they are to retiring. 
    Be high energy, use emojis, and mention "financial freedom".
    Example: "Boom! That's $150 closer to sipping coconuts on Mars! 🚀"
    """

    try:
        # Call Ollama locally (Standard port 11434)
        # Model: qwen2.5:3b (User specified)
        payload = {
            "model": "qwen2.5:3b",
            "prompt": prompt,
            "stream": False
        }
        
        response = requests.post("http://localhost:11434/api/generate", json=payload)
        response.raise_for_status()
        
        result = response.json()
        ai_message = result.get("response", "Keep grinding! You're doing great! 🚀")
        
        return {"message": ai_message}

    except Exception as e:
        print(f"Error: {e}")
        return {"message": f"AI Error: {str(e)}"}

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    system_prompt = """
    You are the GigStream AI Assistant. 
    
    Here is the context of the application you are embedded in:
    Name: GigStream
    Purpose: A web3-powered micro-pension platform for gig workers (Uber, DoorDash, etc.).
    How it works:
    1. Users log their daily deliveries on the Dashboard.
    2. A small percentage (e.g., 1%) of earnings is automatically "streamed" using the Superfluid Protocol.
    3. This money goes into a DeFi yield pool (StreamSettle) where it compounds instantly, unlike traditional banks.
    4. The "Yield Battle" page visualizes how much faster StreamSettle is compared to a regular bank (0.5% APY vs 8-12% APY).
    5. The goal is "Financial Freedom" by automating savings from every gig without thinking about it.

    Your constraints:
    - Answer questions about GigStream, Superfluid, Blockchain, and Financial Health.
    - If the user asks "What is this app?", explain GigStream using the context above.
    - If the user asks about irrelevant topics (cooking, politics), politely decline.
    - Keep answers concise (max 3 sentences) and helpful. Use emojis occasionally.
    """
    
    # We want a conversation, but Ollama "generate" is one-shot unless we pass context.
    # For a simple widget, one-shot with system prompt is often enough, or we handle history in frontend.
    # Let's use simple one-shot for now, assuming user asks a question.
    
    full_prompt = f"{system_prompt}\n\nUser: {request.message}\nAssistant:"

    try:
        payload = {
            "model": "qwen2.5:3b",
            "prompt": full_prompt,
            "stream": False
        }
        
        response = requests.post("http://localhost:11434/api/generate", json=payload)
        response.raise_for_status()
        
        result = response.json()
        return {"response": result.get("response", "I'm thinking...")}

    except Exception as e:
        return {"response": "I'm having trouble connecting to my brain (Ollama). Try again later!"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
