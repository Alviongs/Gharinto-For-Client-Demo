import React, { useState } from 'react';
import DesignerSidebar from './DesignerSidebar';
import DesignerOverview from './DesignerOverview';
import DesignerProjects from './DesignerProjects';
import LeadMarketplace from './LeadMarketplace';
import BOQGenerator from './BOQGenerator';
import PortfolioManagement from './PortfolioManagement';
import DigitalWallet from './DigitalWallet';
import MaterialCatalog from './MaterialCatalog';
import ClientManagement from './ClientManagement';
import DesignStudio from './DesignStudio';
import BusinessAnalytics from './BusinessAnalytics';
import Chat from './Chat';
import { useAuth } from '../../App';

function DesignerDashboard() {
  const [activePage, setActivePage] = useState('overview');
  const { user, logout } = useAuth();

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <DesignerOverview />;
      case 'leads':
        return <LeadMarketplace />;
      case 'projects':
        return <DesignerProjects />;
      case 'boq':
        return <BOQGenerator />;
      case 'portfolio':
        return <PortfolioManagement />;
      case 'chat':
        return <Chat />;
      case 'materials':
        return <MaterialCatalog />;
      case 'clients':
        return <ClientManagement />;
      case 'designs':
        return <DesignStudio />;
      case 'analytics':
        return <BusinessAnalytics />;
      default:
        return <DesignerOverview />;
    }
  };

  return (
    <div className="designer-dashboard flex min-h-screen bg-gray-100">
      <DesignerSidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Designer Portal</h1>
          <div className="flex items-center">
            <span className="mr-4">Welcome, {user.name}</span>
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </header>
        <main className="p-6 flex-1">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default DesignerDashboard;