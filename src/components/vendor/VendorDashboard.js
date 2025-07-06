import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function VendorDashboard() {
  const { purchaseOrders, materials } = SAMPLE_DATA;
  
  // Mock vendor-specific data (in real app, this would be filtered by vendor ID)
  const vendorOrders = purchaseOrders.slice(0, 3);
  const vendorProducts = materials.slice(0, 5);
  
  const totalOrders = vendorOrders.length;
  const totalRevenue = vendorOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const pendingOrders = vendorOrders.filter(order => order.status !== 'Delivered').length;
  const totalProducts = vendorProducts.length;

  return (
    <div className="vendor-dashboard">
      <h3 className="text-2xl font-semibold mb-6">Vendor Dashboard</h3>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Orders</h4>
          <p className="text-3xl font-bold text-blue-600">{totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Revenue</h4>
          <p className="text-3xl font-bold text-green-600">₹{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Pending Orders</h4>
          <p className="text-3xl font-bold text-orange-600">{pendingOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Products</h4>
          <p className="text-3xl font-bold text-purple-600">{totalProducts}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Recent Orders</h4>
          <div className="space-y-4">
            {vendorOrders.map(order => (
              <div key={order.id} className="border-b border-gray-200 pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-gray-500">Project: {order.projectId}</div>
                    <div className="text-sm text-gray-500">Due: {new Date(order.expectedDelivery).toLocaleDateString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">₹{order.totalAmount.toLocaleString()}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-200 text-green-600' :
                      order.status === 'Shipped' ? 'bg-blue-200 text-blue-600' :
                      'bg-yellow-200 text-yellow-600'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Top Products</h4>
          <div className="space-y-4">
            {vendorProducts.map(product => (
              <div key={product.id} className="border-b border-gray-200 pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">₹{product.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Stock: {product.stock}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;