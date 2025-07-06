
import React, { useState } from 'react';
import ProcurementSidebar from './ProcurementSidebar';
import ProcurementOverview from './ProcurementOverview';
import InventoryManagement from './InventoryManagement';
import OrderManagement from './OrderManagement';
import VendorManagement from './VendorManagement';
import QualityControl from './QualityControl';
import LogisticsTracking from './LogisticsTracking';
import { useAuth } from '../../App';

function ProcurementPortal() {
  const [activePage, setActivePage] = useState('overview');
  const { user, logout } = useAuth();

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <ProcurementOverview />;
      case 'inventory':
        return <InventoryManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'vendors':
        return <VendorManagement />;
      case 'quality':
        return <QualityControl />;
      case 'logistics':
        return <LogisticsTracking />;
      default:
        return <ProcurementOverview />;
    }
  };

  return (
    <div className="procurement-portal flex min-h-screen bg-gray-100">
      <ProcurementSidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Procurement Portal</h1>
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

export default ProcurementPortal;
