
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DesignerProjects() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const designerName = 'Priya Mehta';
  const projects = SAMPLE_DATA.projects.filter(p => p.designerName === designerName);
  
  const filteredProjects = selectedStatus === 'all' ? 
    projects : 
    projects.filter(p => p.status === selectedStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-200 text-green-800';
      case 'In Progress': return 'bg-blue-200 text-blue-800';
      case 'Design Phase': return 'bg-purple-200 text-purple-800';
      case 'Procurement': return 'bg-orange-200 text-orange-800';
      case 'Installation': return 'bg-yellow-200 text-yellow-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const handleProjectAction = (project, action) => {
    alert(`${action} for project ${project.id} - ${project.customerName}`);
  };

  return (
    <div className="designer-projects">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      
      {/* Project Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Projects</h4>
          <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Active</h4>
          <p className="text-3xl font-bold text-green-600">{projects.filter(p => p.status === 'In Progress' || p.status === 'Design Phase').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Completed</h4>
          <p className="text-3xl font-bold text-purple-600">{projects.filter(p => p.status === 'Completed').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Avg Progress</h4>
          <p className="text-3xl font-bold text-orange-600">{projects.length > 0 ? Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length) : 0}%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Projects</option>
              <option value="Design Phase">Design Phase</option>
              <option value="In Progress">In Progress</option>
              <option value="Procurement">Procurement</option>
              <option value="Installation">Installation</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex space-x-2 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              <i className="fas fa-plus mr-2"></i>
              New Project
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              <i className="fas fa-file-export mr-2"></i>
              Export List
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{project.id}</h3>
                <p className="text-gray-600">{project.customerName}</p>
              </div>
              <span className={`px-2 py-1 text-sm rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div><span className="font-medium">Budget:</span> Rs.{project.budget.toLocaleString()}</div>
                <div><span className="font-medium">Phase:</span> {project.phase}</div>
                <div><span className="font-medium">Start:</span> {project.startDate}</div>
                <div><span className="font-medium">End:</span> {project.expectedEnd}</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Next Milestone:</span> {project.nextMilestone}
              </p>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedProject(project)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded"
              >
                <i className="fas fa-eye mr-1"></i>
                View Details
              </button>
              <button 
                onClick={() => handleProjectAction(project, 'Update Progress')}
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-3 rounded"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button 
                onClick={() => handleProjectAction(project, 'Contact Client')}
                className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium py-2 px-3 rounded"
              >
                <i className="fas fa-phone"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold">{selectedProject.id} - {selectedProject.customerName}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Project Information</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-600">Status:</span> {selectedProject.status}</div>
                  <div><span className="text-gray-600">Progress:</span> {selectedProject.progress}%</div>
                  <div><span className="text-gray-600">Budget:</span> Rs.{selectedProject.budget.toLocaleString()}</div>
                  <div><span className="text-gray-600">Spent:</span> Rs.{selectedProject.spent.toLocaleString()}</div>
                  <div><span className="text-gray-600">Phase:</span> {selectedProject.phase}</div>
                  <div><span className="text-gray-600">Start Date:</span> {selectedProject.startDate}</div>
                  <div><span className="text-gray-600">Expected End:</span> {selectedProject.expectedEnd}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Client Information</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-600">Customer:</span> {selectedProject.customerName}</div>
                  <div><span className="text-gray-600">PM:</span> {selectedProject.pmName}</div>
                  <div><span className="text-gray-600">Next Milestone:</span> {selectedProject.nextMilestone}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-6">
              <button 
                onClick={() => setSelectedProject(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button 
                onClick={() => handleProjectAction(selectedProject, 'Generate BOQ')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Generate BOQ
              </button>
              <button 
                onClick={() => handleProjectAction(selectedProject, 'Contact Client')}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Contact Client
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesignerProjects;
