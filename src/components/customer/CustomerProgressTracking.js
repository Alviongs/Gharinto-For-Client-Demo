import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { useAuth } from '../../App';

function CustomerProgressTracking() {
  const { user } = useAuth();
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  
  const customerName = user?.name || 'Sharma Family';
  const project = SAMPLE_DATA.projects.find(p => p.customerName === customerName);
  const projectTasks = SAMPLE_DATA.tasks.filter(t => t.projectId === project?.id);

  // Mock live progress updates with photos and videos
  const progressUpdates = [
    {
      id: 'UPD001',
      phase: 'Design Phase',
      title: 'Initial Design Concepts Ready',
      description: '3D visualizations and floor plans have been completed for your review.',
      date: '2024-01-15',
      time: '10:30 AM',
      type: 'milestone',
      status: 'completed',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', caption: '3D Living Room Design' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1633944095397-878622ebc01c', caption: 'Master Bedroom Layout' }
      ],
      team: 'Design Team',
      nextAction: 'Client approval required'
    },
    {
      id: 'UPD002',
      phase: 'Design Phase',
      title: 'Design Approved by Client',
      description: 'Thank you for approving the designs! Moving to material procurement phase.',
      date: '2024-01-20',
      time: '2:15 PM',
      type: 'approval',
      status: 'completed',
      media: [],
      team: 'Project Manager',
      nextAction: 'Material procurement begins'
    },
    {
      id: 'UPD003',
      phase: 'Procurement',
      title: 'Materials Ordered',
      description: 'All materials as per BOQ have been ordered from verified suppliers.',
      date: '2024-02-01',
      time: '11:00 AM',
      type: 'procurement',
      status: 'completed',
      media: [
        { type: 'document', url: '#', caption: 'Purchase Orders Summary' }
      ],
      team: 'Procurement Team',
      nextAction: 'Awaiting material delivery'
    },
    {
      id: 'UPD004',
      phase: 'Procurement',
      title: 'Materials Delivered to Site',
      description: 'First batch of materials including flooring and paint have arrived.',
      date: '2024-02-10',
      time: '9:45 AM',
      type: 'delivery',
      status: 'completed',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d', caption: 'Materials at Site' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64', caption: 'Quality Check in Progress' }
      ],
      team: 'Site Supervisor',
      nextAction: 'Quality inspection completed'
    },
    {
      id: 'UPD005',
      phase: 'Civil Work',
      title: 'Electrical Work Started',
      description: 'Electrical wiring work has commenced as per approved layout.',
      date: '2024-02-15',
      time: '8:30 AM',
      type: 'work-start',
      status: 'in-progress',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e', caption: 'Electrical Wiring in Progress' }
      ],
      team: 'Electrical Team',
      nextAction: 'Wiring completion expected by Feb 28'
    },
    {
      id: 'UPD006',
      phase: 'Civil Work',
      title: 'Daily Progress Update',
      description: 'Electrical work 70% complete. Plumbing work to start tomorrow.',
      date: '2024-02-25',
      time: '6:00 PM',
      type: 'daily-update',
      status: 'in-progress',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd', caption: 'Living Room Wiring' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64', caption: 'Kitchen Electrical Points' }
      ],
      team: 'Site Supervisor',
      nextAction: 'Plumbing work starts tomorrow'
    },
    {
      id: 'UPD007',
      phase: 'Civil Work',
      title: 'Weekly Progress Report',
      description: 'Week 3 summary: Electrical 85% done, plumbing started, painting prep in progress.',
      date: '2024-03-01',
      time: '5:30 PM',
      type: 'weekly-report',
      status: 'in-progress',
      media: [
        { type: 'video', url: '#', caption: 'Weekly Progress Walkthrough' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e', caption: 'Overall Site Progress' }
      ],
      team: 'Project Manager',
      nextAction: 'Continue with plumbing and painting'
    }
  ];

  // Project phases with progress
  const projectPhases = [
    {
      name: 'Design Phase',
      status: 'completed',
      progress: 100,
      startDate: '2024-01-01',
      endDate: '2024-01-20',
      duration: '20 days',
      description: 'Design conceptualization and client approval'
    },
    {
      name: 'Procurement',
      status: 'completed',
      progress: 100,
      startDate: '2024-01-21',
      endDate: '2024-02-10',
      duration: '20 days',
      description: 'Material sourcing and delivery'
    },
    {
      name: 'Civil Work',
      status: 'in-progress',
      progress: 75,
      startDate: '2024-02-11',
      endDate: '2024-03-15',
      duration: '33 days',
      description: 'Electrical, plumbing, and structural work'
    },
    {
      name: 'Installation',
      status: 'upcoming',
      progress: 0,
      startDate: '2024-03-16',
      endDate: '2024-04-05',
      duration: '20 days',
      description: 'Furniture and fixture installation'
    },
    {
      name: 'Finishing',
      status: 'upcoming',
      progress: 0,
      startDate: '2024-04-06',
      endDate: '2024-04-15',
      duration: '10 days',
      description: 'Final touches and handover'
    }
  ];

  const filteredUpdates = selectedPhase === 'all' ? 
    progressUpdates : 
    progressUpdates.filter(update => update.phase === selectedPhase);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-200 text-green-800';
      case 'in-progress': return 'bg-blue-200 text-blue-800';
      case 'upcoming': return 'bg-gray-200 text-gray-800';
      case 'delayed': return 'bg-red-200 text-red-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getPhaseColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'upcoming': return 'bg-gray-400';
      case 'delayed': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  const getUpdateIcon = (type) => {
    switch (type) {
      case 'milestone': return 'fas fa-flag text-purple-500';
      case 'approval': return 'fas fa-check-circle text-green-500';
      case 'procurement': return 'fas fa-shopping-cart text-blue-500';
      case 'delivery': return 'fas fa-truck text-orange-500';
      case 'work-start': return 'fas fa-play-circle text-blue-600';
      case 'daily-update': return 'fas fa-clock text-gray-500';
      case 'weekly-report': return 'fas fa-chart-line text-purple-600';
      default: return 'fas fa-info-circle text-gray-500';
    }
  };

  if (!project) {
    return (
      <div className="customer-progress">
        <h2 className="text-3xl font-bold mb-6">Live Progress Tracking</h2>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <i className="fas fa-chart-line text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Active Project</h3>
          <p className="text-gray-500">You need an active project to track progress.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-progress">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Live Progress Tracking</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-video mr-2"></i>Schedule Site Visit
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-download mr-2"></i>Progress Report
          </button>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Project: {project.id}</h3>
          <span className="text-sm text-gray-500">Last updated: 2 hours ago</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{project.progress}%</div>
            <div className="text-sm text-gray-600">Overall Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">
              {Math.round((new Date() - new Date(project.startDate)) / (1000 * 60 * 60 * 24))}
            </div>
            <div className="text-sm text-gray-600">Days Elapsed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">
              {Math.round((new Date(project.expectedEnd) - new Date()) / (1000 * 60 * 60 * 24))}
            </div>
            <div className="text-sm text-gray-600">Days Remaining</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{progressUpdates.length}</div>
            <div className="text-sm text-gray-600">Total Updates</div>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Phase Timeline */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-6">Project Timeline</h3>
        <div className="space-y-4">
          {projectPhases.map((phase, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                <div className={`w-6 h-6 rounded-full ${getPhaseColor(phase.status)}`}>
                  {phase.status === 'completed' && (
                    <i className="fas fa-check text-white text-xs flex items-center justify-center h-full"></i>
                  )}
                  {phase.status === 'in-progress' && (
                    <div className="w-3 h-3 bg-white rounded-full mx-auto mt-1.5"></div>
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{phase.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(phase.status)}`}>
                    {phase.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{phase.description}</p>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>{phase.startDate} - {phase.endDate}</span>
                  <span>{phase.duration}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getPhaseColor(phase.status)}`}
                    style={{ width: `${phase.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Updates */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Live Progress Updates</h3>
          <div className="flex space-x-4">
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Phases</option>
              <option value="Design Phase">Design Phase</option>
              <option value="Procurement">Procurement</option>
              <option value="Civil Work">Civil Work</option>
              <option value="Installation">Installation</option>
              <option value="Finishing">Finishing</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {filteredUpdates.map((update, index) => (
            <div key={update.id} className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <i className={getUpdateIcon(update.type)}></i>
                    <div>
                      <h4 className="font-semibold">{update.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{update.phase}</span>
                        <span>•</span>
                        <span>{update.date} at {update.time}</span>
                        <span>•</span>
                        <span>{update.team}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(update.status)}`}>
                    {update.status}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{update.description}</p>
                
                {update.media.length > 0 && (
                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Attachments:</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {update.media.map((media, idx) => (
                        <div key={idx} className="relative">
                          {media.type === 'image' && (
                            <div 
                              className="w-full h-24 bg-cover bg-center rounded-lg cursor-pointer hover:opacity-80"
                              style={{ backgroundImage: `url(${media.url})` }}
                              onClick={() => setSelectedUpdate({...update, selectedMedia: media})}
                            >
                              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg flex items-center justify-center">
                                <i className="fas fa-expand text-white opacity-0 hover:opacity-100"></i>
                              </div>
                            </div>
                          )}
                          {media.type === 'video' && (
                            <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300">
                              <i className="fas fa-play-circle text-3xl text-gray-600"></i>
                            </div>
                          )}
                          {media.type === 'document' && (
                            <div className="w-full h-24 bg-blue-50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-100">
                              <i className="fas fa-file-pdf text-3xl text-blue-600"></i>
                            </div>
                          )}
                          <p className="text-xs text-gray-600 mt-1 text-center">{media.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {update.nextAction && (
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <i className="fas fa-arrow-right mr-2"></i>
                      <strong>Next:</strong> {update.nextAction}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Modal */}
      {selectedUpdate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedUpdate(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full m-4" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedUpdate.title}</h3>
                <button onClick={() => setSelectedUpdate(null)} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              {selectedUpdate.selectedMedia && (
                <div className="mb-4">
                  <img 
                    src={selectedUpdate.selectedMedia.url} 
                    alt={selectedUpdate.selectedMedia.caption}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <p className="text-center text-gray-600 mt-2">{selectedUpdate.selectedMedia.caption}</p>
                </div>
              )}
              
              <div className="text-sm text-gray-600">
                <p><strong>Date:</strong> {selectedUpdate.date} at {selectedUpdate.time}</p>
                <p><strong>Phase:</strong> {selectedUpdate.phase}</p>
                <p><strong>Team:</strong> {selectedUpdate.team}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerProgressTracking;