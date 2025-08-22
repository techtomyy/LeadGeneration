export default function SubmitButton() {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-full h-10 py-3 rounded-[8px] border-none font-semibold transition-all duration-200 text-base group relative overflow-hidden text-[var(--bg-accent)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(168,85,247,0.3)]"
        style={{ background: 'var(--btn-gradient)' }}
      >
        <span className="relative z-10">Sign Up</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
}
