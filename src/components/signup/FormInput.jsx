export default function FormInput({ 
  label, 
  type, 
  name, 
  placeholder, 
  value, 
  onChange, 
  width
}) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <label className={`block text-sm font-semibold text-[var(--text-primary)] ${width} text-left`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-10 p-5 rounded-[5px] focus:outline-none transition-all duration-200 text-base bg-transparent text-[var(--text-primary)] border-[var(--border-input)] border focus:border-[var(--border-accent)] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.1)] focus:-translate-y-1`}
      />
    </div>
  );
}
