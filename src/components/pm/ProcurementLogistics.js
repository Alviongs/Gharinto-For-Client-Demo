import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function ProcurementLogistics() {
  // Get purchase orders for projects managed by Rajesh Kumar
  const pmProjects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');
  const projectIds = pmProjects.map(p => p.id);
  const procurementItems = SAMPLE_DATA.purchaseOrders.filter(po => projectIds.includes(po.projectId));

  return (
    <div className="procurement-logistics">
      <h2 className="text-3xl font-bold mb-6">Procurement & Logistics</h2>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Orders</h4>
          <p className="text-3xl font-bold text-blue-600">{procurementItems.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Value</h4>
          <p className="text-3xl font-bold text-green-600">Rs.{procurementItems.reduce((sum, item) => sum + item.totalAmount, 0).toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Delivered</h4>
          <p className="text-3xl font-bold text-green-600">{procurementItems.filter(item => item.status === 'Delivered').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Pending</h4>
          <p className="text-3xl font-bold text-orange-600">{procurementItems.filter(item => item.status !== 'Delivered').length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">PO Number</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-left">Items</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Vendor</th>
              <th className="py-3 px-6 text-center">Amount</th>
              <th className="py-3 px-6 text-center">Delivery Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {procurementItems.map(item => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap font-medium">{item.id}</td>
                <td className="py-3 px-6 text-left">{item.projectId}</td>
                <td className="py-3 px-6 text-left">
                  <div className="text-sm">
                    {item.items.slice(0, 2).map((product, idx) => (
                      <div key={idx}>{product.name} (x{product.quantity})</div>
                    ))}
                    {item.items.length > 2 && <div className="text-gray-500">+{item.items.length - 2} more</div>}
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === 'Delivered' ? 'bg-green-200 text-green-800' :
                    item.status === 'Shipped' ? 'bg-blue-200 text-blue-800' :
                    item.status === 'In Transit' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-orange-200 text-orange-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">{item.vendorName}</td>
                <td className="py-3 px-6 text-center font-medium">Rs.{item.totalAmount.toLocaleString()}</td>
                <td className="py-3 px-6 text-center">{new Date(item.expectedDelivery).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProcurementLogistics;