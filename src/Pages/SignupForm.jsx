import { useState } from "react";
import { loginUser } from "../service/authService"; // import service
import LoginHeader from "../components/login/LoginHeader";
import LoginForm from "../components/login/LoginForm";
import LoginDivider from "../components/login/LoginDivider";
import GoogleLoginButton from "../components/login/GoogleLoginButton";
import LoginButton from "../components/login/LoginButton";
import LoginFooter from "../components/login/LoginFooter";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      console.log("Login successful:", res);
      alert("Welcome back!");
      // redirect to dashboard if needed
      // navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed: " + error);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="w-[584px] rounded-[20px] shadow-2xl border backdrop-blur-sm bg-[var(--bg-secondary)] border-[var(--border-primary)]">
        <LoginHeader />
        <div className="px-6 sm:px-8 lg:px-10 pb-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <LoginForm formData={formData} handleChange={handleChange} />
            <LoginDivider />
            <GoogleLoginButton />
            <LoginButton />
          </form>
        </div>
        <LoginFooter />
      </div>
    </div>
  );
}
