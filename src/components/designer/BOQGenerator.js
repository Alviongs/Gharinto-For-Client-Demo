import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function BOQGenerator() {
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [customItems, setCustomItems] = useState([]);
  const [newCustomItem, setNewCustomItem] = useState({ name: '', quantity: 1, price: 0, unit: 'piece' });
  
  const designerName = 'Priya Mehta';
  const projects = SAMPLE_DATA.projects.filter(p => p.designerName === designerName);
  const materials = SAMPLE_DATA.materials;

  const addMaterial = (material) => {
    const existingItem = selectedMaterials.find(item => item.id === material.id);
    if (existingItem) {
      setSelectedMaterials(selectedMaterials.map(item => 
        item.id === material.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setSelectedMaterials([...selectedMaterials, { ...material, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setSelectedMaterials(selectedMaterials.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeMaterial = (id) => {
    setSelectedMaterials(selectedMaterials.filter(item => item.id !== id));
  };

  const addCustomItem = () => {
    if (newCustomItem.name && newCustomItem.price > 0) {
      setCustomItems([...customItems, { 
        ...newCustomItem, 
        id: `custom_${Date.now()}`,
        category: 'Custom'
      }]);
      setNewCustomItem({ name: '', quantity: 1, price: 0, unit: 'piece' });
    }
  };

  const removeCustomItem = (id) => {
    setCustomItems(customItems.filter(item => item.id !== id));
  };

  const allItems = [...selectedMaterials, ...customItems];
  const subtotal = allItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const designFee = subtotal * 0.15; // 15% design fee
  const laborCost = subtotal * 0.20; // 20% labor cost
  const contingency = subtotal * 0.05; // 5% contingency
  const gst = (subtotal + designFee + laborCost + contingency) * 0.18; // 18% GST
  const total = subtotal + designFee + laborCost + contingency + gst;

  const generateBOQ = () => {
    if (!selectedProject) {
      alert('Please select a project first');
      return;
    }
    if (allItems.length === 0) {
      alert('Please add at least one item to the BOQ');
      return;
    }
    alert('BOQ generated successfully! This would create a professional document for the client.');
  };

  return (
    <div className="boq-generator">
      <h2 className="text-3xl font-bold mb-6">BOQ Generator & Quotation Tool</h2>
      
      {/* Project Selection */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Select Project</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Project</label>
            <select 
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a project...</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.id} - {project.customerName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Load Project Details
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Material Catalog */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Material Catalog</h3>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search materials..." 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {materials.map(material => (
              <div key={material.id} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{material.name}</h4>
                    <p className="text-sm text-gray-500">{material.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rs.{material.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">per {material.unit}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Stock: {material.stock}</span>
                  <button 
                    onClick={() => addMaterial(material)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Add to BOQ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOQ Builder */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">BOQ Builder</h3>
          
          {/* Selected Materials */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Selected Materials</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {selectedMaterials.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                  <div className="flex-1">
                    <h5 className="font-medium">{item.name}</h5>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="number" 
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                      min="1"
                    />
                    <span className="text-sm text-gray-500">{item.unit}</span>
                    <span className="font-medium">Rs.{(item.price * item.quantity).toLocaleString()}</span>
                    <button 
                      onClick={() => removeMaterial(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Items */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Custom Items</h4>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <input 
                type="text" 
                placeholder="Item name"
                value={newCustomItem.name}
                onChange={(e) => setNewCustomItem({...newCustomItem, name: e.target.value})}
                className="px-3 py-2 border border-gray-300 rounded"
              />
              <input 
                type="number" 
                placeholder="Price"
                value={newCustomItem.price}
                onChange={(e) => setNewCustomItem({...newCustomItem, price: parseFloat(e.target.value) || 0})}
                className="px-3 py-2 border border-gray-300 rounded"
              />
              <input 
                type="number" 
                placeholder="Quantity"
                value={newCustomItem.quantity}
                onChange={(e) => setNewCustomItem({...newCustomItem, quantity: parseInt(e.target.value) || 1})}
                className="px-3 py-2 border border-gray-300 rounded"
              />
              <button 
                onClick={addCustomItem}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
              >
                Add Item
              </button>
            </div>
            
            <div className="space-y-2">
              {customItems.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-blue-50 p-3 rounded">
                  <div>
                    <h5 className="font-medium">{item.name}</h5>
                    <p className="text-sm text-gray-500">Custom Item</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{item.quantity} x Rs.{item.price}</span>
                    <span className="font-medium">Rs.{(item.price * item.quantity).toLocaleString()}</span>
                    <button 
                      onClick={() => removeCustomItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">Cost Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Materials Subtotal:</span>
                <span>Rs.{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Design Fee (15%):</span>
                <span>Rs.{designFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Labor Cost (20%):</span>
                <span>Rs.{laborCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Contingency (5%):</span>
                <span>Rs.{contingency.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%):</span>
                <span>Rs.{gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total Amount:</span>
                <span>Rs.{total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 mt-6">
            <button 
              onClick={generateBOQ}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
            >
              Generate BOQ
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
              Save Draft
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
              Share with Client
            </button>
          </div>
        </div>
      </div>

      {/* BOQ Templates */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">BOQ Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">2BHK Apartment</h4>
            <p className="text-sm text-gray-600 mb-3">Standard 2BHK interior package</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
              Load Template
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">3BHK Villa</h4>
            <p className="text-sm text-gray-600 mb-3">Premium villa interior package</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
              Load Template
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2">Office Space</h4>
            <p className="text-sm text-gray-600 mb-3">Commercial office interior package</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
              Load Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BOQGenerator;