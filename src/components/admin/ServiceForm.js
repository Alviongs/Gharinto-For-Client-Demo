
import React, { useState } from 'react';

function ServiceForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold">Add New Service</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times"></i>
            </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mb-4">
            <div>
              <label className="block text-gray-700">Service Name</label>
              <input type="text" name="name" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea name="description" onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input type="number" name="price" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceForm;
