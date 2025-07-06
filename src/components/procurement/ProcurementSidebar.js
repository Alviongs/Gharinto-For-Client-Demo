
import React from 'react';

function ProcurementSidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'overview', label: 'Procurement Dashboard', icon: 'fas fa-tachometer-alt' },
    { id: 'inventory', label: 'Inventory Management', icon: 'fas fa-boxes' },
    { id: 'orders', label: 'Purchase Orders', icon: 'fas fa-file-invoice' },
    { id: 'vendors', label: 'Vendor Coordination', icon: 'fas fa-handshake' },
    { id: 'quality', label: 'Quality Control', icon: 'fas fa-check-circle' },
    { id: 'logistics', label: 'Logistics Tracking', icon: 'fas fa-truck' },
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
