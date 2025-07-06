import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { useAuth } from '../../App';

function CustomerProjectOverview() {
  const { user } = useAuth();
  const customerName = user?.name || 'Sharma Family'; // Use actual logged-in customer
  const project = SAMPLE_DATA.projects.find(p => p.customerName === customerName);
  const tasks = SAMPLE_DATA.tasks.filter(t => t.projectId === project?.id);
  const recentCommunications = SAMPLE_DATA.communications.filter(c => c.projectId === project?.id).slice(0, 3);

  if (!project) {
    return (
      <div className="customer-project-overview">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <i className="fas fa-home text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Active Project</h3>
          <p className="text-gray-500 mb-4">You don't have any active projects at the moment.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Start New Project
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Design Phase': return 'bg-purple-500';
      case 'Procurement': return 'bg-orange-500';
      case 'Installation': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="customer-project-overview">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Project Overview</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-download mr-2"></i>Download Report
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-phone mr-2"></i>Contact Team
          </button>
        </div>
      </div>

      {/* Project Header Card */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{project.id}</h3>
            <p className="text-gray-600">{project.propertyType} - {project.area}</p>
            <p className="text-gray-500">{project.location}</p>
          </div>
          <div className="text-right">
            <span className={`px-4 py-2 rounded-full text-white font-semibold ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <p className="text-sm text-gray-500 mt-2">Expected: {project.expectedEnd}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold">Overall Progress</span>
            <span className="text-lg font-bold text-blue-600">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className={`h-4 rounded-full ${getStatusColor(project.status)} transition-all duration-500`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <i className="fas fa-paint-brush text-blue-600 text-2xl mb-2"></i>
            <p className="text-sm text-gray-600">Designer</p>
            <p className="font-semibold">{project.designerName}</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <i className="fas fa-user-tie text-green-600 text-2xl mb-2"></i>
            <p className="text-sm text-gray-600">Project Manager</p>
            <p className="font-semibold">{project.pmName}</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <i className="fas fa-calendar text-purple-600 text-2xl mb-2"></i>
            <p className="text-sm text-gray-600">Next Milestone</p>
            <p className="font-semibold">{project.nextMilestone}</p>
          </div>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Budget</h4>
              <p className="text-3xl font-bold text-blue-600">Rs.{project.budget.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <i className="fas fa-wallet text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Amount Spent</h4>
              <p className="text-3xl font-bold text-green-600">Rs.{project.spent.toLocaleString()}</p>
              <p className="text-sm text-green-600">{((project.spent / project.budget) * 100).toFixed(1)}% utilized</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <i className="fas fa-credit-card text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Remaining</h4>
              <p className="text-3xl font-bold text-orange-600">Rs.{(project.budget - project.spent).toLocaleString()}</p>
              <p className="text-sm text-orange-600">{(((project.budget - project.spent) / project.budget) * 100).toFixed(1)}% remaining</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <i className="fas fa-piggy-bank text-orange-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Communications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Recent Tasks & Updates</h4>
          <div className="space-y-4">
            {tasks.slice(0, 5).map(task => (
              <div key={task.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  task.status === 'Completed' ? 'bg-green-500' :
                  task.status === 'In Progress' ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-gray-500">{task.category} - Due: {task.dueDate}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  task.status === 'Completed' ? 'bg-green-200 text-green-800' :
                  task.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Recent Communications</h4>
          <div className="space-y-4">
            {recentCommunications.map(comm => (
              <div key={comm.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium">{comm.fromUser}</p>
                  <span className="text-xs text-gray-500">{new Date(comm.timestamp).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-gray-600">{comm.subject}</p>
                <p className="text-xs text-gray-500 mt-1 truncate">{comm.message}</p>
              </div>
            ))}
            <button className="w-full text-center py-2 text-blue-600 hover:text-blue-800 font-medium">
              View All Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProjectOverview;