import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function BusinessAnalytics() {
  const [timeRange, setTimeRange] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  
  const designerName = 'Priya Mehta';
  const designerData = SAMPLE_DATA.designers.find(d => d.name === designerName);
  const projects = SAMPLE_DATA.projects.filter(p => p.designerName === designerName);
  const leads = SAMPLE_DATA.leads.filter(l => l.assignedTo === designerName);
  
  // Calculate business metrics
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const activeProjects = projects.filter(p => p.status === 'In Progress' || p.status === 'Design Phase').length;
  const totalRevenue = designerData ? designerData.walletBalance : 0;
  const avgProjectValue = totalProjects > 0 ? totalRevenue / totalProjects : 0;
  const completionRate = totalProjects > 0 ? (completedProjects / totalProjects) * 100 : 0;
  const clientSatisfaction = designerData ? designerData.rating : 0;
  
  // Mock monthly data for charts
  const monthlyData = [
    { month: 'Jan', revenue: 45000, projects: 2, leads: 8, satisfaction: 4.6 },
    { month: 'Feb', revenue: 52000, projects: 3, leads: 12, satisfaction: 4.7 },
    { month: 'Mar', revenue: 38000, projects: 2, leads: 6, satisfaction: 4.8 },
    { month: 'Apr', revenue: 61000, projects: 4, leads: 15, satisfaction: 4.9 },
    { month: 'May', revenue: 47000, projects: 2, leads: 9, satisfaction: 4.8 },
    { month: 'Jun', revenue: 55000, projects: 3, leads: 11, satisfaction: 4.7 }
  ];

  // Performance insights
  const insights = [
    { type: 'positive', title: 'Revenue Growth', description: 'Your monthly revenue increased by 18% compared to last month', icon: 'fas fa-arrow-up' },
    { type: 'warning', title: 'Lead Conversion', description: 'Lead conversion rate is 65%. Consider improving initial client communication', icon: 'fas fa-exclamation-triangle' },
    { type: 'positive', title: 'Client Satisfaction', description: 'Excellent client satisfaction rating of 4.8/5. Keep up the great work!', icon: 'fas fa-star' },
    { type: 'info', title: 'Project Timeline', description: 'Average project completion time is 45 days. Industry average is 52 days', icon: 'fas fa-clock' }
  ];

  const getInsightColor = (type) => {
    switch (type) {
      case 'positive': return 'bg-green-50 border-green-200 text-green-800';
      case 'warning': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info': return 'bg-blue-50 border-blue-200 text-blue-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getInsightIconColor = (type) => {
    switch (type) {
      case 'positive': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="business-analytics">
      <h2 className="text-3xl font-bold mb-6">Business Analytics & Performance</h2>
      
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Total Revenue</h3>
              <p className="text-3xl font-bold">Rs.{totalRevenue.toLocaleString()}</p>
              <p className="text-sm opacity-80">+18% from last month</p>
            </div>
            <div className="text-4xl opacity-80">
              <i className="fas fa-rupee-sign"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Active Projects</h3>
              <p className="text-3xl font-bold">{activeProjects}</p>
              <p className="text-sm opacity-80">{totalProjects} total projects</p>
            </div>
            <div className="text-4xl opacity-80">
              <i className="fas fa-briefcase"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Completion Rate</h3>
              <p className="text-3xl font-bold">{completionRate.toFixed(1)}%</p>
              <p className="text-sm opacity-80">{completedProjects} completed</p>
            </div>
            <div className="text-4xl opacity-80">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold opacity-90">Client Rating</h3>
              <p className="text-3xl font-bold">{clientSatisfaction}</p>
              <p className="text-sm opacity-80">★★★★★</p>
            </div>
            <div className="text-4xl opacity-80">
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Controls */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Metric</label>
            <select 
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="revenue">Revenue</option>
              <option value="projects">Projects</option>
              <option value="leads">Leads</option>
              <option value="satisfaction">Satisfaction</option>
            </select>
          </div>
          <div className="flex space-x-2 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              <i className="fas fa-download mr-2"></i>
              Export Report
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              <i className="fas fa-share mr-2"></i>
              Share Analytics
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Performance Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-chart-line text-4xl text-gray-400 mb-2"></i>
              <p className="text-gray-500">Interactive Chart Placeholder</p>
              <p className="text-sm text-gray-400">Monthly {selectedMetric} trends would be displayed here</p>
            </div>
          </div>
          
          {/* Simple Data Display */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            {monthlyData.slice(-3).map((data, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded">
                <div className="font-medium text-gray-800">{data.month}</div>
                <div className="text-sm text-gray-600">
                  {selectedMetric === 'revenue' && `Rs.${data.revenue.toLocaleString()}`}
                  {selectedMetric === 'projects' && `${data.projects} projects`}
                  {selectedMetric === 'leads' && `${data.leads} leads`}
                  {selectedMetric === 'satisfaction' && `${data.satisfaction}★`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Insights */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Business Insights</h3>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className={`border rounded-lg p-4 ${getInsightColor(insight.type)}`}>
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-3 ${getInsightIconColor(insight.type)}`}>
                    <i className={insight.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{insight.title}</h4>
                    <p className="text-sm">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Project Analytics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Project Value</span>
              <span className="font-medium">Rs.{avgProjectValue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Project Success Rate</span>
              <span className="font-medium text-green-600">{completionRate.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Timeline</span>
              <span className="font-medium">45 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Repeat Clients</span>
              <span className="font-medium">25%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Lead Analytics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Leads</span>
              <span className="font-medium">{leads.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Conversion Rate</span>
              <span className="font-medium text-blue-600">65%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Response Time</span>
              <span className="font-medium">2.5 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Lead Source (Top)</span>
              <span className="font-medium">Website</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Financial Analytics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly Growth</span>
              <span className="font-medium text-green-600">+18%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Profit Margin</span>
              <span className="font-medium">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Outstanding Payments</span>
              <span className="font-medium text-yellow-600">Rs.20,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Platform Commission</span>
              <span className="font-medium">15%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Goals and Targets */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Goals & Targets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="mb-2">
              <div className="text-2xl font-bold text-blue-600">Rs.1.2L</div>
              <div className="text-sm text-gray-600">Monthly Revenue Target</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">75% achieved</div>
          </div>
          
          <div className="text-center">
            <div className="mb-2">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">Projects This Month</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">60% achieved</div>
          </div>
          
          <div className="text-center">
            <div className="mb-2">
              <div className="text-2xl font-bold text-purple-600">4.9</div>
              <div className="text-sm text-gray-600">Target Rating</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '98%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">98% achieved</div>
          </div>
          
          <div className="text-center">
            <div className="mb-2">
              <div className="text-2xl font-bold text-orange-600">25</div>
              <div className="text-sm text-gray-600">New Leads Target</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">80% achieved</div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Recommended Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <h4 className="font-medium mb-2">Growth Opportunities:</h4>
            <ul className="space-y-1">
              <li>• Focus on high-value commercial projects</li>
              <li>• Improve lead response time to under 2 hours</li>
              <li>• Develop referral program for existing clients</li>
              <li>• Expand portfolio with luxury segment projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Operational Improvements:</h4>
            <ul className="space-y-1">
              <li>• Streamline design approval process</li>
              <li>• Implement project timeline optimization</li>
              <li>• Enhance client communication frequency</li>
              <li>• Develop standardized design templates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessAnalytics;