import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function CustomerManagement() {
  const { customers } = SAMPLE_DATA;

  return (
    <div className="customer-management">
      <h3 className="text-2xl font-semibold mb-6">Customer Management</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-center">Projects</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {customers.map(customer => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{customer.name}</td>
                <td className="py-3 px-6 text-left">{customer.email}</td>
                <td className="py-3 px-6 text-left">{customer.location}</td>
                <td className="py-3 px-6 text-center">{customer.projects}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${customer.status === 'Active' ? 'bg-green-200 text-green-600' : 'bg-blue-200 text-blue-600'}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                      <i className="fas fa-trash-alt"></i>
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

export default CustomerManagement;