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

    except requests.exceptions.ConnectionError:
        return {"message": "AI Coach is sleeping (Ollama not running). But you're still crushing it! 💪"}
    except Exception as e:
        print(f"Error: {e}")
        return {"message": f"AI Error: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
