
import React from 'react';

function CustomerSidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'overview', label: 'Project Overview', icon: 'fas fa-home' },
    { id: 'designs', label: 'Designs & 3D Views', icon: 'fas fa-palette' },
    { id: 'financials', label: 'Payments & Invoices', icon: 'fas fa-file-invoice-dollar' },
    { id: 'communication', label: 'Team Communication', icon: 'fas fa-comments' },
    { id: 'documents', label: 'Documents & Warranty', icon: 'fas fa-file-alt' },
    { id: 'feedback', label: 'Feedback & Reviews', icon: 'fas fa-star' },
    { id: 'progress', label: 'Live Progress Tracking', icon: 'fas fa-chart-line' },
  ];

  return (
    <div className="customer-sidebar w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">My Project</h2>
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

export default CustomerSidebar;
