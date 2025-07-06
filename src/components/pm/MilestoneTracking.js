import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function MilestoneTracking() {
  const projects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');
  
  // Mock milestone data based on projects
  const milestones = [
    { id: 'MS001', projectId: 'PR001', name: 'Design Approval', description: 'Client approval of final design', dueDate: '2024-01-15', completedDate: '2024-01-14', status: 'Completed', paymentAmount: 104000, progress: 100 },
    { id: 'MS002', projectId: 'PR001', name: 'Material Procurement', description: 'All materials procured and delivered', dueDate: '2024-02-15', completedDate: '2024-02-10', status: 'Completed', paymentAmount: 156000, progress: 100 },
    { id: 'MS003', projectId: 'PR001', name: 'Civil Work Completion', description: 'All civil and structural work completed', dueDate: '2024-03-01', completedDate: null, status: 'In Progress', paymentAmount: 130000, progress: 75 },
    { id: 'MS004', projectId: 'PR001', name: 'Installation & Setup', description: 'Furniture and fixture installation', dueDate: '2024-03-10', completedDate: null, status: 'Pending', paymentAmount: 104000, progress: 0 },
    { id: 'MS005', projectId: 'PR001', name: 'Final Handover', description: 'Project completion and handover', dueDate: '2024-03-15', completedDate: null, status: 'Pending', paymentAmount: 26000, progress: 0 },
    
    { id: 'MS006', projectId: 'PR002', name: 'Design Approval', description: 'Client approval of final design', dueDate: '2024-02-20', completedDate: '2024-02-18', status: 'Completed', paymentAmount: 84000, progress: 100 },
    { id: 'MS007', projectId: 'PR002', name: 'Material Procurement', description: 'All materials procured and delivered', dueDate: '2024-03-15', completedDate: null, status: 'In Progress', paymentAmount: 126000, progress: 40 },
    { id: 'MS008', projectId: 'PR002', name: 'Installation & Setup', description: 'Furniture and fixture installation', dueDate: '2024-04-10', completedDate: null, status: 'Pending', paymentAmount: 126000, progress: 0 },
    { id: 'MS009', projectId: 'PR002', name: 'Final Handover', description: 'Project completion and handover', dueDate: '2024-04-30', completedDate: null, status: 'Pending', paymentAmount: 84000, progress: 0 },
    
    { id: 'MS010', projectId: 'PR004', name: 'Design Approval', description: 'Client approval of final design', dueDate: '2024-02-25', completedDate: null, status: 'In Progress', paymentAmount: 136000, progress: 60 },
  ];

  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredMilestones = milestones.filter(milestone => {
    const projectMatch = selectedProject === 'all' || milestone.projectId === selectedProject;
    const statusMatch = selectedStatus === 'all' || milestone.status === selectedStatus;
    return projectMatch && statusMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-200 text-green-800';
      case 'In Progress': return 'bg-blue-200 text-blue-800';
      case 'Pending': return 'bg-yellow-200 text-yellow-800';
      case 'Overdue': return 'bg-red-200 text-red-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const isOverdue = (dueDate, status) => {
    return status !== 'Completed' && new Date(dueDate) < new Date();
  };

  const totalMilestones = milestones.length;
  const completedMilestones = milestones.filter(m => m.status === 'Completed').length;
  const overdueMilestones = milestones.filter(m => isOverdue(m.dueDate, m.status)).length;
  const totalPaymentValue = milestones.reduce((sum, m) => sum + m.paymentAmount, 0);
  const completedPaymentValue = milestones.filter(m => m.status === 'Completed').reduce((sum, m) => sum + m.paymentAmount, 0);

  return (
    <div className="milestone-tracking">
      <h2 className="text-3xl font-bold mb-6">Milestone Tracking & Payment Management</h2>
      
      {/* Milestone Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Milestones</h4>
          <p className="text-3xl font-bold text-blue-600">{totalMilestones}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Completed</h4>
          <p className="text-3xl font-bold text-green-600">{completedMilestones}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Overdue</h4>
          <p className="text-3xl font-bold text-red-600">{overdueMilestones}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Completion Rate</h4>
          <p className="text-3xl font-bold text-purple-600">{((completedMilestones / totalMilestones) * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Payment Released</h4>
          <p className="text-2xl font-bold text-green-600">Rs.{completedPaymentValue.toLocaleString()}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Project</label>
            <select 
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Projects</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>{project.id} - {project.customerName}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Status</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="flex space-x-2 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Add Milestone
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Milestone Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Milestone Timeline</h3>
          <div className="space-y-4">
            {filteredMilestones.map(milestone => (
              <div key={milestone.id} className="border-l-4 border-blue-500 pl-4 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{milestone.name}</h4>
                    <p className="text-sm text-gray-600">{milestone.projectId}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(milestone.status)}`}>
                    {milestone.status}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{milestone.description}</p>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">
                    Due: {milestone.dueDate}
                    {isOverdue(milestone.dueDate, milestone.status) && (
                      <span className="text-red-500 ml-2">(Overdue)</span>
                    )}
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    Rs.{milestone.paymentAmount.toLocaleString()}
                  </span>
                </div>
                
                {milestone.status !== 'Pending' && (
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{milestone.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${milestone.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {milestone.completedDate && (
                  <p className="text-sm text-green-600">
                    Completed: {milestone.completedDate}
                  </p>
                )}
                
                <div className="flex space-x-2 mt-3">
                  {milestone.status === 'Pending' && (
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                      Start
                    </button>
                  )}
                  {milestone.status === 'In Progress' && (
                    <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded">
                      Mark Complete
                    </button>
                  )}
                  <button className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Milestone Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Project Milestone Summary</h3>
          <div className="space-y-4">
            {projects.map(project => {
              const projectMilestones = milestones.filter(m => m.projectId === project.id);
              const completedCount = projectMilestones.filter(m => m.status === 'Completed').length;
              const totalCount = projectMilestones.length;
              const completionRate = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
              
              return (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
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
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Milestone Progress</span>
                      <span>{completedCount}/{totalCount} completed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${completionRate}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Next Milestone:</span>
                      <p className="font-medium">
                        {projectMilestones.find(m => m.status !== 'Completed')?.name || 'All Complete'}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-600">Payment Released:</span>
                      <p className="font-medium text-green-600">
                        Rs.{projectMilestones.filter(m => m.status === 'Completed').reduce((sum, m) => sum + m.paymentAmount, 0).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Milestone Alerts */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Milestone Alerts & Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Upcoming Milestones</h4>
            <div className="space-y-2">
              {milestones.filter(m => m.status === 'Pending' || m.status === 'In Progress').slice(0, 3).map(milestone => (
                <div key={milestone.id} className="bg-blue-50 border border-blue-200 p-3 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-blue-800">{milestone.name}</p>
                      <p className="text-sm text-blue-600">{milestone.projectId} - Due: {milestone.dueDate}</p>
                    </div>
                    <span className="text-sm text-blue-600">Rs.{milestone.paymentAmount.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Overdue Alerts</h4>
            <div className="space-y-2">
              {milestones.filter(m => isOverdue(m.dueDate, m.status)).map(milestone => (
                <div key={milestone.id} className="bg-red-50 border border-red-200 p-3 rounded">
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                    <div>
                      <p className="font-medium text-red-800">{milestone.name}</p>
                      <p className="text-sm text-red-600">{milestone.projectId} - Overdue since {milestone.dueDate}</p>
                    </div>
                  </div>
                </div>
              ))}
              {milestones.filter(m => isOverdue(m.dueDate, m.status)).length === 0 && (
                <div className="bg-green-50 border border-green-200 p-3 rounded">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-green-800">No overdue milestones</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MilestoneTracking;