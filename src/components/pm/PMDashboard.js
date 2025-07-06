
import React, { useState } from 'react';
import PMSidebar from './PMSidebar';
import MyProjectsDashboard from './MyProjectsDashboard';
import TaskManagement from './TaskManagement';
import BudgetTracking from './BudgetTracking';
import GanttChart from './GanttChart';
import ProcurementLogistics from './ProcurementLogistics';
import InternalCommunication from './InternalCommunication';
import QualityControl from './QualityControl';
import ResourceManagement from './ResourceManagement';
import ProjectReports from './ProjectReports';
import MilestoneTracking from './MilestoneTracking';
import { useAuth } from '../../App';

function PMDashboard() {
  const [activePage, setActivePage] = useState('my-projects');
  const { user, logout } = useAuth();

  const renderPage = () => {
    switch (activePage) {
      case 'my-projects':
        return <MyProjectsDashboard />;
      case 'tasks':
        return <TaskManagement />;
      case 'gantt':
        return <GanttChart />;
      case 'budget':
        return <BudgetTracking />;
      case 'procurement':
        return <ProcurementLogistics />;
      case 'quality':
        return <QualityControl />;
      case 'resources':
        return <ResourceManagement />;
      case 'reports':
        return <ProjectReports />;
      case 'communication':
        return <InternalCommunication />;
      case 'milestones':
        return <MilestoneTracking />;
      default:
        return <MyProjectsDashboard />;
    }
  };

  return (
    <div className="pm-dashboard flex min-h-screen bg-gray-100">
      <PMSidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Project Manager Dashboard</h1>
          <div className="flex items-center">
            <span className="mr-4">Welcome, {user.name}</span>
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </header>
        <main className="p-6 flex-1">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default PMDashboard;
