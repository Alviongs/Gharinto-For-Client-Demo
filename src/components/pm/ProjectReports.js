import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function ProjectReports() {
  const projects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');
  const tasks = SAMPLE_DATA.tasks.filter(t => t.assignedBy === 'Rajesh Kumar');
  const purchaseOrders = SAMPLE_DATA.purchaseOrders.filter(po => 
    projects.some(p => p.id === po.projectId)
  );
  
  const [reportType, setReportType] = useState('overview');
  const [selectedProject, setSelectedProject] = useState('all');

  // Calculate report data
  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
  const avgProgress = projects.reduce((sum, p) => sum + p.progress, 0) / projects.length;
  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const totalPOValue = purchaseOrders.reduce((sum, po) => sum + po.totalAmount, 0);

  const generateProjectReport = (project) => {
    const projectTasks = tasks.filter(t => t.projectId === project.id);
    const projectPOs = purchaseOrders.filter(po => po.projectId === project.id);
    
    return {
      ...project,
      taskCount: projectTasks.length,
      completedTasks: projectTasks.filter(t => t.status === 'Completed').length,
      poCount: projectPOs.length,
      poValue: projectPOs.reduce((sum, po) => sum + po.totalAmount, 0),
      efficiency: project.progress / 100,
      budgetUtilization: (project.spent / project.budget) * 100
    };
  };

  const projectReports = projects.map(generateProjectReport);

  return (
    <div className="project-reports">
      <h2 className="text-3xl font-bold mb-6">Project Reports & Analytics</h2>
      
      {/* Report Controls */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select 
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="overview">Overview Report</option>
              <option value="financial">Financial Report</option>
              <option value="progress">Progress Report</option>
              <option value="resource">Resource Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Filter</label>
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
          <div className="flex space-x-2 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Generate Report
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Export PDF
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
              Schedule Report
            </button>
          </div>
        </div>
      </div>

      {reportType === 'overview' && (
        <div className="space-y-6">
          {/* Executive Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Executive Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800">Total Projects</h4>
                <p className="text-2xl font-bold text-blue-600">{projects.length}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800">Average Progress</h4>
                <p className="text-2xl font-bold text-green-600">{avgProgress.toFixed(1)}%</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800">Budget Utilization</h4>
                <p className="text-2xl font-bold text-yellow-600">{((totalSpent / totalBudget) * 100).toFixed(1)}%</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800">Task Completion</h4>
                <p className="text-2xl font-bold text-purple-600">{((completedTasks / tasks.length) * 100).toFixed(1)}%</p>
              </div>
            </div>
          </div>

          {/* Project Performance Table */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project Performance Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Project</th>
                    <th className="py-3 px-6 text-center">Progress</th>
                    <th className="py-3 px-6 text-center">Budget Status</th>
                    <th className="py-3 px-6 text-center">Tasks</th>
                    <th className="py-3 px-6 text-center">PO Value</th>
                    <th className="py-3 px-6 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {projectReports.map(project => (
                    <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left">
                        <div>
                          <div className="font-medium">{project.id}</div>
                          <div className="text-gray-500 text-xs">{project.customerName}</div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{project.progress}%</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.budgetUtilization > 90 ? 'bg-red-200 text-red-800' :
                          project.budgetUtilization > 75 ? 'bg-yellow-200 text-yellow-800' :
                          'bg-green-200 text-green-800'
                        }`}>
                          {project.budgetUtilization.toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span>{project.completedTasks}/{project.taskCount}</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        Rs.{project.poValue.toLocaleString()}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'Completed' ? 'bg-green-200 text-green-800' :
                          project.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                          'bg-yellow-200 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {reportType === 'financial' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Financial Performance Report</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800">Total Budget Allocated</h4>
                <p className="text-2xl font-bold text-blue-600">Rs.{totalBudget.toLocaleString()}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-800">Total Spent</h4>
                <p className="text-2xl font-bold text-red-600">Rs.{totalSpent.toLocaleString()}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800">Remaining Budget</h4>
                <p className="text-2xl font-bold text-green-600">Rs.{(totalBudget - totalSpent).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {projects.map(project => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{project.id} - {project.customerName}</h4>
                    <span className={`px-2 py-1 text-xs rounded ${
                      (project.spent / project.budget) > 0.9 ? 'bg-red-200 text-red-800' :
                      (project.spent / project.budget) > 0.7 ? 'bg-yellow-200 text-yellow-800' :
                      'bg-green-200 text-green-800'
                    }`}>
                      {((project.spent / project.budget) * 100).toFixed(1)}% utilized
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>Budget: Rs.{project.budget.toLocaleString()}</div>
                    <div>Spent: Rs.{project.spent.toLocaleString()}</div>
                    <div>Remaining: Rs.{(project.budget - project.spent).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {reportType === 'progress' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Progress Tracking Report</h3>
          <div className="space-y-6">
            {projects.map(project => {
              const projectTasks = tasks.filter(t => t.projectId === project.id);
              return (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">{project.id} - {project.customerName}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold">{project.progress}%</div>
                      <div className="text-sm text-gray-500">Overall Progress</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Timeline</h5>
                      <div className="text-sm space-y-1">
                        <div>Start: {project.startDate}</div>
                        <div>Expected End: {project.expectedEnd}</div>
                        <div>Current Phase: {project.phase}</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Task Summary</h5>
                      <div className="text-sm space-y-1">
                        <div>Total Tasks: {projectTasks.length}</div>
                        <div>Completed: {projectTasks.filter(t => t.status === 'Completed').length}</div>
                        <div>In Progress: {projectTasks.filter(t => t.status === 'In Progress').length}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {reportType === 'resource' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Resource Utilization Report</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Task Distribution</h4>
              <div className="space-y-2">
                {tasks.reduce((acc, task) => {
                  acc[task.assignedTo] = (acc[task.assignedTo] || 0) + 1;
                  return acc;
                }, {}) && Object.entries(tasks.reduce((acc, task) => {
                  acc[task.assignedTo] = (acc[task.assignedTo] || 0) + 1;
                  return acc;
                }, {})).map(([assignee, count]) => (
                  <div key={assignee} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="text-sm">{assignee}</span>
                    <span className="text-sm font-medium">{count} tasks</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Procurement Summary</h4>
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 rounded">
                  <div className="text-sm text-blue-800">Total Purchase Orders</div>
                  <div className="text-lg font-bold text-blue-600">{purchaseOrders.length}</div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="text-sm text-green-800">Total PO Value</div>
                  <div className="text-lg font-bold text-green-600">Rs.{totalPOValue.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectReports;