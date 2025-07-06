import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DesignStudio() {
  const [selectedProject, setSelectedProject] = useState('');
  const [activeTab, setActiveTab] = useState('designs');
  const [selectedDesign, setSelectedDesign] = useState(null);
  
  const designerName = 'Priya Mehta';
  const projects = SAMPLE_DATA.projects.filter(p => p.designerName === designerName);
  
  // Mock design files data
  const designFiles = [
    { id: 'DES001', projectId: 'PR001', name: 'Living Room 3D Model', type: '3D Model', format: '.skp', size: '15.2 MB', lastModified: '2024-02-28', status: 'Final', version: '3.0', thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop' },
    { id: 'DES002', projectId: 'PR001', name: 'Kitchen Layout Plan', type: '2D Plan', format: '.dwg', size: '2.8 MB', lastModified: '2024-02-27', status: 'Approved', version: '2.1', thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop' },
    { id: 'DES003', projectId: 'PR001', name: 'Bedroom Interior', type: 'Render', format: '.jpg', size: '8.5 MB', lastModified: '2024-02-26', status: 'In Review', version: '1.5', thumbnail: 'https://images.unsplash.com/photo-1631048501851-4aa85ffc3be8?w=300&h=200&fit=crop' },
    { id: 'DES004', projectId: 'PR002', name: 'Office Space Design', type: '3D Model', format: '.max', size: '22.1 MB', lastModified: '2024-02-25', status: 'Draft', version: '1.0', thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop' },
    { id: 'DES005', projectId: 'PR002', name: 'Color Palette', type: 'Mood Board', format: '.psd', size: '45.3 MB', lastModified: '2024-02-24', status: 'Final', version: '2.0', thumbnail: 'https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=300&h=200&fit=crop' },
    { id: 'DES006', projectId: 'PR004', name: 'Villa Exterior', type: 'Render', format: '.png', size: '12.7 MB', lastModified: '2024-02-23', status: 'Approved', version: '1.8', thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop' }
  ];

  const filteredDesigns = selectedProject ? 
    designFiles.filter(design => design.projectId === selectedProject) : 
    designFiles;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Final': return 'bg-green-200 text-green-800';
      case 'Approved': return 'bg-blue-200 text-blue-800';
      case 'In Review': return 'bg-yellow-200 text-yellow-800';
      case 'Draft': return 'bg-gray-200 text-gray-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case '3D Model': return 'fas fa-cube';
      case '2D Plan': return 'fas fa-drafting-compass';
      case 'Render': return 'fas fa-image';
      case 'Mood Board': return 'fas fa-palette';
      default: return 'fas fa-file';
    }
  };

  const handleShareDesign = (design) => {
    alert(`Sharing ${design.name} with client for ${design.projectId}`);
  };

  const handleDownload = (design) => {
    alert(`Downloading ${design.name} (${design.format})`);
  };

  const handleVersionControl = (design) => {
    alert(`Version history for ${design.name} - Current: v${design.version}`);
  };

  return (
    <div className="design-studio">
      <h2 className="text-3xl font-bold mb-6">Design Studio & Collaboration</h2>
      
      {/* Studio Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Designs</h4>
          <p className="text-3xl font-bold text-blue-600">{designFiles.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Approved</h4>
          <p className="text-3xl font-bold text-green-600">{designFiles.filter(d => d.status === 'Approved' || d.status === 'Final').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">In Review</h4>
          <p className="text-3xl font-bold text-yellow-600">{designFiles.filter(d => d.status === 'In Review').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Storage Used</h4>
          <p className="text-3xl font-bold text-purple-600">
            {(designFiles.reduce((sum, d) => sum + parseFloat(d.size), 0)).toFixed(1)} MB
          </p>
        </div>
      </div>

      {/* Project Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Project</label>
            <select 
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Projects</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.id} - {project.customerName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-2 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              <i className="fas fa-plus mr-2"></i>
              Upload Design
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              <i className="fas fa-folder mr-2"></i>
              Create Folder
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
              <i className="fas fa-share mr-2"></i>
              Batch Share
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'designs', label: 'Design Files', icon: 'fas fa-images' },
              { id: 'collaboration', label: 'Collaboration', icon: 'fas fa-users' },
              { id: 'versions', label: 'Version Control', icon: 'fas fa-code-branch' },
              { id: 'sharing', label: 'Client Sharing', icon: 'fas fa-share-alt' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
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
          {activeTab === 'designs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDesigns.map(design => (
                <div key={design.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={design.thumbnail} 
                      alt={design.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800 truncate">{design.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${getStatusColor(design.status)}`}>
                        {design.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <i className={`${getTypeIcon(design.type)} text-gray-500 mr-2`}></i>
                      <span className="text-sm text-gray-600">{design.type}</span>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-3">
                      <div>Project: {design.projectId}</div>
                      <div>Size: {design.size} • v{design.version}</div>
                      <div>Modified: {design.lastModified}</div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedDesign(design)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded"
                      >
                        <i className="fas fa-eye mr-1"></i>
                        View
                      </button>
                      <button 
                        onClick={() => handleShareDesign(design)}
                        className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-3 rounded"
                      >
                        <i className="fas fa-share"></i>
                      </button>
                      <button 
                        onClick={() => handleDownload(design)}
                        className="bg-gray-500 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded"
                      >
                        <i className="fas fa-download"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'collaboration' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Active Collaborations</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded border">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium">PR001 - Living Room Design</h5>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Collaborating with: Sharma Family, Project Manager</p>
                      <div className="flex space-x-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                          View Comments
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded">
                          Share Update
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium">PR002 - Office Space</h5>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending Review</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Collaborating with: Gupta Residence, Design Team</p>
                      <div className="flex space-x-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                          View Comments
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded">
                          Request Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Recent Comments</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-sm">Sharma Family</span>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-700">"Love the color scheme! Can we make the sofa slightly darker?"</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded border-l-4 border-green-500">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-sm">Project Manager</span>
                        <span className="text-xs text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-sm text-gray-700">"Design approved! Please proceed with material procurement."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'versions' && (
            <div className="space-y-4">
              {filteredDesigns.map(design => (
                <div key={design.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{design.name}</h4>
                      <p className="text-sm text-gray-600">Current version: {design.version} • Last modified: {design.lastModified}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleVersionControl(design)}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded"
                      >
                        <i className="fas fa-history mr-1"></i>
                        View History
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-2 rounded">
                        <i className="fas fa-plus mr-1"></i>
                        New Version
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sharing' && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Client Sharing Dashboard</h4>
                <p className="text-blue-700 mb-4">Generate secure, shareable links for client design reviews</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  <i className="fas fa-link mr-2"></i>
                  Generate Sharing Link
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Shared Projects</h4>
                  <div className="space-y-3">
                    {projects.slice(0, 3).map(project => (
                      <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium">{project.id} - {project.customerName}</h5>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Shared</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {designFiles.filter(d => d.projectId === project.id).length} designs shared
                        </p>
                        <div className="flex space-x-2">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                            View Link
                          </button>
                          <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded">
                            Update Access
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Sharing Analytics</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Views</span>
                        <span className="font-medium">247</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Client Feedback</span>
                        <span className="font-medium">12 comments</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Approval Rate</span>
                        <span className="font-medium text-green-600">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Design Detail Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold">{selectedDesign.name}</h3>
              <button 
                onClick={() => setSelectedDesign(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedDesign.thumbnail} 
                  alt={selectedDesign.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-semibold mb-3">Design Details</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-600">Type:</span> {selectedDesign.type}</div>
                  <div><span className="text-gray-600">Format:</span> {selectedDesign.format}</div>
                  <div><span className="text-gray-600">Size:</span> {selectedDesign.size}</div>
                  <div><span className="text-gray-600">Version:</span> {selectedDesign.version}</div>
                  <div><span className="text-gray-600">Status:</span> {selectedDesign.status}</div>
                  <div><span className="text-gray-600">Project:</span> {selectedDesign.projectId}</div>
                  <div><span className="text-gray-600">Last Modified:</span> {selectedDesign.lastModified}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-6">
              <button 
                onClick={() => setSelectedDesign(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button 
                onClick={() => handleDownload(selectedDesign)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Download
              </button>
              <button 
                onClick={() => handleShareDesign(selectedDesign)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Share with Client
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesignStudio;