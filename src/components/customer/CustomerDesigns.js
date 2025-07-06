
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { useAuth } from '../../App';

function CustomerDesigns() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDesign, setSelectedDesign] = useState(null);
  
  const customerName = user?.name || 'Sharma Family';
  const project = SAMPLE_DATA.projects.find(p => p.customerName === customerName);
  
  // Create mock design data based on portfolio items
  const designs = SAMPLE_DATA.portfolioItems.map((item, index) => ({
    id: `DESIGN${index + 1}`,
    projectId: project?.id,
    name: item.title,
    category: item.category,
    image: item.image,
    description: item.description,
    version: '2.1',
    status: index < 2 ? 'Approved' : index < 4 ? 'Under Review' : 'Draft',
    createdDate: '2024-02-15',
    approvalDate: index < 2 ? '2024-02-20' : null,
    type: index % 2 === 0 ? '3D Render' : '2D Plan'
  }));

  const categories = ['all', ...new Set(designs.map(d => d.category))];
  const filteredDesigns = selectedCategory === 'all' ? designs : designs.filter(d => d.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'bg-green-200 text-green-800';
      case 'Under Review': return 'bg-yellow-200 text-yellow-800';
      case 'Draft': return 'bg-gray-200 text-gray-800';
      default: return 'bg-blue-200 text-blue-800';
    }
  };

  return (
    <div className="customer-designs">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Designs & 3D Visualizations</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-download mr-2"></i>Download All
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-comment mr-2"></i>Request Changes
          </button>
        </div>
      </div>

      {/* Design Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Designs</h4>
              <p className="text-3xl font-bold text-blue-600">{designs.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <i className="fas fa-palette text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Approved</h4>
              <p className="text-3xl font-bold text-green-600">{designs.filter(d => d.status === 'Approved').length}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <i className="fas fa-check-circle text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Under Review</h4>
              <p className="text-3xl font-bold text-yellow-600">{designs.filter(d => d.status === 'Under Review').length}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <i className="fas fa-clock text-yellow-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">3D Renders</h4>
              <p className="text-3xl font-bold text-purple-600">{designs.filter(d => d.type === '3D Render').length}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <i className="fas fa-cube text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Designs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDesigns.map(design => (
          <div key={design.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={design.image} alt={design.name} className="w-full h-64 object-cover"/>
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(design.status)}`}>
                  {design.status}
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 text-xs rounded-full bg-black bg-opacity-50 text-white font-medium">
                  {design.type}
                </span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button 
                  onClick={() => setSelectedDesign(design)}
                  className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium opacity-0 hover:opacity-100 transition-opacity"
                >
                  <i className="fas fa-expand mr-2"></i>View Full Size
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">{design.name}</h3>
                <span className="text-sm text-gray-500">v{design.version}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{design.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Created: {design.createdDate}</span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    <i className="fas fa-download"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-800 text-sm">
                    <i className="fas fa-comment"></i>
                  </button>
                  <button className="text-purple-600 hover:text-purple-800 text-sm">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Design Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedDesign(null)}>
          <div className="bg-white rounded-lg max-w-4xl max-h-screen overflow-auto m-4" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedDesign.name}</h3>
                <button onClick={() => setSelectedDesign(null)} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <img src={selectedDesign.image} alt={selectedDesign.name} className="w-full h-96 object-cover rounded-lg mb-4"/>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2"><strong>Category:</strong> {selectedDesign.category}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> {selectedDesign.type}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Version:</strong> {selectedDesign.version}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2"><strong>Status:</strong> {selectedDesign.status}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Created:</strong> {selectedDesign.createdDate}</p>
                  {selectedDesign.approvalDate && (
                    <p className="text-sm text-gray-600 mb-2"><strong>Approved:</strong> {selectedDesign.approvalDate}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  <i className="fas fa-download mr-2"></i>Download
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                  <i className="fas fa-check mr-2"></i>Approve
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
                  <i className="fas fa-comment mr-2"></i>Request Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerDesigns;
