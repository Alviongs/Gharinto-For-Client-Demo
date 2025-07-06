import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function PortfolioManagement() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  
  const designerName = 'Priya Mehta';
  const portfolioItems = SAMPLE_DATA.portfolioItems;
  const projects = SAMPLE_DATA.projects.filter(p => p.designerName === designerName);
  
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === 'All' ? 
    portfolioItems : 
    portfolioItems.filter(item => item.category === selectedCategory);

  const handleAddToPortfolio = (project) => {
    alert(`${project.id} added to portfolio! This would create a new portfolio entry.`);
  };

  const handleSharePortfolio = (item) => {
    alert(`Sharing ${item.title} portfolio item with client...`);
  };

  const handleEditItem = (item) => {
    alert(`Editing ${item.title}...`);
  };

  const handleDeleteItem = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.title} from your portfolio?`)) {
      alert(`${item.title} deleted from portfolio.`);
    }
  };

  return (
    <div className="portfolio-management">
      <h2 className="text-3xl font-bold mb-6">Portfolio Showcase Management</h2>
      
      {/* Portfolio Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Projects</h4>
          <p className="text-3xl font-bold text-blue-600">{portfolioItems.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Categories</h4>
          <p className="text-3xl font-bold text-green-600">{categories.length - 1}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Views</h4>
          <p className="text-3xl font-bold text-purple-600">2,847</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Client Inquiries</h4>
          <p className="text-3xl font-bold text-orange-600">23</p>
        </div>
      </div>

      {/* Portfolio Controls */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              <i className="fas fa-plus mr-2"></i>
              Add to Portfolio
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              <i className="fas fa-share mr-2"></i>
              Share Portfolio
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
              <i className="fas fa-download mr-2"></i>
              Export Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                <div>
                  <span className="font-medium">Location:</span> {item.location}
                </div>
                <div>
                  <span className="font-medium">Area:</span> {item.area}
                </div>
                <div>
                  <span className="font-medium">Budget:</span> {item.budget}
                </div>
                <div>
                  <span className="font-medium">Designer:</span> {item.designer}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedProject(item)}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded"
                >
                  <i className="fas fa-eye mr-1"></i>
                  View Details
                </button>
                <button 
                  onClick={() => handleSharePortfolio(item)}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-3 rounded"
                >
                  <i className="fas fa-share"></i>
                </button>
                <button 
                  onClick={() => handleEditItem(item)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium py-2 px-3 rounded"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button 
                  onClick={() => handleDeleteItem(item)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-3 rounded"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add to Portfolio Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold">Add Project to Portfolio</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Select from Completed Projects</h4>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {projects.filter(p => p.status === 'Completed').map(project => (
                  <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">{project.id}</h5>
                        <p className="text-sm text-gray-600">{project.customerName}</p>
                        <p className="text-sm text-gray-500">Budget: Rs.{project.budget.toLocaleString()}</p>
                      </div>
                      <button 
                        onClick={() => {
                          handleAddToPortfolio(project);
                          setShowAddModal(false);
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Add to Portfolio
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowAddModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                Upload New Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h4 className="font-semibold mb-3">Project Details</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-600">Category:</span> {selectedProject.category}</div>
                  <div><span className="text-gray-600">Location:</span> {selectedProject.location}</div>
                  <div><span className="text-gray-600">Area:</span> {selectedProject.area}</div>
                  <div><span className="text-gray-600">Budget:</span> {selectedProject.budget}</div>
                  <div><span className="text-gray-600">Designer:</span> {selectedProject.designer}</div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-sm text-gray-600">{selectedProject.description}</p>
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
                onClick={() => handleSharePortfolio(selectedProject)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Share with Client
              </button>
              <button 
                onClick={() => handleEditItem(selectedProject)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Edit Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Performance */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Portfolio Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">2,847</div>
            <div className="text-sm text-gray-600">Total Portfolio Views</div>
            <div className="text-xs text-green-600">+15% this month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">23</div>
            <div className="text-sm text-gray-600">Client Inquiries</div>
            <div className="text-xs text-green-600">+8% this month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">4.8</div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="text-xs text-green-600">★★★★★</div>
          </div>
        </div>
      </div>

      {/* Portfolio Tips */}
      <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Portfolio Optimization Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <h4 className="font-medium mb-2">Best Practices:</h4>
            <ul className="space-y-1">
              <li>• Use high-quality, well-lit photographs</li>
              <li>• Include before and after shots</li>
              <li>• Write detailed project descriptions</li>
              <li>• Showcase variety in styles and budgets</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Client Engagement:</h4>
            <ul className="space-y-1">
              <li>• Update portfolio regularly with new projects</li>
              <li>• Share portfolio links during client meetings</li>
              <li>• Highlight unique design solutions</li>
              <li>• Include client testimonials when possible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioManagement;