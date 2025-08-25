import { FcGoogle } from "react-icons/fc";

export default function GoogleSignupButton() {
  return (
    <div className="flex justify-center my-[15px]">
      <button
        type="button"
        className="w-full h-10 rounded-[8px] flex items-center justify-center space-x-3 py-3 rounded-2xl transition-all duration-200 font-medium text-base group border-[var(--border-primary)] border text-[var(--text-primary)] bg-transparent hover:-translate-y-1 hover:shadow-lg"
      >
        <FcGoogle size={20} className="group-hover:scale-110 transition-transform duration-200" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}
