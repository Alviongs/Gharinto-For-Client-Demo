import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function TransactionManagement() {
  const { transactions } = SAMPLE_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-200 text-green-600';
      case 'Pending': return 'bg-yellow-200 text-yellow-600';
      case 'Processed': return 'bg-blue-200 text-blue-600';
      case 'Failed': return 'bg-red-200 text-red-600';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Payment': return 'bg-green-200 text-green-600';
      case 'Refund': return 'bg-orange-200 text-orange-600';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  return (
    <div className="transaction-management">
      <h3 className="text-2xl font-semibold mb-6">Transaction Management</h3>
      
      {/* Transaction Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Transactions</h4>
          <p className="text-3xl font-bold text-gray-800">{transactions.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Revenue</h4>
          <p className="text-3xl font-bold text-green-600">₹{transactions.filter(t => t.type === 'Payment').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Pending Amount</h4>
          <p className="text-3xl font-bold text-yellow-600">₹{transactions.filter(t => t.status === 'Pending').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">GST Collected</h4>
          <p className="text-3xl font-bold text-blue-600">₹{transactions.reduce((sum, t) => sum + t.gstAmount, 0).toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Generate Report
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Export CSV
            </button>
          </div>
          <div className="flex space-x-2">
            <input 
              type="date" 
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="date" 
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Types</option>
              <option value="Payment">Payment</option>
              <option value="Refund">Refund</option>
            </select>
          </div>
        </div>
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Transaction ID</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-center">Type</th>
              <th className="py-3 px-6 text-right">Amount</th>
              <th className="py-3 px-6 text-right">GST</th>
              <th className="py-3 px-6 text-center">Method</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Date</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {transactions.map(transaction => (
              <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <div>
                    <div className="font-medium">{transaction.id}</div>
                    <div className="text-gray-500 text-xs">{transaction.invoiceNumber}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{transaction.projectId}</td>
                <td className="py-3 px-6 text-left">{transaction.customerId}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getTypeColor(transaction.type)}`}>
                    {transaction.type}
                  </span>
                </td>
                <td className="py-3 px-6 text-right font-medium">₹{transaction.amount.toLocaleString()}</td>
                <td className="py-3 px-6 text-right">₹{transaction.gstAmount.toLocaleString()}</td>
                <td className="py-3 px-6 text-center">{transaction.method}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">{new Date(transaction.date).toLocaleDateString()}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="View Details">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" title="Download Invoice">
                      <i className="fas fa-download"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="Send Receipt">
                      <i className="fas fa-envelope"></i>
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

export default TransactionManagement;