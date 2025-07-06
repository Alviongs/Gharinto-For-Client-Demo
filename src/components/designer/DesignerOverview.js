
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DesignerOverview() {
  // Get current designer data (Priya Mehta from sample users)
  const designerName = 'Priya Mehta';
  const designerData = SAMPLE_DATA.designers.find(d => d.name === designerName);
  const projects = SAMPLE_DATA.projects.filter(p => p.designerName === designerName);
  const leads = SAMPLE_DATA.leads.filter(l => l.assignedTo === designerName);
  const tasks = SAMPLE_DATA.tasks.filter(t => t.assignedTo && t.assignedTo.includes('Design'));
  
  // Calculate metrics
  const activeProjects = projects.filter(p => p.status === 'In Progress' || p.status === 'Design Phase').length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const totalEarnings = designerData ? designerData.walletBalance : 0;
  const monthlyEarnings = Math.round(totalEarnings * 0.3); // Mock monthly calculation
  
  // Recent activities
  const recentActivities = [
    { id: 1, type: 'project', message: 'Design approved for PR001 - Sharma Family', time: '2 hours ago', icon: 'fas fa-check-circle', color: 'text-green-500' },
    { id: 2, type: 'lead', message: 'New lead assigned: Kapoor Villa', time: '5 hours ago', icon: 'fas fa-bullhorn', color: 'text-blue-500' },
    { id: 3, type: 'payment', message: 'Payment received: Rs.25,000', time: '1 day ago', icon: 'fas fa-rupee-sign', color: 'text-green-500' },
    { id: 4, type: 'task', message: 'BOQ submitted for PR002', time: '2 days ago', icon: 'fas fa-file-invoice', color: 'text-purple-500' },
    { id: 5, type: 'portfolio', message: 'New project added to portfolio', time: '3 days ago', icon: 'fas fa-images', color: 'text-orange-500' }
  ];

  return (
    <div className="designer-overview">
      <h2 className="text-3xl font-bold mb-6">Designer Dashboard Overview</h2>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <i className="fas fa-briefcase text-blue-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Active Projects</h3>
              <p className="text-3xl font-bold text-blue-600">{activeProjects}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <i className="fas fa-bullhorn text-green-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">New Leads</h3>
              <p className="text-3xl font-bold text-green-600">{newLeads}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <i className="fas fa-wallet text-purple-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Wallet Balance</h3>
              <p className="text-3xl font-bold text-purple-600">Rs.{totalEarnings.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <i className="fas fa-star text-yellow-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Rating</h3>
              <p className="text-3xl font-bold text-yellow-600">{designerData ? designerData.rating : 'N/A'}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 mr-4">
              <i className="fas fa-trophy text-orange-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Completed</h3>
              <p className="text-3xl font-bold text-orange-600">{completedProjects}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Activity Feed */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`p-2 rounded-full bg-gray-100`}>
                  <i className={`${activity.icon} ${activity.color}`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Quick Actions & Tasks</h3>
          <div className="space-y-3 mb-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center">
              <i className="fas fa-plus mr-2"></i>
              Create New Design
            </button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center">
              <i className="fas fa-file-invoice-dollar mr-2"></i>
              Generate BOQ
            </button>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg flex items-center">
              <i className="fas fa-eye mr-2"></i>
              Browse Leads
            </button>
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">Pending Tasks</h4>
            <div className="space-y-2">
              {tasks.slice(0, 3).map(task => (
                <div key={task.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                  <span className="text-sm">{task.title}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    task.priority === 'High' ? 'bg-red-200 text-red-800' :
                    task.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Status Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Current Projects Status</h3>
          <div className="space-y-4">
            {projects.slice(0, 4).map(project => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{project.id}</h4>
                    <p className="text-sm text-gray-500">{project.customerName}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded ${
                    project.status === 'Completed' ? 'bg-green-200 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Next: {project.nextMilestone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Earnings Summary</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800">This Month</h4>
              <p className="text-2xl font-bold text-green-600">Rs.{monthlyEarnings.toLocaleString()}</p>
              <p className="text-sm text-green-600">+15% from last month</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800">Total Earnings</h4>
              <p className="text-2xl font-bold text-blue-600">Rs.{totalEarnings.toLocaleString()}</p>
              <p className="text-sm text-blue-600">Across {designerData ? designerData.completedProjects : 0} projects</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium text-purple-800">Average per Project</h4>
              <p className="text-2xl font-bold text-purple-600">
                Rs.{designerData && designerData.completedProjects > 0 ? 
                  Math.round(totalEarnings / designerData.completedProjects).toLocaleString() : 
                  '0'}
              </p>
              <p className="text-sm text-purple-600">Based on completed projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignerOverview;
