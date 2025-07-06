import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function MaterialCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [favorites, setFavorites] = useState(['MAT001', 'MAT003', 'MAT007']);
  
  const materials = SAMPLE_DATA.materials;
  const categories = ['All', ...new Set(materials.map(m => m.category))];
  
  // Filter and sort materials
  const filteredMaterials = materials.filter(material => {
    const categoryMatch = selectedCategory === 'All' || material.category === selectedCategory;
    const searchMatch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       material.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const toggleFavorite = (materialId) => {
    setFavorites(prev => 
      prev.includes(materialId) 
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId]
    );
  };

  const addToProject = (material) => {
    alert(`${material.name} added to current project BOQ!`);
  };

  const requestQuote = (material) => {
    alert(`Quote request sent for ${material.name} to ${material.vendor}!`);
  };

  return (
    <div className="material-catalog">
      <h2 className="text-3xl font-bold mb-6">Material Catalog & E-commerce</h2>
      
      {/* Catalog Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Materials</h4>
          <p className="text-3xl font-bold text-blue-600">{materials.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Categories</h4>
          <p className="text-3xl font-bold text-green-600">{categories.length - 1}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Favorites</h4>
          <p className="text-3xl font-bold text-purple-600">{favorites.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Vendors</h4>
          <p className="text-3xl font-bold text-orange-600">{new Set(materials.map(m => m.vendor)).size}</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Materials</label>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name A-Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
              <i className="fas fa-filter mr-2"></i>
              Advanced Filters
            </button>
          </div>
        </div>
      </div>

      {/* Material Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMaterials.map(material => (
          <div key={material.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Material Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <i className="fas fa-image text-4xl text-gray-400"></i>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{material.name}</h3>
                <button 
                  onClick={() => toggleFavorite(material.id)}
                  className={`text-xl ${favorites.includes(material.id) ? 'text-red-500' : 'text-gray-300'} hover:text-red-500`}
                >
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{material.description}</p>
              
              <div className="flex justify-between items-center mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {material.category}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  material.stock > 50 ? 'bg-green-100 text-green-800' :
                  material.stock > 20 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  Stock: {material.stock}
                </span>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">Rs.{material.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">per {material.unit}</span>
                </div>
                <p className="text-xs text-gray-500">Vendor: {material.vendor}</p>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => addToProject(material)}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-3 rounded"
                >
                  <i className="fas fa-plus mr-1"></i>
                  Add to BOQ
                </button>
                <button 
                  onClick={() => requestQuote(material)}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded"
                >
                  <i className="fas fa-quote-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-heart mr-2"></i>
            View Favorites
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-history mr-2"></i>
            Recent Orders
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-truck mr-2"></i>
            Track Delivery
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-store mr-2"></i>
            Vendor Directory
          </button>
        </div>
      </div>

      {/* Material Tips */}
      <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Material Selection Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <h4 className="font-medium mb-2">Quality Considerations:</h4>
            <ul className="space-y-1">
              <li>• Check vendor ratings and reviews</li>
              <li>• Verify material certifications</li>
              <li>• Consider maintenance requirements</li>
              <li>• Match with project budget and timeline</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Cost Optimization:</h4>
            <ul className="space-y-1">
              <li>• Compare prices across vendors</li>
              <li>• Consider bulk purchase discounts</li>
              <li>• Factor in delivery and installation costs</li>
              <li>• Plan for material wastage (5-10%)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialCatalog;