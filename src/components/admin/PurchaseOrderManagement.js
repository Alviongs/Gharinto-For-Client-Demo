import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function PurchaseOrderManagement() {
  const { purchaseOrders } = SAMPLE_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-200 text-green-600';
      case 'Shipped': return 'bg-blue-200 text-blue-600';
      case 'In Transit': return 'bg-yellow-200 text-yellow-600';
      case 'Processing': return 'bg-orange-200 text-orange-600';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-200 text-green-600';
      case 'Pending': return 'bg-red-200 text-red-600';
      case 'Advance Paid': return 'bg-yellow-200 text-yellow-600';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  return (
    <div className="purchase-order-management">
      {showPurchaseOrderForm && <PurchaseOrderForm onClose={() => setShowPurchaseOrderForm(false)} />}
      <h3 className="text-2xl font-semibold mb-6">Purchase Order Management</h3>
      
      {/* PO Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Orders</h4>
          <p className="text-3xl font-bold text-gray-800">{purchaseOrders.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Value</h4>
          <p className="text-3xl font-bold text-blue-600">₹{purchaseOrders.reduce((sum, po) => sum + po.totalAmount, 0).toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Pending Delivery</h4>
          <p className="text-3xl font-bold text-orange-600">{purchaseOrders.filter(po => po.status !== 'Delivered').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Payment Pending</h4>
          <p className="text-3xl font-bold text-red-600">{purchaseOrders.filter(po => po.paymentStatus === 'Pending').length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Create PO
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Bulk Export
            </button>
          </div>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Search PO..." 
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Status</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">PO Number</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-left">Vendor</th>
              <th className="py-3 px-6 text-center">Order Date</th>
              <th className="py-3 px-6 text-center">Expected Delivery</th>
              <th className="py-3 px-6 text-right">Amount</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Payment</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {purchaseOrders.map(po => (
              <tr key={po.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <div className="font-medium">{po.id}</div>
                </td>
                <td className="py-3 px-6 text-left">{po.projectId}</td>
                <td className="py-3 px-6 text-left">
                  <div>
                    <div className="font-medium">{po.vendorName}</div>
                    <div className="text-gray-500 text-xs">{po.deliveryAddress}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">{new Date(po.orderDate).toLocaleDateString()}</td>
                <td className="py-3 px-6 text-center">{new Date(po.expectedDelivery).toLocaleDateString()}</td>
                <td className="py-3 px-6 text-right font-medium">₹{po.totalAmount.toLocaleString()}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(po.status)}`}>
                    {po.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getPaymentStatusColor(po.paymentStatus)}`}>
                    {po.paymentStatus}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="View Details">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" title="Track">
                      <i className="fas fa-truck"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-orange-500 hover:scale-110" title="Download">
                      <i className="fas fa-download"></i>
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

export default PurchaseOrderManagement;