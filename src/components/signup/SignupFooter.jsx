import { Link } from 'react-router-dom';

export default function SignupFooter() {
  return (
    <div className="text-center pb-6 sm:pb-8 mt-2">
      <p className="text-sm sm:text-base text-[var(--text-secondary)]">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold hover:underline transition-all duration-200 text-[var(--text-accent)]">
          Sign in
        </Link>
      </p>
    </div>
  );
}
