
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function GanttChart() {
  const projects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');
  const tasks = SAMPLE_DATA.tasks.filter(t => t.assignedBy === 'Rajesh Kumar');
  const [viewMode, setViewMode] = useState('projects');

  // Calculate timeline for visual representation
  const getTimelinePosition = (startDate, endDate, totalDuration) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const total = totalDuration;
    const duration = (end - start) / (1000 * 60 * 60 * 24); // days
    return {
      width: Math.max((duration / total) * 100, 5), // minimum 5% width
      left: 0 // simplified for demo
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Design Phase': return 'bg-purple-500';
      case 'Procurement': return 'bg-orange-500';
      case 'Installation': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="gantt-chart">
      <h2 className="text-3xl font-bold mb-6">Project Timeline & Gantt Chart</h2>
      
      {/* View Toggle */}
      <div className="mb-6 flex space-x-4">
        <button 
          onClick={() => setViewMode('projects')}
          className={`px-4 py-2 rounded-md ${viewMode === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Projects View
        </button>
        <button 
          onClick={() => setViewMode('tasks')}
          className={`px-4 py-2 rounded-md ${viewMode === 'tasks' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Tasks View
        </button>
      </div>

      {viewMode === 'projects' ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Project Timeline</h3>
          
          {/* Timeline Header */}
          <div className="mb-4 grid grid-cols-12 gap-2 text-xs text-gray-500 border-b pb-2">
            <div className="col-span-3">Project</div>
            <div className="col-span-2">Start Date</div>
            <div className="col-span-2">End Date</div>
            <div className="col-span-2">Progress</div>
            <div className="col-span-3">Timeline</div>
          </div>

          <div className="space-y-6">
            {projects.map(project => {
              const timeline = getTimelinePosition(project.startDate, project.expectedEnd, 120);
              return (
                <div key={project.id} className="border-b border-gray-100 pb-4">
                  <div className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-3">
                      <h4 className="font-medium">{project.id}</h4>
                      <p className="text-sm text-gray-500">{project.customerName}</p>
                    </div>
                    <div className="col-span-2 text-sm">{project.startDate}</div>
                    <div className="col-span-2 text-sm">{project.expectedEnd}</div>
                    <div className="col-span-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'Completed' ? 'bg-green-200 text-green-800' :
                        project.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                        'bg-yellow-200 text-yellow-800'
                      }`}>
                        {project.progress}%
                      </span>
                    </div>
                    <div className="col-span-3">
                      <div className="relative h-6 bg-gray-200 rounded-full">
                        <div 
                          className={`absolute top-0 left-0 h-full rounded-full ${getStatusColor(project.status)}`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Phases */}
                  <div className="mt-3 ml-4">
                    <div className="text-xs text-gray-600 mb-2">Current Phase: {project.phase}</div>
                    <div className="flex space-x-2">
                      <div className={`px-2 py-1 text-xs rounded ${project.phase === 'Design' ? 'bg-purple-200 text-purple-800' : 'bg-gray-200'}`}>
                        Design
                      </div>
                      <div className={`px-2 py-1 text-xs rounded ${project.phase === 'Procurement' ? 'bg-orange-200 text-orange-800' : 'bg-gray-200'}`}>
                        Procurement
                      </div>
                      <div className={`px-2 py-1 text-xs rounded ${project.phase === 'Civil Work' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200'}`}>
                        Civil Work
                      </div>
                      <div className={`px-2 py-1 text-xs rounded ${project.phase === 'Installation' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200'}`}>
                        Installation
                      </div>
                      <div className={`px-2 py-1 text-xs rounded ${project.phase === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-gray-200'}`}>
                        Handover
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Task Timeline</h3>
          
          {/* Task Timeline Header */}
          <div className="mb-4 grid grid-cols-12 gap-2 text-xs text-gray-500 border-b pb-2">
            <div className="col-span-4">Task</div>
            <div className="col-span-2">Project</div>
            <div className="col-span-2">Due Date</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Progress</div>
          </div>

          <div className="space-y-3">
            {tasks.map(task => (
              <div key={task.id} className="border-b border-gray-100 pb-3">
                <div className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-4">
                    <h4 className="font-medium text-sm">{task.title}</h4>
                    <p className="text-xs text-gray-500">{task.assignedTo}</p>
                  </div>
                  <div className="col-span-2 text-sm">{task.projectId}</div>
                  <div className="col-span-2 text-sm">{task.dueDate}</div>
                  <div className="col-span-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.status === 'Completed' ? 'bg-green-200 text-green-800' :
                      task.status === 'In Progress' ? 'bg-blue-200 text-blue-800' :
                      task.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-purple-200 text-purple-800'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          task.status === 'Completed' ? 'bg-green-500' :
                          task.status === 'In Progress' ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ 
                          width: `${task.status === 'Completed' ? 100 : 
                                   task.status === 'In Progress' ? (task.actualHours / task.estimatedHours) * 100 : 
                                   0}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Task Details */}
                <div className="mt-2 ml-4 text-xs text-gray-600">
                  <div className="flex space-x-4">
                    <span>Priority: {task.priority}</span>
                    <span>Category: {task.category}</span>
                    <span>Hours: {task.actualHours}/{task.estimatedHours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timeline Legend */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h4 className="font-medium mb-3">Timeline Legend</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
            <span>Completed</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
            <span>In Progress</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
            <span>Design Phase</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
            <span>Procurement</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
            <span>Installation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GanttChart;
