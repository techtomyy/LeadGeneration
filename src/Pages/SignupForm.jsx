// src/Signup.jsx
import { useState } from "react";
import SignupHeader from "../components/signup/SignupHeader";
import NameFields from "../components/signup/NameFields";
import FormInput from "../components/signup/FormInput";
import FormDivider from "../components/signup/FormDivider";
import GoogleSignupButton from "../components/signup/GoogleSignupButton";
import SubmitButton from "../components/signup/SubmitButton";
import SignupFooter from "../components/signup/SignupFooter";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[var(--bg-primary)] font-['Inter',sans-serif]">
      <div 
        className="w-[584px] h-auto max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-48px)] lg:max-w-[calc(100vw-64px)] xl:max-w-2xl rounded-[20px] shadow-2xl border backdrop-blur-sm bg-[var(--bg-secondary)] border-[var(--border-primary)] border mx-4 sm:mx-6 lg:mx-8"
      >
        {/* Header */}
        <SignupHeader />

        {/* Form */}
        <div className="px-6 sm:px-8 lg:px-10 pb-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Fields Row */}
            <NameFields formData={formData} handleChange={handleChange} />

            {/* Email Field */}
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              placeholder="e.g. johnsmith@example.com"
              value={formData.email}
              onChange={handleChange}
              width="w-full"
            />

            {/* Password Field */}
            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••••"
              value={formData.password}
              onChange={handleChange}
              width="w-full"
            />

            {/* Divider */}
            <FormDivider />

            {/* Google Sign Up */}
            <GoogleSignupButton />

            {/* Submit Button */}
            <SubmitButton />
          </form>

        {/* Footer */}
        <SignupFooter />
      </div>
    </div>
    </div>
  );
}
