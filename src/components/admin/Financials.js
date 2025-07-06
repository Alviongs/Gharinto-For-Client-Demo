import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

function Financials() {
  const { projects, transactions } = SAMPLE_DATA;
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedProject, setSelectedProject] = useState('all');

  // Financial calculations
  const totalBudget = projects.reduce((acc, p) => acc + p.budget, 0);
  const totalSpent = projects.reduce((acc, p) => acc + p.spent, 0);
  const totalRevenue = transactions.filter(t => t.type === 'Payment' && t.status === 'Completed').reduce((sum, t) => sum + t.amount, 0);
  const totalProfit = totalRevenue - totalSpent;
  const profitMargin = totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100).toFixed(1) : 0;

  // Monthly revenue data
  const monthlyRevenue = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue',
      data: [450000, 520000, 680000, 590000, 720000, 650000],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      fill: true
    }]
  };

  // Project budget vs spent
  const budgetData = {
    labels: projects.map(p => p.id),
    datasets: [
      {
        label: 'Budget',
        data: projects.map(p => p.budget),
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1
      },
      {
        label: 'Spent',
        data: projects.map(p => p.spent),
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1
      }
    ]
  };

  // Payment status distribution
  const paymentStatusData = {
    labels: ['Completed', 'Pending', 'Processed'],
    datasets: [{
      data: [
        transactions.filter(t => t.status === 'Completed').length,
        transactions.filter(t => t.status === 'Pending').length,
        transactions.filter(t => t.status === 'Processed').length
      ],
      backgroundColor: ['#10B981', '#F59E0B', '#3B82F6'],
      borderWidth: 2
    }]
  };

  return (
    <div className="financials">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold">Financial Management & Analytics</h3>
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Generate Report
          </button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Revenue</h4>
              <p className="text-3xl font-bold text-blue-600">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-green-600 mt-1">↗ +12.5% from last month</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <i className="fas fa-chart-line text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Profit</h4>
              <p className="text-3xl font-bold text-green-600">₹{totalProfit.toLocaleString()}</p>
              <p className="text-sm text-green-600 mt-1">Margin: {profitMargin}%</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <i className="fas fa-dollar-sign text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Expenses</h4>
              <p className="text-3xl font-bold text-red-600">₹{totalSpent.toLocaleString()}</p>
              <p className="text-sm text-red-600 mt-1">↗ +8.2% from last month</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <i className="fas fa-credit-card text-red-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Pending Payments</h4>
              <p className="text-3xl font-bold text-purple-600">₹{transactions.filter(t => t.status === 'Pending').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}</p>
              <p className="text-sm text-purple-600 mt-1">{transactions.filter(t => t.status === 'Pending').length} transactions</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <i className="fas fa-clock text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Monthly Revenue Trend</h4>
          <Line data={monthlyRevenue} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Payment Status Distribution</h4>
          <Doughnut data={paymentStatusData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Project Budget vs Spent</h4>
          <Bar data={budgetData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Financial Alerts</h4>
          <div className="space-y-4">
            {projects.filter(p => (p.spent / p.budget) > 0.9).map(project => (
              <div key={project.id} className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                  <div>
                    <p className="font-medium text-red-800">{project.id} - Budget Alert</p>
                    <p className="text-sm text-red-600">
                      {((project.spent / project.budget) * 100).toFixed(1)}% of budget utilized
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-center">
                <i className="fas fa-info-circle text-yellow-500 mr-2"></i>
                <div>
                  <p className="font-medium text-yellow-800">Pending Invoices</p>
                  <p className="text-sm text-yellow-600">
                    {transactions.filter(t => t.status === 'Pending').length} invoices pending payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-gray-600 mb-4">Recent Financial Transactions</h4>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Transaction ID</th>
                <th className="py-3 px-6 text-left">Project</th>
                <th className="py-3 px-6 text-center">Type</th>
                <th className="py-3 px-6 text-right">Amount</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {transactions.slice(0, 10).map(transaction => (
                <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left font-medium">{transaction.id}</td>
                  <td className="py-3 px-6 text-left">{transaction.projectId}</td>
                  <td className="py-3 px-6 text-center">
                    <span className={`py-1 px-3 rounded-full text-xs ${
                      transaction.type === 'Payment' ? 'bg-green-200 text-green-600' : 'bg-orange-200 text-orange-600'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-right font-medium">₹{transaction.amount.toLocaleString()}</td>
                  <td className="py-3 px-6 text-center">
                    <span className={`py-1 px-3 rounded-full text-xs ${
                      transaction.status === 'Completed' ? 'bg-green-200 text-green-600' :
                      transaction.status === 'Pending' ? 'bg-yellow-200 text-yellow-600' :
                      'bg-blue-200 text-blue-600'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">{new Date(transaction.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Financials;