
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DesignerLeads() {
  const designerName = 'Priya Sharma'; // Hardcoded for demo
  const leads = SAMPLE_DATA.leads.filter(l => l.assignedTo === designerName);

  return (
    <div className="designer-leads">
      <h2 className="text-3xl font-bold mb-6">Lead Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Lead Name</th>
              <th className="py-3 px-6 text-left">Source</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {leads.map(lead => (
              <tr key={lead.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{lead.name}</td>
                <td className="py-3 px-6 text-left">{lead.source}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    lead.status === 'Converted' ? 'bg-green-200 text-green-800' :
                    lead.status === 'New' ? 'bg-blue-200 text-blue-800' :
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DesignerLeads;
