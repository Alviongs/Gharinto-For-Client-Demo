import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function PortfolioManagement() {
  const { portfolioItems } = SAMPLE_DATA;

  return (
    <div className="portfolio-management">
      <h3 className="text-2xl font-semibold mb-6">Portfolio Management</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Designer</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {portfolioItems.map(item => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.title}</td>
                <td className="py-3 px-6 text-left">{item.category}</td>
                <td className="py-3 px-6 text-left">{item.location}</td>
                <td className="py-3 px-6 text-left">{item.designer}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
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

export default PortfolioManagement;