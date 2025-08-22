from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase import create_client, Client
import uvicorn

url = "https://vyejkqeqwplixedypgmk.supabase.co" 
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5ZWprcWVxd3BsaXhlZHlwZ21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NjY2NzgsImV4cCI6MjA3MTQ0MjY3OH0.yrdGuVsDg-auwu8OAJHHNSKpaIOgEfcb7wSdFqq-9R4"
supabase: Client = create_client(url, key)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
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


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
