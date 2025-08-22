export default function LoginButton({ isLoading = false, onClick }) {
  return (
    <div className="flex justify-center ">
      <button
        type="button"
        disabled={isLoading}
        onClick={onClick}
        className="w-full h-10 my-1 rounded-[8px] border-none bg-[var(--btn-gradient)] text-[var(--bg-accent)] font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        style={{ background: 'var(--btn-gradient)' }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-[var(--bg-accent)] border-t-transparent rounded-full animate-spin"></div>
            <span>Signing in...</span>
          </div>
        ) : (
          'Sign In'
        )}
      </button>
    </div>
  );
}
