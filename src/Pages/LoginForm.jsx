import { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[var(--bg-primary)] font-['Inter',sans-serif]">
      <div 
        className="w-[584px] h-auto max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-48px)] lg:max-w-[calc(100vw-64px)] xl:max-w-2xl rounded-[20px] shadow-2xl border backdrop-blur-sm bg-[var(--bg-secondary)] border-[var(--border-primary)] border mx-4 sm:mx-6 lg:mx-8"
      >
        {/* Header */}
        <LoginHeader />

        {/* Form */}
        <div className="px-6 sm:px-8 lg:px-10 pb-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Login Form Fields */}
            <LoginForm formData={formData} handleChange={handleChange} />

            {/* Divider */}
            <LoginDivider />

            {/* Google Login */}
            <GoogleLoginButton />

            {/* Sign In Button */}
            <LoginButton />
          </form>
        </div>

        {/* Footer */}
        <LoginFooter />
      </div>
    </div>
  );
}
