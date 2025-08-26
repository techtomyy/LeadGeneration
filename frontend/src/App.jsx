import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Pages/SignupForm';
import Login from './Pages/LoginForm';
import Dashboard from './Pages/Dashboard';
import LeadFinder from './Pages/LeadFinder';
import AreaSelection from './Pages/AreaSelection';
import LiveScraping from './Pages/LiveScraping';
import CleaningVerify from './Pages/CleaningVerify';
import ResultsExport from './Pages/ResultsExport';
import IndustryPackages from './Pages/IndustryPackages';
import ScheduledUpdates from './Pages/ScheduledUpdates';
import Downloads from './Pages/Downloads';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lead-finder" element={<LeadFinder />} />
          <Route path="/area-selection" element={<AreaSelection />} />
          <Route path="/live-scraping" element={<LiveScraping />} />
          <Route path="/cleaning-verify" element={<CleaningVerify />} />
          <Route path="/results-export" element={<ResultsExport />} />
          <Route path="/industry-packages" element={<IndustryPackages />} />
          <Route path="/scheduled-updates" element={<ScheduledUpdates />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
