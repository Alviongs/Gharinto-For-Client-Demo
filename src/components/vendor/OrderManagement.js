import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function OrderManagement() {
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

  return (
    <div className="order-management">
      <h3 className="text-2xl font-semibold mb-6">Order Management</h3>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Update Status
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Generate Invoice
            </button>
          </div>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Search orders..." 
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
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-left">Items</th>
              <th className="py-3 px-6 text-center">Order Date</th>
              <th className="py-3 px-6 text-center">Expected Delivery</th>
              <th className="py-3 px-6 text-right">Amount</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {purchaseOrders.slice(0, 3).map(order => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left font-medium">{order.id}</td>
                <td className="py-3 px-6 text-left">{order.projectId}</td>
                <td className="py-3 px-6 text-left">
                  <div className="text-sm">
                    {order.items.map((item, idx) => (
                      <div key={idx}>{item.name} (x{item.quantity})</div>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-6 text-center">{new Date(order.orderDate).toLocaleDateString()}</td>
                <td className="py-3 px-6 text-center">{new Date(order.expectedDelivery).toLocaleDateString()}</td>
                <td className="py-3 px-6 text-right font-medium">₹{order.totalAmount.toLocaleString()}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="View Details">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" title="Update Status">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="Track Shipment">
                      <i className="fas fa-truck"></i>
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

export default OrderManagement;