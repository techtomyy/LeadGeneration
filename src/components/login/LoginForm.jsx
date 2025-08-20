export default function LoginForm({ formData, handleChange }) {
  return (
    <div className="space-y-8">
      {/* Email Field */}
      <div className="flex flex-col items-center space-y-3">
        <label className="block text-sm font-semibold text-[var(--text-primary)] w-[83%] text-left mb-[10px]">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="e.g. johnsmith@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-[80%] h-[20px] p-[8px] rounded-[5px]  mb-[10px] focus:outline-none transition-all duration-200 text-base bg-transparent text-[var(--text-primary)] border-[var(--border-input)] border focus:border-[var(--border-accent)] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] focus:-translate-y-1"
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col items-center space-y-3">
        <label className="block text-sm font-semibold text-[var(--text-primary)] w-[83%] text-left mb-[10px]">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="••••••••••"
          value={formData.password}
          onChange={handleChange}
          className="w-[80%] h-[20px] p-[8px] rounded-[5px] focus:outline-none transition-all duration-200 text-base bg-transparent text-[var(--text-primary)] border-[var(--border-input)] border focus:border-[var(--border-accent)] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] focus:-translate-y-1"
        />
        {/* Forgot Password Link */}
        <div className="w-[80%] text-right">
          <a href="#" className="text-sm text-[var(--text-accent)] hover:underline transition-all duration-200">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
