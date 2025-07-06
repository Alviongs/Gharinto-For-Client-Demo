
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DesignerEarnings() {
  const designerName = 'Priya Sharma'; // Hardcoded for demo
  const earnings = SAMPLE_DATA.financials.designer.find(d => d.name === designerName);

  return (
    <div className="designer-earnings">
      <h2 className="text-3xl font-bold mb-6">Earnings & Wallet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Wallet Balance</h3>
          <p className="text-4xl font-bold text-green-500">₹{earnings.walletBalance.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Total Earnings</h3>
          <p className="text-4xl font-bold text-purple-500">₹{earnings.totalEarnings.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Transaction History</h3>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {earnings.transactions.map(t => (
              <tr key={t.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{t.date}</td>
                <td className="py-3 px-6 text-left">{t.project}</td>
                <td className="py-3 px-6 text-right">₹{t.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DesignerEarnings;
