from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase import create_client, Client
import uvicorn
import os
import dotenv

dotenv.load_dotenv()

url = os.getenv("SUPRABASE_URL")
key = os.getenv("SUPRABASE_KEY")
supabase: Client = create_client(url, key)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Development: open CORS to all origins; tighten for prod
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/healthcheck")
def healthcheck():
    return {"status": "healthy"}
class RegisterRequest(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str


@app.post("/register")
def register_user(data: RegisterRequest):
    try:
        # 1. Create user in Supabase Auth
        auth_res = supabase.auth.sign_up({
            "email": data.email,
            "password": data.password,
            "options": {
                "data": {
                    "first_name": data.first_name,
                    "last_name": data.last_name
                }
            }
        })

        # ✅ New check style
        if not auth_res.user:
            raise HTTPException(status_code=400, detail="Failed to create user")

        return {
            "message": "User registered successfully",
            "user_id": auth_res.user.id
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    
class LoginRequest(BaseModel):
    email: str
    password: str


@app.post("/login")
def login_user(data: LoginRequest):
    try:
        auth_res = supabase.auth.sign_in_with_password(
            {"email": data.email, "password": data.password}
        )

        if not auth_res.user:
            raise HTTPException(status_code=401, detail="Invalid credentials")

        return {
            "message": "Login successful",
            "user_id": auth_res.user.id,
            "access_token": auth_res.session.access_token,
            "refresh_token": auth_res.session.refresh_token,
        }
    except Exception as e:
        # Handle specific Supabase auth errors
        msg = str(e)
        if "Email not confirmed" in msg:
            raise HTTPException(status_code=400, detail="Please check your email and click the confirmation link before logging in")
        elif "Invalid login credentials" in msg:
            raise HTTPException(status_code=401, detail="Invalid email or password")
        else:
            # Log the actual error for debugging
            print(f"Login error: {msg}")
            raise HTTPException(status_code=500, detail="Login failed. Please try again.")


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
