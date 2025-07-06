import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function VendorManagement() {
  const { vendors } = SAMPLE_DATA;

  return (
    <div className="vendor-management">
      <h3 className="text-2xl font-semibold mb-6">Vendor Management</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add New Vendor
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Bulk Import
            </button>
          </div>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Search vendors..." 
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
              <th className="py-3 px-6 text-left">Vendor Name</th>
              <th className="py-3 px-6 text-left">Business Type</th>
              <th className="py-3 px-6 text-left">Categories</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-center">Rating</th>
              <th className="py-3 px-6 text-center">Products</th>
              <th className="py-3 px-6 text-center">Monthly Orders</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {vendors.map(vendor => (
              <tr key={vendor.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div>
                    <div className="font-medium">{vendor.name}</div>
                    <div className="text-gray-500 text-xs">{vendor.email}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{vendor.businessType}</td>
                <td className="py-3 px-6 text-left">
                  <div className="flex flex-wrap gap-1">
                    {vendor.categories.map((cat, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{vendor.location}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{vendor.rating}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">{vendor.totalProducts}</td>
                <td className="py-3 px-6 text-center">{vendor.monthlyOrders}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${vendor.status === 'Active' ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>
                    {vendor.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="View Details">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" title="Approve">
                      <i className="fas fa-check"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110" title="Suspend">
                      <i className="fas fa-ban"></i>
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

export default VendorManagement;