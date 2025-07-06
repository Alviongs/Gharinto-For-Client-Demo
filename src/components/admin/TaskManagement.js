import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function TaskManagement() {
  const { tasks } = SAMPLE_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-200 text-green-600';
      case 'In Progress': return 'bg-blue-200 text-blue-600';
      case 'Pending': return 'bg-yellow-200 text-yellow-600';
      case 'Scheduled': return 'bg-purple-200 text-purple-600';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-200 text-red-600';
      case 'Medium': return 'bg-orange-200 text-orange-600';
      case 'Low': return 'bg-green-200 text-green-600';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  return (
    <div className="task-management">
      <h3 className="text-2xl font-semibold mb-6">Task Management</h3>
      
      {/* Task Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Tasks</h4>
          <p className="text-3xl font-bold text-gray-800">{tasks.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Completed</h4>
          <p className="text-3xl font-bold text-green-600">{tasks.filter(t => t.status === 'Completed').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">In Progress</h4>
          <p className="text-3xl font-bold text-blue-600">{tasks.filter(t => t.status === 'In Progress').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Overdue</h4>
          <p className="text-3xl font-bold text-red-600">{tasks.filter(t => new Date(t.dueDate) < new Date() && t.status !== 'Completed').length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Create Task
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Bulk Assign
            </button>
          </div>
          <div className="flex space-x-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Projects</option>
              <option value="PR001">PR001</option>
              <option value="PR002">PR002</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Task</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-left">Assigned To</th>
              <th className="py-3 px-6 text-center">Priority</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Due Date</th>
              <th className="py-3 px-6 text-center">Progress</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {tasks.map(task => (
              <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <div>
                    <div className="font-medium">{task.title}</div>
                    <div className="text-gray-500 text-xs">{task.category}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{task.projectId}</td>
                <td className="py-3 px-6 text-left">{task.assignedTo}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className={new Date(task.dueDate) < new Date() && task.status !== 'Completed' ? 'text-red-600 font-bold' : ''}>
                    {new Date(task.dueDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="text-sm">
                    {task.actualHours}h / {task.estimatedHours}h
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="View Details">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" title="Mark Complete">
                      <i className="fas fa-check"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskManagement;