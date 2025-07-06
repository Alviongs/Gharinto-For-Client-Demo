import React, { useState } from 'react';
import VendorSidebar from './VendorSidebar';
import VendorDashboard from './VendorDashboard';
import ProductCatalog from './ProductCatalog';
import OrderManagement from './OrderManagement';
import InventoryManagement from './InventoryManagement';
import VendorFinancials from './VendorFinancials';
import { useAuth } from '../../App';

function VendorPortal() {
  const [activePage, setActivePage] = useState('dashboard');
  const { user, logout } = useAuth();

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <VendorDashboard />;
      case 'catalog':
        return <ProductCatalog />;
      case 'orders':
        return <OrderManagement />;
      case 'inventory':
        return <InventoryManagement />;
      case 'financials':
        return <VendorFinancials />;
      default:
        return <VendorDashboard />;
    }
  };

  return (
    <div className="vendor-portal flex min-h-screen bg-gray-100">
      <VendorSidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Vendor Portal</h1>
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

export default VendorPortal;