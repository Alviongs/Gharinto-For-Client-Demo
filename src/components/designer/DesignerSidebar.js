
import React from 'react';

function DesignerSidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: 'fas fa-tachometer-alt' },
    { id: 'leads', label: 'Lead Marketplace', icon: 'fas fa-bullhorn' },
    { id: 'projects', label: 'My Projects', icon: 'fas fa-paint-brush' },
    { id: 'boq', label: 'BOQ Generator', icon: 'fas fa-file-invoice-dollar' },
    { id: 'portfolio', label: 'Portfolio Showcase', icon: 'fas fa-images' },
    { id: 'chat', label: 'Chat', icon: 'fas fa-comments' },
    { id: 'materials', label: 'Material Catalog', icon: 'fas fa-boxes' },
    { id: 'clients', label: 'Client Management', icon: 'fas fa-users' },
    { id: 'designs', label: 'Design Studio', icon: 'fas fa-drafting-compass' },
    { id: 'analytics', label: 'Business Analytics', icon: 'fas fa-chart-line' },
  ];

  return (
    <div className="designer-sidebar w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">Designer Hub</h2>
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

export default DesignerSidebar;
