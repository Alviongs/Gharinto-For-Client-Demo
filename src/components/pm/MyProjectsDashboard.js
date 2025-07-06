
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function MyProjectsDashboard() {
  const projects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');

  return (
    <div className="my-projects-dashboard">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      {/* Project Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Projects</h4>
          <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">In Progress</h4>
          <p className="text-3xl font-bold text-yellow-600">{projects.filter(p => p.status === 'In Progress').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Completed</h4>
          <p className="text-3xl font-bold text-green-600">{projects.filter(p => p.status === 'Completed').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Budget</h4>
          <p className="text-3xl font-bold text-purple-600">Rs.{projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{project.id}</h3>
            <p className="text-gray-600 mb-2">{project.customerName}</p>
            <p className="text-sm text-gray-500 mb-4">Designer: {project.designerName}</p>
            <div className="flex justify-between items-center mb-4">
              <span className={`px-2 py-1 text-sm rounded-full ${
                project.status === 'Completed' ? 'bg-green-200 text-green-800' :
                project.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                project.status === 'Design Phase' ? 'bg-purple-200 text-purple-800' :
                project.status === 'Procurement' ? 'bg-orange-200 text-orange-800' :
                project.status === 'Installation' ? 'bg-yellow-200 text-yellow-800' :
                'bg-red-200 text-red-800'
              }`}>
                {project.status}
              </span>
              <span className="text-gray-500">Due: {project.expectedEnd}</span>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Budget: Rs.{project.budget.toLocaleString()}</span>
              <span className="text-gray-600">Spent: Rs.{project.spent.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjectsDashboard;
