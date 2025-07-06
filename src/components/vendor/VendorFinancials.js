import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function VendorFinancials() {
  const { purchaseOrders } = SAMPLE_DATA;
  
  // Mock vendor financial data
  const totalRevenue = purchaseOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const paidAmount = purchaseOrders.filter(order => order.paymentStatus === 'Paid').reduce((sum, order) => sum + order.totalAmount, 0);
  const pendingAmount = purchaseOrders.filter(order => order.paymentStatus === 'Pending').reduce((sum, order) => sum + order.totalAmount, 0);
  const thisMonthRevenue = totalRevenue * 0.3; // Mock calculation

  return (
    <div className="vendor-financials">
      <h3 className="text-2xl font-semibold mb-6">Financial Dashboard</h3>
      
      {/* Financial Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Revenue</h4>
          <p className="text-3xl font-bold text-green-600">₹{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Paid Amount</h4>
          <p className="text-3xl font-bold text-blue-600">₹{paidAmount.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Pending Amount</h4>
          <p className="text-3xl font-bold text-orange-600">₹{pendingAmount.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">This Month</h4>
          <p className="text-3xl font-bold text-purple-600">₹{thisMonthRevenue.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment History */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Recent Payments</h4>
          <div className="space-y-4">
            {purchaseOrders.filter(order => order.paymentStatus === 'Paid').slice(0, 5).map(order => (
              <div key={order.id} className="border-b border-gray-200 pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-gray-500">Project: {order.projectId}</div>
                    <div className="text-sm text-gray-500">Date: {new Date(order.orderDate).toLocaleDateString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">₹{order.totalAmount.toLocaleString()}</div>
                    <span className="text-xs bg-green-200 text-green-600 px-2 py-1 rounded-full">
                      Paid
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Payments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Pending Payments</h4>
          <div className="space-y-4">
            {purchaseOrders.filter(order => order.paymentStatus === 'Pending').map(order => (
              <div key={order.id} className="border-b border-gray-200 pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-gray-500">Project: {order.projectId}</div>
                    <div className="text-sm text-gray-500">Due: {new Date(order.expectedDelivery).toLocaleDateString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-orange-600">₹{order.totalAmount.toLocaleString()}</div>
                    <span className="text-xs bg-orange-200 text-orange-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Actions */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-600 mb-4">Payment Actions</h4>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Request Payment
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Download Invoice
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default VendorFinancials;