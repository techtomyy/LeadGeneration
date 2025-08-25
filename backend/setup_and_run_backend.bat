@echo off
setlocal
REM Navigate to this script's directory (backend)
cd /d "%~dp0"

set PY="C:\Users\abdul\AppData\Local\Programs\Python\Python313\python.exe"

if not exist .venv (
  echo Creating virtual environment...
  %PY% -m venv .venv
)

echo Upgrading pip...
call .venv\Scripts\python.exe -m pip install --upgrade pip

echo Installing dependencies...
call .venv\Scripts\python.exe -m pip install fastapi "uvicorn[standard]" supabase python-dotenv

echo Starting FastAPI server on http://localhost:8000 ...
call .venv\Scripts\python.exe main.py

endlocal

