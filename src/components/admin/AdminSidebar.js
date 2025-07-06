import React from 'react';

function AdminSidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: 'fas fa-tachometer-alt' },
    { id: 'users', label: 'User Management', icon: 'fas fa-users' },
    { id: 'leads', label: 'Lead Assignment Engine', icon: 'fas fa-bullhorn' },
    { id: 'customers', label: 'Customer Management', icon: 'fas fa-user-friends' },
    { id: 'designers', label: 'Designer Partners', icon: 'fas fa-paint-brush' },
    { id: 'vendors', label: 'Vendor Management', icon: 'fas fa-store' },
    { id: 'projects', label: 'Project Oversight', icon: 'fas fa-project-diagram' },
    { id: 'tasks', label: 'Task Management', icon: 'fas fa-tasks' },
    { id: 'materials', label: 'Material Catalog', icon: 'fas fa-boxes' },
    { id: 'orders', label: 'Purchase Orders', icon: 'fas fa-file-invoice' },
    { id: 'financials', label: 'Financial Management', icon: 'fas fa-chart-line' },
    { id: 'transactions', label: 'Transaction Logs', icon: 'fas fa-credit-card' },
    { id: 'communications', label: 'Communication Hub', icon: 'fas fa-comments' },
    { id: 'services', label: 'Service Management', icon: 'fas fa-concierge-bell' },
    { id: 'portfolio', label: 'Portfolio Showcase', icon: 'fas fa-images' },
    { id: 'team', label: 'Team Management', icon: 'fas fa-users-cog' },
    { id: 'calendar', label: 'Calendar', icon: 'fas fa-calendar-alt' },
  ];

  return (
    <div className="admin-sidebar w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">Gharinto Admin</h2>
      </div>
      <nav className="flex-1 p-2">
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActivePage(item.id)}
                className={`w-full text-left p-3 my-1 rounded-md flex items-center transition-colors ${
                  activePage === item.id
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}>
                <i className={`${item.icon} mr-3`}></i>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default AdminSidebar;