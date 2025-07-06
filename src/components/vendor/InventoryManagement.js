import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function InventoryManagement() {
  const { materials } = SAMPLE_DATA;
  
  return (
    <div className="inventory-management">
      <h3 className="text-2xl font-semibold mb-6">Inventory Management</h3>
      
      {/* Inventory Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Products</h4>
          <p className="text-3xl font-bold text-blue-600">{materials.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Low Stock Items</h4>
          <p className="text-3xl font-bold text-red-600">{materials.filter(m => m.stock < 50).length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Stock Value</h4>
          <p className="text-3xl font-bold text-green-600">₹{materials.reduce((sum, m) => sum + (m.price * m.stock), 0).toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Categories</h4>
          <p className="text-3xl font-bold text-purple-600">{[...new Set(materials.map(m => m.category))].length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Update Stock
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Set Alerts
            </button>
          </div>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Search inventory..." 
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Categories</option>
              <option value="Furniture">Furniture</option>
              <option value="Lighting">Lighting</option>
              <option value="Flooring">Flooring</option>
            </select>
          </div>
        </div>
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-center">Current Stock</th>
              <th className="py-3 px-6 text-center">Min Stock</th>
              <th className="py-3 px-6 text-right">Unit Price</th>
              <th className="py-3 px-6 text-right">Stock Value</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {materials.map(item => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-500 text-xs">{item.unit}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{item.category}</td>
                <td className="py-3 px-6 text-center">
                  <span className={item.stock < 50 ? 'text-red-600 font-bold' : ''}>{item.stock}</span>
                </td>
                <td className="py-3 px-6 text-center">50</td>
                <td className="py-3 px-6 text-right">₹{item.price.toLocaleString()}</td>
                <td className="py-3 px-6 text-right font-medium">₹{(item.price * item.stock).toLocaleString()}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${
                    item.stock < 50 ? 'bg-red-200 text-red-600' : 
                    item.stock < 100 ? 'bg-yellow-200 text-yellow-600' : 
                    'bg-green-200 text-green-600'
                  }`}>
                    {item.stock < 50 ? 'Low Stock' : item.stock < 100 ? 'Medium' : 'In Stock'}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="Update Stock">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" title="Reorder">
                      <i className="fas fa-plus"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-orange-500 hover:scale-110" title="Set Alert">
                      <i className="fas fa-bell"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryManagement;