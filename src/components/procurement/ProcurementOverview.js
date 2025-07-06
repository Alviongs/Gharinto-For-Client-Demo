import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

// Simple Modal Components
const PurchaseOrderForm = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
      <h3 className="text-xl font-bold mb-4">Create Purchase Order</h3>
      <p className="text-gray-600 mb-4">Purchase order creation form will be implemented here.</p>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button 
          onClick={() => { alert('Form submission functionality coming soon!'); onClose(); }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create
        </button>
      </div>
    </div>
  </div>
);

const VendorForm = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
      <h3 className="text-xl font-bold mb-4">Add New Vendor</h3>
      <p className="text-gray-600 mb-4">Vendor registration form will be implemented here.</p>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button 
          onClick={() => { alert('Vendor registration functionality coming soon!'); onClose(); }}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Add Vendor
        </button>
      </div>
    </div>
  </div>
);

function ProcurementOverview() {
  const { purchaseOrders, materials, vendors } = SAMPLE_DATA;
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [showPurchaseOrderForm, setShowPurchaseOrderForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);

  // Calculate procurement metrics
  const totalOrders = purchaseOrders.length;
  const pendingOrders = purchaseOrders.filter(o => o.status === 'Pending').length;
  const completedOrders = purchaseOrders.filter(o => o.status === 'Delivered').length;
  const totalValue = purchaseOrders.reduce((sum, o) => sum + o.totalAmount, 0);
  const pendingValue = purchaseOrders.filter(o => o.status === 'Pending').reduce((sum, o) => sum + o.totalAmount, 0);

  // Inventory metrics
  const totalMaterials = materials.length;
  const lowStockItems = materials.filter(m => m.currentStock < m.minStock).length;
  const outOfStockItems = materials.filter(m => m.currentStock === 0).length;
  const totalInventoryValue = materials.reduce((sum, m) => sum + (m.currentStock * m.unitPrice), 0);

  // Vendor metrics
  const activeVendors = vendors.filter(v => v.status === 'Active').length;
  const avgVendorRating = vendors.reduce((sum, v) => sum + v.rating, 0) / vendors.length;

  // Chart data for order status
  const orderStatusData = {
    labels: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    datasets: [{
      data: [
        purchaseOrders.filter(o => o.status === 'Pending').length,
        purchaseOrders.filter(o => o.status === 'Processing').length,
        purchaseOrders.filter(o => o.status === 'Shipped').length,
        purchaseOrders.filter(o => o.status === 'Delivered').length,
        purchaseOrders.filter(o => o.status === 'Cancelled').length
      ],
      backgroundColor: ['#F59E0B', '#3B82F6', '#8B5CF6', '#10B981', '#EF4444'],
      borderWidth: 2
    }]
  };

  // Monthly procurement value trend
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Procurement Value',
      data: [450000, 520000, 680000, 590000, 720000, 650000],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      fill: true
    }]
  };

  // Top vendors by order value
  const vendorOrderData = {
    labels: vendors.slice(0, 5).map(v => v.name),
    datasets: [{
      label: 'Order Value',
      data: vendors.slice(0, 5).map(v => 
        purchaseOrders.filter(po => po.vendorId === v.id).reduce((sum, po) => sum + po.totalAmount, 0)
      ),
      backgroundColor: 'rgba(34, 197, 94, 0.6)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 1
    }]
  };

  return (
    <div className="procurement-overview">
      {showPurchaseOrderForm && <PurchaseOrderForm onClose={() => setShowPurchaseOrderForm(false)} />}
      {showVendorForm && <VendorForm onClose={() => setShowVendorForm(false)} />}
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Procurement Command Center</h2>
        <div className="flex space-x-4">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowPurchaseOrderForm(true)}
          >
            <i className="fas fa-plus mr-2"></i>New Purchase Order
          </button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Orders</h4>
              <p className="text-3xl font-bold text-blue-600">{totalOrders}</p>
              <p className="text-sm text-blue-600">{completedOrders} completed</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <i className="fas fa-file-invoice text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Pending Orders</h4>
              <p className="text-3xl font-bold text-yellow-600">{pendingOrders}</p>
              <p className="text-sm text-yellow-600">Rs.{pendingValue.toLocaleString()} value</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <i className="fas fa-clock text-yellow-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Procurement</h4>
              <p className="text-3xl font-bold text-green-600">Rs.{totalValue.toLocaleString()}</p>
              <p className="text-sm text-green-600">↗ +12.5% from last month</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <i className="fas fa-chart-line text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Low Stock Alerts</h4>
              <p className="text-3xl font-bold text-red-600">{lowStockItems}</p>
              <p className="text-sm text-red-600">{outOfStockItems} out of stock</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Inventory Overview</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Materials</span>
              <span className="font-semibold">{totalMaterials}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Inventory Value</span>
              <span className="font-semibold">Rs.{totalInventoryValue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Low Stock Items</span>
              <span className="font-semibold text-red-600">{lowStockItems}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Vendor Performance</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Active Vendors</span>
              <span className="font-semibold">{activeVendors}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Rating</span>
              <span className="font-semibold">{avgVendorRating.toFixed(1)}/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">On-time Delivery</span>
              <span className="font-semibold text-green-600">92%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Quick Actions</h4>
          <div className="space-y-2">
            <button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm"
              onClick={() => setShowPurchaseOrderForm(true)}
            >
              <i className="fas fa-plus mr-2"></i>Create Purchase Order
            </button>
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm"
              onClick={() => alert('Update Inventory functionality coming soon!')}
            >
              <i className="fas fa-boxes mr-2"></i>Update Inventory
            </button>
            <button 
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded text-sm"
              onClick={() => setShowVendorForm(true)}
            >
              <i className="fas fa-handshake mr-2"></i>Add New Vendor
            </button>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Order Status Distribution</h4>
          <Doughnut data={orderStatusData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Monthly Procurement Trend</h4>
          <Line data={monthlyData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Top Vendors by Order Value</h4>
          <Bar data={vendorOrderData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Recent Activities</h4>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <i className="fas fa-file-invoice text-blue-600 mr-3"></i>
              <div>
                <p className="font-medium">New PO created for Classic Furniture</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <i className="fas fa-truck text-green-600 mr-3"></i>
              <div>
                <p className="font-medium">Materials delivered for PR003</p>
                <p className="text-sm text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <i className="fas fa-exclamation-triangle text-yellow-600 mr-3"></i>
              <div>
                <p className="font-medium">Low stock alert: Premium Paint</p>
                <p className="text-sm text-gray-500">6 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
              <i className="fas fa-check-circle text-purple-600 mr-3"></i>
              <div>
                <p className="font-medium">Quality check completed for PO-015</p>
                <p className="text-sm text-gray-500">8 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Alerts */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-600 mb-4">Critical Alerts & Actions Required</h4>
        <div className="space-y-4">
          {lowStockItems > 0 && (
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <div className="flex items-center">
                <i className="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                <div>
                  <p className="font-medium text-red-800">{lowStockItems} items are running low on stock</p>
                  <p className="text-sm text-red-600">Immediate reordering required to avoid project delays</p>
                </div>
                <button 
                  className="ml-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
                  onClick={() => alert('Low stock items view coming soon!')}
                >
                  View Items
                </button>
              </div>
            </div>
          )}
          
          {pendingOrders > 5 && (
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-center">
                <i className="fas fa-clock text-yellow-500 mr-3"></i>
                <div>
                  <p className="font-medium text-yellow-800">{pendingOrders} purchase orders pending approval</p>
                  <p className="text-sm text-yellow-600">Review and process pending orders to maintain timeline</p>
                </div>
                <button 
                  className="ml-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm"
                  onClick={() => alert('Review orders functionality coming soon!')}
                >
                  Review Orders
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProcurementOverview;