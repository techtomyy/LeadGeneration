import axios from "axios";

const API_URL = "http://localhost:8000";

// Register user
export async function registerUser(userData) {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data;
  } catch (err) {
    throw err.response?.data?.detail || "Signup failed";
  }
}

export async function loginUser(credentials) {
  try {
    const res = await axios.post(`${API_URL}/login`, credentials);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    return res.data;
  } catch (err) {
    throw err.response?.data?.detail || "Login failed";
  }
}
export function logoutUser() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}
