
import React, { useState } from 'react';
import CustomerSidebar from './CustomerSidebar';
import CustomerProjectOverview from './CustomerProjectOverview';
import CustomerDesigns from './CustomerDesigns';
import CustomerFinancials from './CustomerFinancials';
import CustomerCommunication from './CustomerCommunication';
import CustomerDocuments from './CustomerDocuments';
import CustomerFeedback from './CustomerFeedback';
import CustomerProgressTracking from './CustomerProgressTracking';
import { useAuth } from '../../App';

function CustomerPortal() {
  const [activePage, setActivePage] = useState('overview');
  const { user, logout } = useAuth();

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <CustomerProjectOverview />;
      case 'designs':
        return <CustomerDesigns />;
      case 'financials':
        return <CustomerFinancials />;
      case 'communication':
        return <CustomerCommunication />;
      case 'documents':
        return <CustomerDocuments />;
      case 'feedback':
        return <CustomerFeedback />;
      case 'progress':
        return <CustomerProgressTracking />;
      default:
        return <CustomerProjectOverview />;
    }
  };

  return (
    <div className="customer-portal flex min-h-screen bg-gray-100">
      <CustomerSidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Customer Portal</h1>
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

export default CustomerPortal;
