import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import DashboardOverview from './DashboardOverview';
import UserManagement from './UserManagement';
import ProjectManagement from './ProjectManagement';
import LeadManagement from './LeadManagement';
import Financials from './Financials';
import CustomerManagement from './CustomerManagement';
import DesignerManagement from './DesignerManagement';
import MaterialManagement from './MaterialManagement';
import ServiceManagement from './ServiceManagement';
import PortfolioManagement from './PortfolioManagement';
import TeamManagement from './TeamManagement';
import VendorManagement from './VendorManagement';
import TaskManagement from './TaskManagement';
import PurchaseOrderManagement from './PurchaseOrderManagement';
import TransactionManagement from './TransactionManagement';
import CommunicationHub from './CommunicationHub';
import SystemSettings from './SystemSettings';
import { useAuth } from '../../App';

function AdminDashboard() {
  const [activePage, setActivePage] = useState('overview');
  const { user, logout } = useAuth();

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <DashboardOverview />;
      case 'users':
        return <UserManagement />;
      case 'leads':
        return <LeadManagement />;
      case 'customers':
        return <CustomerManagement />;
      case 'designers':
        return <DesignerManagement />;
      case 'vendors':
        return <VendorManagement />;
      case 'projects':
        return <ProjectManagement />;
      case 'tasks':
        return <TaskManagement />;
      case 'materials':
        return <MaterialManagement />;
      case 'orders':
        return <PurchaseOrderManagement />;
      case 'financials':
        return <Financials />;
      case 'transactions':
        return <TransactionManagement />;
      case 'communications':
        return <CommunicationHub />;
      case 'services':
        return <ServiceManagement />;
      case 'portfolio':
        return <PortfolioManagement />;
      case 'team':
        return <TeamManagement />;
      case 'settings':
        return <SystemSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="admin-dashboard flex min-h-screen bg-gray-100">
      <AdminSidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
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

export default AdminDashboard;