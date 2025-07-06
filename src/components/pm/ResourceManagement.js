import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function ResourceManagement() {
  const projects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');
  const tasks = SAMPLE_DATA.tasks.filter(t => t.assignedBy === 'Rajesh Kumar');
  
  // Mock resource data
  const resources = [
    { id: 'RES001', name: 'Site Team A', type: 'Labor', skills: ['Civil Work', 'Painting'], availability: 'Available', currentProject: null, cost: 2500, rating: 4.5 },
    { id: 'RES002', name: 'Electrical Team B', type: 'Labor', skills: ['Electrical', 'Wiring'], availability: 'Busy', currentProject: 'PR001', cost: 3000, rating: 4.8 },
    { id: 'RES003', name: 'Carpentry Team A', type: 'Labor', skills: ['Carpentry', 'Installation'], availability: 'Available', currentProject: null, cost: 2800, rating: 4.6 },
    { id: 'RES004', name: 'Quality Team', type: 'Inspection', skills: ['Quality Control', 'Safety'], availability: 'Available', currentProject: null, cost: 2000, rating: 4.9 },
    { id: 'RES005', name: 'Design Software License', type: 'Tool', skills: ['3D Modeling', 'CAD'], availability: 'Available', currentProject: null, cost: 500, rating: 4.7 },
    { id: 'RES006', name: 'Project Vehicle', type: 'Equipment', skills: ['Transportation', 'Logistics'], availability: 'Busy', currentProject: 'PR002', cost: 1500, rating: 4.3 }
  ];

  const [selectedResourceType, setSelectedResourceType] = useState('All');
  
  const filteredResources = selectedResourceType === 'All' ? 
    resources : 
    resources.filter(r => r.type === selectedResourceType);

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available': return 'bg-green-200 text-green-800';
      case 'Busy': return 'bg-red-200 text-red-800';
      case 'Scheduled': return 'bg-yellow-200 text-yellow-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Labor': return 'bg-blue-200 text-blue-800';
      case 'Equipment': return 'bg-purple-200 text-purple-800';
      case 'Tool': return 'bg-orange-200 text-orange-800';
      case 'Inspection': return 'bg-green-200 text-green-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="resource-management">
      <h2 className="text-3xl font-bold mb-6">Resource Management & Allocation</h2>
      
      {/* Resource Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Resources</h4>
          <p className="text-3xl font-bold text-blue-600">{resources.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Available</h4>
          <p className="text-3xl font-bold text-green-600">{resources.filter(r => r.availability === 'Available').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Busy</h4>
          <p className="text-3xl font-bold text-red-600">{resources.filter(r => r.availability === 'Busy').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Daily Cost</h4>
          <p className="text-3xl font-bold text-purple-600">Rs.{resources.reduce((sum, r) => sum + r.cost, 0).toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Resource List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Resource Inventory</h3>
            <select 
              value={selectedResourceType}
              onChange={(e) => setSelectedResourceType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="All">All Types</option>
              <option value="Labor">Labor</option>
              <option value="Equipment">Equipment</option>
              <option value="Tool">Tools</option>
              <option value="Inspection">Inspection</option>
            </select>
          </div>
          
          <div className="space-y-4">
            {filteredResources.map(resource => (
              <div key={resource.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{resource.name}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs rounded ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded ${getAvailabilityColor(resource.availability)}`}>
                        {resource.availability}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rs.{resource.cost}/day</p>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{resource.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-2">
                  <p className="text-sm text-gray-600">Skills:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {resource.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {resource.currentProject && (
                  <p className="text-sm text-blue-600">
                    Currently assigned to: {resource.currentProject}
                  </p>
                )}
                
                <div className="flex space-x-2 mt-3">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                    Assign
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded">
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Allocation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Resource Allocation by Project</h3>
          <div className="space-y-4">
            {projects.map(project => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium">{project.id}</h4>
                    <p className="text-sm text-gray-500">{project.customerName}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded ${
                    project.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                    project.status === 'Completed' ? 'bg-green-200 text-green-800' :
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Assigned Resources:</p>
                  <div className="space-y-1">
                    {resources.filter(r => r.currentProject === project.id).map(resource => (
                      <div key={resource.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-sm">{resource.name}</span>
                        <span className="text-xs text-gray-500">Rs.{resource.cost}/day</span>
                      </div>
                    ))}
                    {resources.filter(r => r.currentProject === project.id).length === 0 && (
                      <p className="text-sm text-gray-500 italic">No resources assigned</p>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Daily Cost: Rs.{resources.filter(r => r.currentProject === project.id).reduce((sum, r) => sum + r.cost, 0)}
                  </span>
                  <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Planning */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Resource Planning & Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Quick Actions</h4>
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded">
                Add New Resource
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-2 rounded">
                Schedule Resources
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-2 rounded">
                Resource Forecast
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-3 py-2 rounded">
                Cost Analysis
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Resource Alerts</h4>
            <div className="space-y-2">
              <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                <div className="flex items-center">
                  <i className="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>
                  <span className="text-sm text-yellow-800">
                    Electrical Team B overallocated this week
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded">
                <div className="flex items-center">
                  <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                  <span className="text-sm text-blue-800">
                    3 resources available for new assignments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceManagement;