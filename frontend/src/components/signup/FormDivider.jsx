export default function FormDivider() {
  return (
    <div className="flex items-center my-2">
      <div className="flex-grow border-t border-[var(--border-primary)] m-1"></div>
      <span className="mx-2 text-sm font-medium px-3 py-1 rounded-full text-[var(--text-secondary)] bg-[var(--bg-secondary)]">or sign up with</span>
      <div className="flex-grow border-t border-[var(--border-primary)] m-1"></div>
    </div>
  );
}
