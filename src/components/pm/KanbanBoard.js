
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function KanbanBoard() {
  const [draggedTask, setDraggedTask] = useState(null);

  // Kanban columns
  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-gray-100', count: 0 },
    { id: 'in-progress', title: 'In Progress', color: 'bg-blue-100', count: 0 },
    { id: 'review', title: 'Review', color: 'bg-yellow-100', count: 0 },
    { id: 'completed', title: 'Completed', color: 'bg-green-100', count: 0 }
  ];

  // Mock tasks data organized by status
  const tasks = {
    'todo': [
      { id: 'TASK007', title: 'Kitchen Cabinet Installation', project: 'PR001', assignee: 'Carpentry Team', priority: 'High', dueDate: '2024-03-20', tags: ['Installation'] },
      { id: 'TASK008', title: 'Bathroom Tile Work', project: 'PR002', assignee: 'Tile Team', priority: 'Medium', dueDate: '2024-03-22', tags: ['Construction'] }
    ],
    'in-progress': [
      { id: 'TASK002', title: 'Electrical Wiring - Living Room', project: 'PR001', assignee: 'Electrical Team B', priority: 'High', dueDate: '2024-03-10', tags: ['Electrical'] },
      { id: 'TASK005', title: 'Material Procurement', project: 'PR004', assignee: 'Vikash Singh', priority: 'High', dueDate: '2024-03-01', tags: ['Procurement'] }
    ],
    'review': [
      { id: 'TASK004', title: 'Design Approval Meeting', project: 'PR002', assignee: 'Anita Sharma', priority: 'High', dueDate: '2024-03-05', tags: ['Design'] }
    ],
    'completed': [
      { id: 'TASK001', title: 'Site Measurement & Survey', project: 'PR001', assignee: 'Site Team A', priority: 'High', dueDate: '2024-01-05', tags: ['Pre-Construction'] },
      { id: 'TASK006', title: 'Final Quality Check', project: 'PR005', assignee: 'Quality Team', priority: 'High', dueDate: '2024-02-28', tags: ['Quality Control'] }
    ]
  };

  // Update column counts
  columns.forEach(column => {
    column.count = tasks[column.id]?.length || 0;
  });

  const handleDragStart = (e, task, columnId) => {
    setDraggedTask({ task, sourceColumn: columnId });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();
    if (draggedTask && draggedTask.sourceColumn !== targetColumnId) {
      // In a real app, you would update the task status here
      console.log(`Moving task ${draggedTask.task.id} from ${draggedTask.sourceColumn} to ${targetColumnId}`);
    }
    setDraggedTask(null);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTagColor = (tag) => {
    const colors = {
      'Installation': 'bg-purple-100 text-purple-800',
      'Construction': 'bg-orange-100 text-orange-800',
      'Electrical': 'bg-blue-100 text-blue-800',
      'Procurement': 'bg-indigo-100 text-indigo-800',
      'Design': 'bg-pink-100 text-pink-800',
      'Pre-Construction': 'bg-gray-100 text-gray-800',
      'Quality Control': 'bg-green-100 text-green-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="kanban-board">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Project Kanban Board</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Add Task
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
            Filter
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map(column => (
          <div
            key={column.id}
            className={`${column.color} rounded-lg p-4 min-h-[600px]`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            {/* Column Header */}
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-800">{column.title}</h4>
              <span className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-600">
                {column.count}
              </span>
            </div>

            {/* Tasks */}
            <div className="space-y-3">
              {tasks[column.id]?.map(task => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, column.id)}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-move hover:shadow-md transition-shadow"
                >
                  {/* Task Header */}
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-gray-500">{task.id}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>

                  {/* Task Title */}
                  <h5 className="font-medium text-gray-900 mb-2 line-clamp-2">{task.title}</h5>

                  {/* Project & Assignee */}
                  <div className="text-sm text-gray-600 mb-3">
                    <div>Project: {task.project}</div>
                    <div>Assignee: {task.assignee}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {task.tags.map(tag => (
                      <span key={tag} className={`text-xs px-2 py-1 rounded-full ${getTagColor(tag)}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Due Date */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                    <div className="flex space-x-1">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Task Button */}
              <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors">
                + Add Task
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Board Statistics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-medium text-gray-600 mb-2">Total Tasks</h5>
          <p className="text-2xl font-bold text-gray-900">
            {Object.values(tasks).reduce((sum, taskList) => sum + taskList.length, 0)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-medium text-gray-600 mb-2">In Progress</h5>
          <p className="text-2xl font-bold text-blue-600">{tasks['in-progress'].length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-medium text-gray-600 mb-2">Completed</h5>
          <p className="text-2xl font-bold text-green-600">{tasks['completed'].length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h5 className="font-medium text-gray-600 mb-2">Completion Rate</h5>
          <p className="text-2xl font-bold text-purple-600">
            {Math.round((tasks['completed'].length / Object.values(tasks).reduce((sum, taskList) => sum + taskList.length, 0)) * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;
