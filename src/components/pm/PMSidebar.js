
import React from 'react';

function PMSidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'my-projects', label: 'My Projects Dashboard', icon: 'fas fa-briefcase' },
    { id: 'tasks', label: 'Task Management', icon: 'fas fa-tasks' },
    { id: 'gantt', label: 'Timeline & Gantt Chart', icon: 'fas fa-stream' },
    { id: 'budget', label: 'Budget & Financial Tracking', icon: 'fas fa-dollar-sign' },
    { id: 'procurement', label: 'Procurement & Logistics', icon: 'fas fa-dolly' },
    { id: 'quality', label: 'Quality Control', icon: 'fas fa-check-circle' },
    { id: 'resources', label: 'Resource Management', icon: 'fas fa-users-cog' },
    { id: 'kanban', label: 'Kanban Board', icon: 'fas fa-columns' },
    { id: 'communication', label: 'Team Communication', icon: 'fas fa-comments' },
    { id: 'milestones', label: 'Milestone Tracking', icon: 'fas fa-flag-checkered' },
  ];

  return (
    <div className="pm-sidebar w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">PM Dashboard</h2>
      </div>
      <nav className="flex-1 p-2">
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActivePage(item.id)}
                className={`w-full text-left p-3 my-1 rounded-md flex items-center transition-colors ${
                  activePage === item.id
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}>
                <i className={`${item.icon} mr-3`}></i>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PMSidebar;
