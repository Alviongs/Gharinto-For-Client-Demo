
import React, { useState } from 'react';

function TaskForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    project: '',
    assignedTo: '',
    dueDate: '',
    priority: 'Medium'
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
            <h3 className="text-2xl font-semibold">Add New Task</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times"></i>
            </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mb-4">
            <div>
              <label className="block text-gray-700">Title</label>
              <input type="text" name="title" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Project</label>
              <select name="project" onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option value="">Select Project</option>
                {/* Add project options here */}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Assigned To</label>
              <select name="assignedTo" onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option value="">Select User</option>
                {/* Add user options here */}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Due Date</label>
              <input type="date" name="dueDate" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Priority</label>
              <select name="priority" onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
