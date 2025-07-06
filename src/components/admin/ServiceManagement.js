import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function ServiceManagement() {
  const { services } = SAMPLE_DATA;

  return (
    <div className="service-management">
      {showServiceForm && <ServiceForm onClose={() => setShowServiceForm(false)} />}
      <h3 className="text-2xl font-semibold mb-6">Service Management</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Service Name</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {services.map(service => (
              <tr key={service.name} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{service.name}</td>
                <td className="py-3 px-6 text-left">{service.description}</td>
                <td className="py-3 px-6 text-left">{service.price}</td>
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

export default ServiceManagement;