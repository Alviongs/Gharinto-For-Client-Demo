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
  
  // Advanced analytics
  const deliveredOrders = vendorOrders.filter(order => order.status === 'Delivered').length;
  const onTimeDeliveryRate = Math.round((deliveredOrders / totalOrders) * 100);
  const avgOrderValue = Math.round(totalRevenue / totalOrders);
  const monthlyGrowth = 15.2; // Mock growth percentage
  
  // Product performance data
  const topProducts = vendorProducts.map(product => ({
    ...product,
    sales: Math.floor(Math.random() * 50) + 10,
    revenue: Math.floor(Math.random() * 100000) + 50000
  })).sort((a, b) => b.revenue - a.revenue).slice(0, 3);
  
  // Monthly revenue trend (mock data)
  const monthlyRevenue = [
    { month: 'Jan', revenue: 280000 },
    { month: 'Feb', revenue: 320000 },
    { month: 'Mar', revenue: 240000 },
    { month: 'Apr', revenue: 380000 },
    { month: 'May', revenue: 350000 },
    { month: 'Jun', revenue: 420000 }
  ];

  return (
    <div className="vendor-dashboard">
      <h3 className="text-2xl font-semibold mb-6">Vendor Dashboard</h3>
      
      {/* Enhanced Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold opacity-90">Total Orders</h4>
              <p className="text-3xl font-bold">{totalOrders}</p>
              <p className="text-sm opacity-75">{deliveredOrders} delivered</p>
            </div>
            <div className="text-4xl opacity-75">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold opacity-90">Total Revenue</h4>
              <p className="text-3xl font-bold">₹{(totalRevenue/100000).toFixed(1)}L</p>
              <p className="text-sm opacity-75">+{monthlyGrowth}% this month</p>
            </div>
            <div className="text-4xl opacity-75">
              <i className="fas fa-rupee-sign"></i>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold opacity-90">Pending Orders</h4>
              <p className="text-3xl font-bold">{pendingOrders}</p>
              <p className="text-sm opacity-75">{onTimeDeliveryRate}% on-time rate</p>
            </div>
            <div className="text-4xl opacity-75">
              <i className="fas fa-clock"></i>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold opacity-90">Active Products</h4>
              <p className="text-3xl font-bold">{totalProducts}</p>
              <p className="text-sm opacity-75">Avg: ₹{(avgOrderValue/1000).toFixed(0)}K per order</p>
            </div>
            <div className="text-4xl opacity-75">
              <i className="fas fa-boxes"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Trend Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Monthly Revenue Trend</h4>
          <div className="h-64 flex items-end justify-between space-x-2">
            {monthlyRevenue.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center flex-1">
                <div className="w-full bg-gray-200 rounded-t relative" style={{height: '200px'}}>
                  <div 
                    className="bg-gradient-to-t from-green-500 to-green-400 rounded-t absolute bottom-0 w-full transition-all duration-500"
                    style={{height: `${(data.revenue / 450000) * 100}%`}}
                  ></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-600">
                    ₹{(data.revenue/1000).toFixed(0)}K
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-600 mt-2">{data.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Performance */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Top Performing Products</h4>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">₹{(product.revenue/1000).toFixed(0)}K</div>
                  <div className="text-sm text-gray-500">{product.sales} units sold</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h5 className="font-semibold text-gray-800 mb-2">Delivery Performance</h5>
          <p className="text-2xl font-bold text-green-600">{onTimeDeliveryRate}%</p>
          <p className="text-sm text-gray-600">On-time delivery rate</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h5 className="font-semibold text-gray-800 mb-2">Average Order Value</h5>
          <p className="text-2xl font-bold text-blue-600">₹{(avgOrderValue/1000).toFixed(0)}K</p>
          <p className="text-sm text-gray-600">Per order average</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h5 className="font-semibold text-gray-800 mb-2">Monthly Growth</h5>
          <p className="text-2xl font-bold text-purple-600">+{monthlyGrowth}%</p>
          <p className="text-sm text-gray-600">Revenue growth rate</p>
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