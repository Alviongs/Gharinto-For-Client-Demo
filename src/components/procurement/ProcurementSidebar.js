
import React from 'react';

function ProcurementSidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { id: 'inventory', label: 'Inventory', icon: 'fas fa-boxes' },
    { id: 'orders', label: 'Orders', icon: 'fas fa-dolly-flatbed' },
    { id: 'vendors', label: 'Vendors', icon: 'fas fa-store' },
  ];

  return (
    <div className="procurement-sidebar w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">Procurement</h2>
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

export default ProcurementSidebar;
