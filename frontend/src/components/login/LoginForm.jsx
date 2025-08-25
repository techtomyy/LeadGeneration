export default function LoginForm({ email, setEmail, password, setPassword }) {
  return (
    <div className="space-y-6 flex flex-col items-center justify-center">
      {/* Email Field */}
      <div className="space-y-2 flex flex-col items-center w-full">
        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] w-full text-left">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 p-5 rounded-[5px] border border-[var(--border-primary)] bg-transparent text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-accent)] mb-[10px]"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Password Field */}
      <div className="space-y-2 flex flex-col items-center w-full">
        <label htmlFor="password" className="block text-sm font-medium text-[var(--text-primary)] w-full text-left">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-10 p-5 rounded-[5px] border border-[var(--border-primary)] bg-transparent text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-accent)]"
          placeholder="Enter your password"
          required
        />
        
        {/* Forgot Password Link */}
        <div className="text-right w-[80%]">
          <a href="#" className="text-sm text-[var(--text-accent)] hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
