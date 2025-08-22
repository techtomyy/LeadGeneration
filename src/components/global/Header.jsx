import profileIcon from '../../assets/profile.png';
import logo from '../../assets/logo.png';
import logoutIcon from '../../assets/logout.png';
import { useState, useEffect } from 'react';
import ProfileModal from './ProfileModal';
import LogoutConfirmationModal from './LogoutConfirmationModal';

export default function Header({ onLogout, showAuthButtons = true, onMenuToggle, onProfileModalChange, onLogoutModalChange }) {        
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Notify parent component when modal state changes
  useEffect(() => {
    if (onProfileModalChange) {
      onProfileModalChange(isProfileModalOpen);
    }
  }, [isProfileModalOpen, onProfileModalChange]);

  useEffect(() => {
    if (onLogoutModalChange) {
      onLogoutModalChange(isLogoutModalOpen);
    }
  }, [isLogoutModalOpen, onLogoutModalChange]);

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleLogoutConfirm = () => {
    closeLogoutModal();
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <>
      <header className="h-20 lg:h-24 w-auto bg-transparent border border-[var(--border-input)] rounded-md px-3 lg:px-6 py-3 lg:py-4 m-2 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Company Info */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* Mobile Menu Toggle Button */}
            {onMenuToggle && (
              <button 
                onClick={onMenuToggle}
                className="lg:hidden p-2 rounded-lg border border-[var(--border-primary)] hover:bg-[var(--bg-input)] transition-colors"
              >
                <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
              </button>
            )}
            
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[var(--btn-primary)] to-[var(--btn-secondary)] rounded-xl flex items-center justify-center">
              <img src={logo} alt="LeadHarvest Logo" className="w-12 h-12 lg:w-16 lg:h-16" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-[var(--text-primary)]">LeadHarvest AI</h1>
              <p className="text-xs lg:text-sm text-[var(--text-muted)]">Fresh, Verified Leads — On Demand</p>
            </div>
          </div>

          {/* Right side - Action Buttons */}
          {showAuthButtons && (
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button className="hidden sm:block px-3 lg:px-4 py-2 bg-[var(--bg-input)] text-[var(--text-muted)] rounded-3xl border border-[var(--border-primary)] hover:bg-[var(--border-primary)] transition-colors text-xs lg:text-sm">
                Credits: 300
              </button>
              <button 
                onClick={openProfileModal}
                className="px-3 lg:px-4 py-2 bg-[var(--bg-input)] text-[var(--text-secondary)] rounded-xl border border-[var(--border-primary)] hover:bg-[var(--border-primary)] transition-colors flex items-center space-x-2" 
                style={{ background: 'var(--btn-gradient)' }}
              >
                <img src={profileIcon} alt="Profile" className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </button>
              {onLogout && (
                <button 
                  onClick={openLogoutModal}
                  className="px-3 lg:px-4 py-2 bg-[var(--bg-input)] text-[var(--text-secondary)] rounded-xl border border-[var(--border-primary)] hover:bg-[var(--border-primary)] transition-colors flex items-center space-x-2"
                >
                  <img src={logoutIcon} alt="Logout" className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Profile Modal */}
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={closeProfileModal} 
      />

      {/* Logout Confirmation Modal */}
      <LogoutConfirmationModal
        isOpen={isLogoutModalOpen}
        onClose={closeLogoutModal}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}
