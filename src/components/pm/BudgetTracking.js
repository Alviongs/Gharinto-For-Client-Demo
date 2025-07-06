
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function BudgetTracking() {
  const projects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');
  const [selectedProject, setSelectedProject] = useState(projects[0]?.id || '');

  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
  const totalRemaining = totalBudget - totalSpent;

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="budget-tracking">
      <h2 className="text-3xl font-bold mb-6">Budget Tracking & Financial Management</h2>
      
      {/* Overall Budget Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Budget</h4>
          <p className="text-3xl font-bold text-blue-600">Rs.{totalBudget.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Spent</h4>
          <p className="text-3xl font-bold text-red-600">Rs.{totalSpent.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Remaining</h4>
          <p className="text-3xl font-bold text-green-600">Rs.{totalRemaining.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Budget Utilization</h4>
          <p className="text-3xl font-bold text-purple-600">{((totalSpent / totalBudget) * 100).toFixed(1)}%</p>
        </div>
      </div>

      {/* Project-wise Budget Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Project Budget Overview</h3>
          <div className="space-y-4">
            {projects.map(project => (
              <div key={project.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{project.id}</h4>
                    <p className="text-sm text-gray-500">{project.customerName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rs.{project.budget.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Budget</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Spent: Rs.{project.spent.toLocaleString()}</span>
                  <span>Remaining: Rs.{(project.budget - project.spent).toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      (project.spent / project.budget) > 0.9 ? 'bg-red-500' :
                      (project.spent / project.budget) > 0.7 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.min((project.spent / project.budget) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {((project.spent / project.budget) * 100).toFixed(1)}% utilized
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Project Budget */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Detailed Budget Analysis</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Project</label>
            <select 
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {projects.map(project => (
                <option key={project.id} value={project.id}>{project.id} - {project.customerName}</option>
              ))}
            </select>
          </div>
          
          {selectedProjectData && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800">Total Budget</h4>
                  <p className="text-2xl font-bold text-blue-600">Rs.{selectedProjectData.budget.toLocaleString()}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800">Amount Spent</h4>
                  <p className="text-2xl font-bold text-red-600">Rs.{selectedProjectData.spent.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Budget Breakdown (Estimated)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Design & Planning (15%)</span>
                    <span>Rs.{(selectedProjectData.budget * 0.15).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Materials & Procurement (60%)</span>
                    <span>Rs.{(selectedProjectData.budget * 0.60).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor & Installation (20%)</span>
                    <span>Rs.{(selectedProjectData.budget * 0.20).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-medium">
                    <span>Contingency (5%)</span>
                    <span>Rs.{(selectedProjectData.budget * 0.05).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800">Budget Status</h4>
                <p className="text-sm text-yellow-700">
                  {selectedProjectData.spent > selectedProjectData.budget ? 
                    `Over budget by Rs.${(selectedProjectData.spent - selectedProjectData.budget).toLocaleString()}` :
                    `Under budget by Rs.${(selectedProjectData.budget - selectedProjectData.spent).toLocaleString()}`
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Budget Alerts */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Budget Alerts & Recommendations</h3>
        <div className="space-y-3">
          {projects.map(project => {
            const utilization = (project.spent / project.budget) * 100;
            if (utilization > 90) {
              return (
                <div key={project.id} className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                    <span className="font-medium text-red-800">
                      {project.id}: Budget critically high ({utilization.toFixed(1)}% utilized)
                    </span>
                  </div>
                </div>
              );
            } else if (utilization > 75) {
              return (
                <div key={project.id} className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-circle text-yellow-500 mr-2"></i>
                    <span className="font-medium text-yellow-800">
                      {project.id}: Monitor budget closely ({utilization.toFixed(1)}% utilized)
                    </span>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default BudgetTracking;
