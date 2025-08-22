import { useState, useEffect } from 'react';

export default function ProfileModal({ isOpen, onClose }) {
  const [profileData, setProfileData] = useState({
    fullName: 'John Smith',
    email: 'you@company.com',
    role: 'Owner'
  });

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Profile saved:', profileData);
    onClose();
  };

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
          className="bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-model)] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-secondary)]">Account</h2>
              <p className="text-[var(--text-muted)]">Manage team & billing</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[var(--bg-primary)] transition-all duration-300 hover:scale-110"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Profile Information */}
              <div className="space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      value={profileData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your role"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="w-auto h-auto px-6 py-2 bg-gradient-to-r from-[var(--btn-primary)] to-[var(--btn-secondary)] text-[var(--bg-accent)] rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ background: 'var(--btn-gradient)' }}
                >
                  Save
                </button>
              </div>

              {/* Plan Information */}
              <div className="space-y-6">
                
                <div className=" w-82 h-80 bg-[var(--bg-secondary)] rounded-xl p-4 mt-2 border border-[var(--border-primary)]">
                  <div className=" mb-6">
                    <div className="text-lg font-bold text-[var(--text-secondary)]">
                    <h3 className="text-2xl font-semibold text-[var(--text-secondary)] mb-1">Plan </h3>
                      <p className="text-sm font-semibold text-[var(--text-muted)] mb-1">Pro 1,200 leads / mo</p>
                    </div>
                    <div className="text-[var(--text-muted)]">
                      
                    </div>
                  </div>

                  <div className="space-y-3 flex flex-col items-center">
                    <button className="w-48 px-4 py-3 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-all duration-300 hover:scale-105">
                      Manage Billing
                    </button>
                    <button className="w-48 px-4 py-3 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-primary)] transition-all duration-300 hover:scale-105">
                      Manage Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
