import { useNavigate } from 'react-router-dom';
import homeIcon from '../../assets/house.png';
import searchIcon from '../../assets/search.png';
import mapIcon from '../../assets/chart-area.png';
import antennaIcon from '../../assets/antenna.png';
import calendarCheckIcon from '../../assets/calendar-check.png';
import downloadIcon from '../../assets/move-down.png';
import fileIcon from '../../assets/file-user.png';
import factoryIcon from '../../assets/factory.png';
import badgeCheckIcon from '../../assets/badge-check.png';
import workflowIcon from '../../assets/workflow.png';
import botIcon from '../../assets/bot.png';
import notepadTextIcon from '../../assets/notepad-text.png';
import chartColumnStackedIcon from '../../assets/chart-column-stacked.png';
import microchipIcon from '../../assets/microchip.png';

export default function Sidebar({ currentPage = 'dashboard' }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon:  <img src={homeIcon} alt="home" />,
      path: '/dashboard'
    },
    {
      id: 'lead-finder',
      label: 'Lead Finder',
      icon: <img src={searchIcon} alt="search" />,
      path: '/lead-finder'
    },
    {
      id: 'area-selection',
      label: 'Area Selection',
      icon: <img src={mapIcon} alt="map" />,
      path: '/area-selection'
    },
    {
      id: 'live-scraping',
      label: 'Live Scraping',
      icon: <img src={antennaIcon} alt="chart-area" />,
      path: '/live-scraping'
    },
    {
      id: 'cleaning-verify',
      label: 'Cleaning & Verify',
      icon: <img src={calendarCheckIcon} alt="calendar" />,
      path: '/cleaning-verify'
    },
    {
      id: 'results-export',
      label: 'Results & Export',
      icon: <img src={fileIcon} alt="download" />,
      path: '/results-export'
    }
  ];

  const growthItems = [
    {
      id: 'industry-packages',
      label: 'Industry Packages',
      icon: <img src={factoryIcon} alt="factory" />,
      path: '/industry-packages'
    },
    {
      id: 'scheduled-updates',
      label: 'Scheduled Updates',
      icon: <img src={badgeCheckIcon} alt="badge-check" />,
      path: '/scheduled-updates'
    },
    {
      id: 'downloads',
      label: 'Downloads',
      icon: <img src={downloadIcon} alt="download" />,
      path: '/downloads'
    }
  ];

  const integrationItems = [
    {
      id: 'crm-integration',
      label: 'CRM Integration',
      icon: <img src={workflowIcon} alt="workflow" />,
      path: '/crm-integration'
    },
    {
      id: 'api-keys',
      label: 'API & Keys',
      icon: <img src={botIcon} alt="bot" />,
      path: '/api-keys'
    },
    {
      id: 'billing-plans',
      label: 'Billing & Plans',
      icon: <img src={notepadTextIcon} alt="file" />,
      path: '/billing-plans'
    },
    {
      id: 'competitor-compare',
      label: 'Competitor Compare',
      icon: <img src={chartColumnStackedIcon} alt="chart-line" />,
      path: '/competitor-compare'
    },
    {
      id: 'compliance',
      label: 'Compliance',
      icon: <img src={microchipIcon} alt="microchip" />,
      path: '/compliance'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="w-auto h-full bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border-input)] rounded-2xl shadow-xl backdrop-blur-sm scroll-smooth">
      <nav className="p-3 lg:p-6 h-full overflow-y-auto scroll-smooth">
        {/* Main Section */}
        <div className="mb-4 lg:mb-6 flex flex-col">
          <h3 className="text-[10px] lg:text-[11px] font-bold text-[var(--text-sidebar)] uppercase tracking-[0.2em] mb-3 lg:mb-4 opacity-70">Main</h3>
          <ul className="space-y-2 lg:space-y-3 list-none">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                  className={`block w-auto text-left flex items-center space-x-2 lg:space-x-3 text-xs lg:text-sm font-medium transition-all duration-300 cursor-pointer py-1.5 lg:py-2 px-2 lg:px-3 rounded-lg no-underline hover:scale-105 ${
                    currentPage === item.id
                      ? 'text-[var(--text-primary)]  border-2 border-[var(--border-input)] hover:bg-[var(--bg-input)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)]'
                  }`}
                >
                  <span className="w-4 h-4 lg:w-5 lg:h-5 text-sm lg:text-base flex-shrink-0">{item.icon}</span>
                  <span className="font-semibold truncate">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Growth Section */}
        <div className="mb-4 lg:mb-6 flex flex-col">
          <h3 className="text-[10px] lg:text-[11px] font-bold text-[var(--text-sidebar)] uppercase tracking-[0.2em] mb-3 lg:mb-4 opacity-70">Growth</h3>
          <ul className="space-y-2 lg:space-y-3 list-none">
            {growthItems.map((item) => (
              <li key={item.id}>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                   className={`block w-auto text-left flex items-center space-x-2 lg:space-x-3 text-xs lg:text-sm font-medium transition-all duration-300 cursor-pointer py-1.5 lg:py-2 px-2 lg:px-3 rounded-lg no-underline hover:scale-105 ${
                    currentPage === item.id
                      ? 'text-[var(--text-primary)]  border-2 border-[var(--border-input)] hover:bg-[var(--bg-input)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)]'
                  }`}                >
                  <span className="w-4 h-4 lg:w-5 lg:h-5 text-sm lg:text-base flex-shrink-0">{item.icon}</span>
                  <span className="font-semibold truncate">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Integrations & Trust Section */}
        <div className="flex flex-col">
          <h3 className="text-[10px] lg:text-[11px] font-bold text-[var(--text-sidebar)] uppercase tracking-[0.2em] mb-3 lg:mb-4 opacity-70">Integrations & Trust</h3>
          <ul className="space-y-2 lg:space-y-3 list-none">
            {integrationItems.map((item) => (
              <li key={item.id}>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                  className={`block w-auto text-left flex items-center space-x-2 lg:space-x-3 text-xs lg:text-sm font-medium transition-all duration-300 cursor-pointer py-1.5 lg:py-2 px-2 lg:px-3 rounded-lg no-underline hover:scale-105 ${
                    currentPage === item.id
                      ? 'text-[var(--text-primary)]  border-2 border-[var(--border-input)] hover:bg-[var(--bg-input)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-input)]'
                  }`}                >
                  <span className="w-4 h-4 lg:w-5 lg:h-5 text-sm lg:text-base flex-shrink-0">{item.icon}</span>
                  <span className="font-semibold truncate">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
