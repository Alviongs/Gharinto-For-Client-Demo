
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function TaskManagement() {
  // Filter tasks assigned by the current PM (Rajesh Kumar)
  const tasks = SAMPLE_DATA.tasks.filter(t => t.assignedBy === 'Rajesh Kumar');
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="task-management">
      <h2 className="text-3xl font-bold mb-6">Task Management</h2>
      <div className="mb-4">
        <button onClick={() => setFilter('all')} className={`mr-2 px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>All</button>
        <button onClick={() => setFilter('pending')} className={`mr-2 px-4 py-2 rounded-md ${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}>Pending</button>
        <button onClick={() => setFilter('completed')} className={`mr-2 px-4 py-2 rounded-md ${filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>Completed</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Task</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Due Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredTasks.map(task => (
              <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{task.title}</td>
                <td className="py-3 px-6 text-left">{task.projectId}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    task.status === 'Completed' ? 'bg-green-200 text-green-800' :
                    task.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                    task.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {task.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskManagement;
