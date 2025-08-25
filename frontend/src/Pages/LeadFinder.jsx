import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/global/Header";
import Sidebar from "../components/global/Sidebar";
import LeadFinderContent from "../components/leadfinder/LeadFinderContent";
import Footer from "../components/global/Footer";

export default function LeadFinder() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }

    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function to remove smooth scrolling
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleProfileModalChange = (isOpen) => {
    console.log('Profile modal state changed:', isOpen); // Debug log
    setIsProfileModalOpen(isOpen);
  };

  const handleLogoutModalChange = (isOpen) => {
    console.log('Logout modal state changed:', isOpen); // Debug log
    setIsLogoutModalOpen(isOpen);
  };

  // Check if any modal is open
  const isAnyModalOpen = isProfileModalOpen || isLogoutModalOpen;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-['Inter',sans-serif] flex flex-col scroll-smooth">
      {/* Header */}
      <Header 
        onLogout={handleLogout} 
        onMenuToggle={toggleSidebar} 
        onProfileModalChange={handleProfileModalChange}
        onLogoutModalChange={handleLogoutModalChange}
      />
      
      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col lg:flex-row gap-4 p-1 lg:p-2 relative overflow-hidden transition-all duration-300 ${isAnyModalOpen ? 'bg-blur-strong' : ''}`}>
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}
        
        {/* Sidebar - hidden on mobile by default, shown when toggled */}
        <div className={`fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:block`}>
          <Sidebar currentPage="lead-finder" />
        </div>
        
        {/* Lead Finder Content */}
        <div 
          className="flex-1 overflow-y-auto scroll-smooth transition-all duration-300"
          style={{
            filter: isAnyModalOpen ? 'blur(2px)' : 'blur(0px)',
            transform: isAnyModalOpen ? 'scale(0.99)' : 'scale(1)',
            opacity: isAnyModalOpen ? '0.9' : '1'
          }}
        >
          <LeadFinderContent />
        </div>
      </div>
      
      {/* Footer */}
      <div 
        className="transition-all duration-300"
        style={{
          filter: isAnyModalOpen ? 'blur(2px)' : 'blur(0px)',
          transform: isAnyModalOpen ? 'scale(0.99)' : 'scale(1)',
          opacity: isAnyModalOpen ? '0.9' : '1'
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
