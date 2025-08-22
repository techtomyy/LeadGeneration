import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/global/Header";
import Sidebar from "../components/global/Sidebar";
import DashboardContent from "../components/dashboard/DashboardContent";
import Footer from "../components/global/Footer";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
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

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-['Inter',sans-serif] flex flex-col">
      {/* Header */}
      <Header onLogout={handleLogout} onMenuToggle={toggleSidebar} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4 p-2 lg:p-4 relative">
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
          <Sidebar currentPage="dashboard" />
        </div>
        
        {/* Dashboard Content */}
        <div className="flex-1">
          <DashboardContent />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
