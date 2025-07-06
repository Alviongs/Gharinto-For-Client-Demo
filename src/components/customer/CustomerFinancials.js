
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { useAuth } from '../../App';

function CustomerFinancials() {
  const { user } = useAuth();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  
  const customerName = user?.name || 'Sharma Family';
  const project = SAMPLE_DATA.projects.find(p => p.customerName === customerName);
  const customerTransactions = SAMPLE_DATA.transactions.filter(t => t.projectId === project?.id);

  if (!project) {
    return (
      <div className="customer-financials">
        <h2 className="text-3xl font-bold mb-6">Payments & Invoices</h2>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <i className="fas fa-file-invoice-dollar text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Financial Data</h3>
          <p className="text-gray-500">No active project found to display financial information.</p>
        </div>
      </div>
    );
  }

  const totalPaid = customerTransactions.filter(t => t.status === 'Completed').reduce((sum, t) => sum + t.amount, 0);
  const pendingAmount = customerTransactions.filter(t => t.status === 'Pending').reduce((sum, t) => sum + t.amount, 0);
  const totalGST = customerTransactions.reduce((sum, t) => sum + t.gstAmount, 0);

  // Mock payment schedule based on project phases
  const paymentSchedule = [
    { phase: 'Design Approval', percentage: 20, amount: project.budget * 0.20, status: 'Paid', dueDate: '2024-01-15', paidDate: '2024-01-15' },
    { phase: 'Material Procurement', percentage: 30, amount: project.budget * 0.30, status: 'Paid', dueDate: '2024-02-01', paidDate: '2024-02-01' },
    { phase: 'Civil Work Start', percentage: 25, amount: project.budget * 0.25, status: 'Pending', dueDate: '2024-03-01', paidDate: null },
    { phase: 'Installation', percentage: 20, amount: project.budget * 0.20, status: 'Upcoming', dueDate: '2024-03-15', paidDate: null },
    { phase: 'Project Completion', percentage: 5, amount: project.budget * 0.05, status: 'Upcoming', dueDate: '2024-04-01', paidDate: null }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-200 text-green-800';
      case 'Pending': return 'bg-yellow-200 text-yellow-800';
      case 'Upcoming': return 'bg-blue-200 text-blue-800';
      case 'Overdue': return 'bg-red-200 text-red-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="customer-financials">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Payments & Financial Overview</h2>
        <div className="flex space-x-4">
          <button 
            onClick={() => setShowPaymentModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            <i className="fas fa-credit-card mr-2"></i>Make Payment
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-download mr-2"></i>Download Invoices
          </button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Project Cost</h4>
              <p className="text-3xl font-bold text-blue-600">Rs.{project.budget.toLocaleString()}</p>
              <p className="text-sm text-blue-600">Including all taxes</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <i className="fas fa-calculator text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Amount Paid</h4>
              <p className="text-3xl font-bold text-green-600">Rs.{totalPaid.toLocaleString()}</p>
              <p className="text-sm text-green-600">{((totalPaid / project.budget) * 100).toFixed(1)}% completed</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <i className="fas fa-check-circle text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Pending Amount</h4>
              <p className="text-3xl font-bold text-yellow-600">Rs.{(project.budget - totalPaid).toLocaleString()}</p>
              <p className="text-sm text-yellow-600">{(((project.budget - totalPaid) / project.budget) * 100).toFixed(1)}% remaining</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <i className="fas fa-clock text-yellow-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">GST Paid</h4>
              <p className="text-3xl font-bold text-purple-600">Rs.{totalGST.toLocaleString()}</p>
              <p className="text-sm text-purple-600">18% GST included</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <i className="fas fa-receipt text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Progress */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-lg font-semibold text-gray-600 mb-4">Payment Progress</h4>
        <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
          <div 
            className="bg-gradient-to-r from-green-400 to-green-600 h-6 rounded-full transition-all duration-500"
            style={{ width: `${(totalPaid / project.budget) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Rs.{totalPaid.toLocaleString()} paid</span>
          <span>{((totalPaid / project.budget) * 100).toFixed(1)}% complete</span>
          <span>Rs.{project.budget.toLocaleString()} total</span>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-lg font-semibold text-gray-600 mb-4">Payment Schedule</h4>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Phase</th>
                <th className="py-3 px-6 text-center">Percentage</th>
                <th className="py-3 px-6 text-right">Amount</th>
                <th className="py-3 px-6 text-center">Due Date</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {paymentSchedule.map((payment, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">
                    <div className="font-medium">{payment.phase}</div>
                  </td>
                  <td className="py-3 px-6 text-center">{payment.percentage}%</td>
                  <td className="py-3 px-6 text-right font-medium">Rs.{payment.amount.toLocaleString()}</td>
                  <td className="py-3 px-6 text-center">{payment.dueDate}</td>
                  <td className="py-3 px-6 text-center">
                    <span className={`py-1 px-3 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    {payment.status === 'Pending' && (
                      <button 
                        onClick={() => setShowPaymentModal(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Pay Now
                      </button>
                    )}
                    {payment.status === 'Paid' && (
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs">
                        <i className="fas fa-download"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-600 mb-4">Transaction History</h4>
        <div className="space-y-4">
          {customerTransactions.map(transaction => (
            <div key={transaction.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-medium">{transaction.description}</h5>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Invoice: {transaction.invoiceNumber}</span>
                  <span>Date: {new Date(transaction.date).toLocaleDateString()}</span>
                  <span>Method: {transaction.method}</span>
                </div>
              </div>
              <div className="text-right ml-4">
                <p className="font-bold text-lg">Rs.{transaction.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-500">+GST Rs.{transaction.gstAmount.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full m-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Make Payment</h3>
                <button onClick={() => setShowPaymentModal(false)} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter amount" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Credit/Debit Card</option>
                    <option>Net Banking</option>
                    <option>UPI</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <button 
                    onClick={() => setShowPaymentModal(false)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerFinancials;
