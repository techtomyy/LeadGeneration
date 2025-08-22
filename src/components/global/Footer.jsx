export default function Footer() {
  return (
    <footer className="w-full bg-transparent border border-[var(--border-input)] px-3 sm:px-6 py-3 sm:py-4 rounded-2xl m-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        {/* Left side - Copyright */}
        <div className="text-xs sm:text-sm text-[var(--text-secondary)] text-center sm:text-left">
          © 2025 LeadHarvest. All Rights Reserved.
        </div>

        {/* Right side - Links */}
        <div className="flex items-center justify-center sm:justify-end space-x-4 sm:space-x-6">
          <a href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            Help
          </a>
        </div>
      </div>
    </footer>
  );
}
