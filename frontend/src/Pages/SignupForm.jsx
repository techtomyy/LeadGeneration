import { useState } from "react";
import { registerUser } from "../service/authService"; // import the service
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      console.log("User registered:", res);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed: " + error);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="w-[584px] rounded-[20px] shadow-2xl border backdrop-blur-sm bg-[var(--bg-secondary)] border-[var(--border-primary)]">
        <SignupHeader />
        <div className="px-6 sm:px-8 lg:px-10 pb-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <NameFields formData={formData} handleChange={handleChange} />
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              placeholder="e.g. johnsmith@example.com"
              value={formData.email}
              onChange={handleChange}
              width="w-full"
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••••"
              value={formData.password}
              onChange={handleChange}
              width="w-full"
            />
            <FormDivider />
            <GoogleSignupButton />
            <SubmitButton />
          </form>
          <SignupFooter />
        </div>
      </div>
    </div>
  );
}
