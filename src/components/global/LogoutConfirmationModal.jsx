export default function LogoutConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with subtle blur effect */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)'
        }}
      >
        {/* Modal - no blur on content */}
        <div 
          className="bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-model)] shadow-2xl w-full max-w-md overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="pt-8 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-[var(--text-secondary)] mb-2">Logout Confirmation</h2>

            <div >
            <p className="text-[var(--text-secondary)] mb-6">
              Are you sure you want to logout?
            </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={onConfirm}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[var(--btn-primary)] to-[var(--btn-secondary)] text-[var(--bg-accent)] rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ background: 'var(--btn-gradient)' }}
              >
                Confirm
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-[var(--bg-primary)] text-[var(--text-secondary)] rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-secondary)] transition-all duration-300 hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
