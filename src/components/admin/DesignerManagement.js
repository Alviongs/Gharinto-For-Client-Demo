import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DesignerManagement() {
  const { designers } = SAMPLE_DATA;

  return (
    <div className="designer-management">
      <h3 className="text-2xl font-semibold mb-6">Designer Management</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Specialization</th>
              <th className="py-3 px-6 text-center">Projects</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {designers.map(designer => (
              <tr key={designer.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{designer.name}</td>
                <td className="py-3 px-6 text-left">{designer.email || 'N/A'}</td>
                <td className="py-3 px-6 text-left">{designer.specialization}</td>
                <td className="py-3 px-6 text-center">{designer.projects}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${designer.status === 'Active' ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>
                    {designer.status}
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

export default DesignerManagement;