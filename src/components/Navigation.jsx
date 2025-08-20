import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const isSignup = location.pathname === '/signup';
  const isLogin = location.pathname === '/login';

  return (
    <div className="absolute top-4 right-4 z-10">
      <div className="flex items-center space-x-2 bg-[var(--bg-secondary)]/80 backdrop-blur-sm rounded-full px-4 py-2 border border-[var(--border-primary)]/20">
        <Link
          to="/signup"
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            isSignup
              ? 'bg-[var(--btn-primary)] text-[var(--bg-accent)]'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            isLogin
              ? 'bg-[var(--btn-primary)] text-[var(--bg-accent)]'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
