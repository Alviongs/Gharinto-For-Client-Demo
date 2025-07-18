import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function LeadManagement() {
  const { leads } = SAMPLE_DATA;

  return (
    <div className="lead-management">
      {showLeadForm && <LeadForm onClose={() => setShowLeadForm(false)} />}
      <h3 className="text-2xl font-semibold mb-6">Lead Management</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-left">Budget</th>
              <th className="py-3 px-6 text-left">Assigned To</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {leads.map(lead => (
              <tr key={lead.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{lead.customer}</td>
                <td className="py-3 px-6 text-left">{lead.budget}</td>
                <td className="py-3 px-6 text-left">{lead.assignedTo || 'Unassigned'}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${lead.status === 'New' ? 'bg-blue-200 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <i className="fas fa-edit"></i>
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

export default LeadManagement;