
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DesignerBOQ() {
  const designerName = 'Priya Sharma'; // Hardcoded for demo
  const boqs = SAMPLE_DATA.boqs.filter(boq => boq.designer === designerName);

  return (
    <div className="designer-boq">
      <h2 className="text-3xl font-bold mb-6">BOQ Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-left">Version</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {boqs.map(boq => (
              <tr key={boq.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{boq.project.name}</td>
                <td className="py-3 px-6 text-left">{boq.version}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    boq.status === 'Approved' ? 'bg-green-200 text-green-800' :
                    boq.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {boq.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">₹{boq.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DesignerBOQ;
