
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function VendorManagement() {
  const vendors = SAMPLE_DATA.vendors;

  return (
    <div className="vendor-management">
      <h2 className="text-3xl font-bold mb-6">Vendor Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Vendor</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-center">Rating</th>
              <th className="py-3 px-6 text-center">Contact</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {vendors.map(vendor => (
              <tr key={vendor.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{vendor.name}</td>
                <td className="py-3 px-6 text-left">{vendor.category}</td>
                <td className="py-3 px-6 text-center">{vendor.rating} / 5</td>
                <td className="py-3 px-6 text-center">{vendor.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VendorManagement;
