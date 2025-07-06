import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DigitalWallet() {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  const designerName = 'Priya Mehta';
  const designerData = SAMPLE_DATA.designers.find(d => d.name === designerName);
  const walletBalance = designerData ? designerData.walletBalance : 0;
  
  // Mock transaction data
  const transactions = [
    { id: 'TXN001', type: 'credit', amount: 25000, description: 'Milestone payment - PR001 Design Approval', date: '2024-02-28', status: 'completed', projectId: 'PR001' },
    { id: 'TXN002', type: 'debit', amount: 15, description: 'Lead purchase - Kapoor Villa', date: '2024-02-27', status: 'completed', leadId: 'LD003' },
    { id: 'TXN003', type: 'credit', amount: 30000, description: 'Milestone payment - PR003 Project Completion', date: '2024-02-25', status: 'completed', projectId: 'PR003' },
    { id: 'TXN004', type: 'debit', amount: 10, description: 'Lead purchase - Singh Residence', date: '2024-02-24', status: 'completed', leadId: 'LD002' },
    { id: 'TXN005', type: 'credit', amount: 15000, description: 'BOQ approval bonus - PR002', date: '2024-02-22', status: 'completed', projectId: 'PR002' },
    { id: 'TXN006', type: 'debit', amount: 500, description: 'Platform commission - PR001', date: '2024-02-20', status: 'completed', projectId: 'PR001' },
    { id: 'TXN007', type: 'pending', amount: 20000, description: 'Milestone payment - PR004 Material Procurement', date: '2024-03-01', status: 'pending', projectId: 'PR004' }
  ];

  const creditTransactions = transactions.filter(t => t.type === 'credit');
  const debitTransactions = transactions.filter(t => t.type === 'debit');
  const pendingTransactions = transactions.filter(t => t.status === 'pending');
  
  const totalEarnings = creditTransactions.reduce((sum, t) => sum + t.amount, 0);
  const totalSpent = debitTransactions.reduce((sum, t) => sum + t.amount, 0);
  const pendingAmount = pendingTransactions.reduce((sum, t) => sum + t.amount, 0);
  
  const monthlyEarnings = Math.round(totalEarnings * 0.4); // Mock monthly calculation

  const handleWithdraw = () => {
    alert('Withdrawal request submitted! Funds will be transferred to your bank account within 2-3 business days.');
  };

  const handlePurchaseCredits = () => {
    alert('Redirecting to credit purchase page...');
  };

  return (
    <div className="digital-wallet">
      <h2 className="text-3xl font-bold mb-6">Digital Wallet & Earnings</h2>
      
      {/* Wallet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Wallet Balance</h3>
              <p className="text-3xl font-bold">Rs.{walletBalance.toLocaleString()}</p>
            </div>
            <div className="text-4xl opacity-80">
              <i className="fas fa-wallet"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <i className="fas fa-arrow-up text-blue-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Total Earnings</h3>
              <p className="text-2xl font-bold text-blue-600">Rs.{totalEarnings.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <i className="fas fa-clock text-yellow-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Pending</h3>
              <p className="text-2xl font-bold text-yellow-600">Rs.{pendingAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <i className="fas fa-calendar text-purple-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">This Month</h3>
              <p className="text-2xl font-bold text-purple-600">Rs.{monthlyEarnings.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button 
            onClick={handleWithdraw}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center"
          >
            <i className="fas fa-university mr-2"></i>
            Withdraw Funds
          </button>
          <button 
            onClick={handlePurchaseCredits}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center"
          >
            <i className="fas fa-plus mr-2"></i>
            Buy Credits
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-chart-line mr-2"></i>
            Earnings Report
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-cog mr-2"></i>
            Payment Settings
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview', icon: 'fas fa-chart-pie' },
              { id: 'transactions', label: 'Transactions', icon: 'fas fa-list' },
              { id: 'earnings', label: 'Earnings', icon: 'fas fa-money-bill-wave' },
              { id: 'credits', label: 'Credits', icon: 'fas fa-coins' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Earnings Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                      <span className="text-green-800">Project Payments</span>
                      <span className="font-bold text-green-600">Rs.{(totalEarnings * 0.8).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                      <span className="text-blue-800">Bonus Payments</span>
                      <span className="font-bold text-blue-600">Rs.{(totalEarnings * 0.15).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                      <span className="text-purple-800">Referral Earnings</span>
                      <span className="font-bold text-purple-600">Rs.{(totalEarnings * 0.05).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Recent Activity</h4>
                  <div className="space-y-3">
                    {transactions.slice(0, 5).map(transaction => (
                      <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-medium text-sm">{transaction.description}</p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                        <div className={`font-bold ${
                          transaction.type === 'credit' ? 'text-green-600' : 
                          transaction.type === 'debit' ? 'text-red-600' : 'text-yellow-600'
                        }`}>
                          {transaction.type === 'credit' ? '+' : transaction.type === 'debit' ? '-' : ''}
                          Rs.{transaction.amount.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'transactions' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Transaction History</h4>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md">
                    <option value="all">All Transactions</option>
                    <option value="credit">Credits Only</option>
                    <option value="debit">Debits Only</option>
                  </select>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Export
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Date</th>
                      <th className="py-3 px-6 text-left">Description</th>
                      <th className="py-3 px-6 text-center">Type</th>
                      <th className="py-3 px-6 text-right">Amount</th>
                      <th className="py-3 px-6 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {transactions.map(transaction => (
                      <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">{transaction.date}</td>
                        <td className="py-3 px-6 text-left">{transaction.description}</td>
                        <td className="py-3 px-6 text-center">
                          <span className={`px-2 py-1 text-xs rounded ${
                            transaction.type === 'credit' ? 'bg-green-200 text-green-800' :
                            transaction.type === 'debit' ? 'bg-red-200 text-red-800' :
                            'bg-yellow-200 text-yellow-800'
                          }`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td className={`py-3 px-6 text-right font-medium ${
                          transaction.type === 'credit' ? 'text-green-600' : 
                          transaction.type === 'debit' ? 'text-red-600' : 'text-yellow-600'
                        }`}>
                          {transaction.type === 'credit' ? '+' : transaction.type === 'debit' ? '-' : ''}
                          Rs.{transaction.amount.toLocaleString()}
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className={`px-2 py-1 text-xs rounded ${
                            transaction.status === 'completed' ? 'bg-green-200 text-green-800' :
                            'bg-yellow-200 text-yellow-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedTab === 'earnings' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Total Lifetime Earnings</h4>
                  <p className="text-3xl font-bold">Rs.{totalEarnings.toLocaleString()}</p>
                  <p className="text-sm opacity-90">Across {designerData ? designerData.completedProjects : 0} projects</p>
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Average per Project</h4>
                  <p className="text-3xl font-bold">
                    Rs.{designerData && designerData.completedProjects > 0 ? 
                      Math.round(totalEarnings / designerData.completedProjects).toLocaleString() : 
                      '0'}
                  </p>
                  <p className="text-sm opacity-90">Based on completed work</p>
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">This Month</h4>
                  <p className="text-3xl font-bold">Rs.{monthlyEarnings.toLocaleString()}</p>
                  <p className="text-sm opacity-90">+15% from last month</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Earnings Tips</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-2">Maximize Your Earnings:</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Complete projects on time for bonus payments</li>
                      <li>• Maintain high client satisfaction ratings</li>
                      <li>• Accept high-value leads when available</li>
                      <li>• Refer other designers to earn commissions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Payment Schedule:</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Design approval: 30% of project value</li>
                      <li>• Material procurement: 40% of project value</li>
                      <li>• Project completion: 30% of project value</li>
                      <li>• Bonus for early completion: 5-10%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'credits' && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Credit Balance</h4>
                <p className="text-3xl font-bold text-blue-600">150 Credits</p>
                <p className="text-sm text-blue-600">Enough for 10-15 lead purchases</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium mb-2">Basic Pack</h5>
                  <p className="text-2xl font-bold text-blue-600 mb-2">50 Credits</p>
                  <p className="text-sm text-gray-600 mb-4">Rs.500</p>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                    Purchase
                  </button>
                </div>
                <div className="border border-blue-500 rounded-lg p-4 bg-blue-50">
                  <div className="text-center mb-2">
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">POPULAR</span>
                  </div>
                  <h5 className="font-medium mb-2">Standard Pack</h5>
                  <p className="text-2xl font-bold text-blue-600 mb-2">150 Credits</p>
                  <p className="text-sm text-gray-600 mb-4">Rs.1,350 <span className="line-through">Rs.1,500</span></p>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                    Purchase
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium mb-2">Premium Pack</h5>
                  <p className="text-2xl font-bold text-blue-600 mb-2">300 Credits</p>
                  <p className="text-sm text-gray-600 mb-4">Rs.2,400 <span className="line-through">Rs.3,000</span></p>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                    Purchase
                  </button>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-medium text-yellow-800 mb-2">Credit Usage:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• High Priority Leads: 15 credits</li>
                  <li>• Medium Priority Leads: 10 credits</li>
                  <li>• Low Priority Leads: 5 credits</li>
                  <li>• Refund if client doesn't respond within 48 hours</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DigitalWallet;