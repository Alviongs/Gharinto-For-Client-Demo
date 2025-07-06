
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function OrderManagement() {
  const orders = SAMPLE_DATA.procurement;

  return (
    <div className="order-management">
      <h2 className="text-3xl font-bold mb-6">Order Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-left">Item</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Vendor</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {orders.map(order => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{order.id}</td>
                <td className="py-3 px-6 text-left">{order.project.name}</td>
                <td className="py-3 px-6 text-left">{order.item}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-200 text-green-800' :
                    order.status === 'Shipped' ? 'bg-blue-200 text-blue-800' :
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">{order.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement;
