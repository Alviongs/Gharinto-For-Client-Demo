import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function ClientManagement() {
  const [selectedTab, setSelectedTab] = useState('active');
  const [selectedClient, setSelectedClient] = useState(null);
  
  const designerName = 'Priya Mehta';
  const designerProjects = SAMPLE_DATA.projects.filter(p => p.designerName === designerName);
  
  // Get unique clients from projects
  const clients = designerProjects.map(project => {
    const customer = SAMPLE_DATA.customers.find(c => c.name === project.customerName);
    return {
      ...customer,
      projectId: project.id,
      projectStatus: project.status,
      projectProgress: project.progress,
      projectBudget: project.budget,
      projectPhase: project.phase,
      lastContact: '2024-02-28', // Mock data
      satisfaction: Math.floor(Math.random() * 2) + 4, // 4-5 rating
      communicationPreference: ['Email', 'Phone', 'WhatsApp'][Math.floor(Math.random() * 3)]
    };
  });

  const activeClients = clients.filter(c => c.projectStatus === 'In Progress' || c.projectStatus === 'Design Phase');
  const completedClients = clients.filter(c => c.projectStatus === 'Completed');
  const allClients = clients;

  const getClientsByTab = () => {
    switch (selectedTab) {
      case 'active': return activeClients;
      case 'completed': return completedClients;
      case 'all': return allClients;
      default: return activeClients;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-200 text-green-800';
      case 'In Progress': return 'bg-blue-200 text-blue-800';
      case 'Design Phase': return 'bg-purple-200 text-purple-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getSatisfactionColor = (rating) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleContactClient = (client) => {
    alert(`Contacting ${client.name} via ${client.communicationPreference}...`);
  };

  const handleScheduleMeeting = (client) => {
    alert(`Meeting scheduled with ${client.name} for project ${client.projectId}`);
  };

  return (
    <div className="client-management">
      <h2 className="text-3xl font-bold mb-6">Client Relationship Management</h2>
      
      {/* Client Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Clients</h4>
          <p className="text-3xl font-bold text-blue-600">{allClients.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Active Projects</h4>
          <p className="text-3xl font-bold text-green-600">{activeClients.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Completed</h4>
          <p className="text-3xl font-bold text-purple-600">{completedClients.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Avg Satisfaction</h4>
          <p className="text-3xl font-bold text-yellow-600">
            {allClients.length > 0 ? (allClients.reduce((sum, c) => sum + c.satisfaction, 0) / allClients.length).toFixed(1) : '0'}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'active', label: 'Active Clients', count: activeClients.length },
              { id: 'completed', label: 'Completed Projects', count: completedClients.length },
              { id: 'all', label: 'All Clients', count: allClients.length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {getClientsByTab().map(client => (
              <div key={client.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                    <p className="text-sm text-gray-600">{client.location}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded ${getStatusColor(client.projectStatus)}`}>
                    {client.projectStatus}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Project:</span>
                    <span className="text-sm font-medium">{client.projectId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Budget:</span>
                    <span className="text-sm font-medium">Rs.{client.projectBudget.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Progress:</span>
                    <span className="text-sm font-medium">{client.projectProgress}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Phase:</span>
                    <span className="text-sm font-medium">{client.projectPhase}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Last Contact:</span>
                    <span className="text-sm font-medium">{client.lastContact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Satisfaction:</span>
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${getSatisfactionColor(client.satisfaction)}`}>
                        {client.satisfaction}
                      </span>
                      <span className="text-yellow-500 ml-1">★</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Project Progress</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${client.projectProgress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleContactClient(client)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded"
                  >
                    <i className="fas fa-phone mr-1"></i>
                    Contact
                  </button>
                  <button 
                    onClick={() => handleScheduleMeeting(client)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-3 rounded"
                  >
                    <i className="fas fa-calendar mr-1"></i>
                    Meeting
                  </button>
                  <button 
                    onClick={() => setSelectedClient(client)}
                    className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold">{selectedClient.name}</h3>
              <button 
                onClick={() => setSelectedClient(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Client Information</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-600">Email:</span> {selectedClient.email}</div>
                  <div><span className="text-gray-600">Phone:</span> {selectedClient.phone}</div>
                  <div><span className="text-gray-600">Location:</span> {selectedClient.location}</div>
                  <div><span className="text-gray-600">Property Type:</span> {selectedClient.propertyType}</div>
                  <div><span className="text-gray-600">Registration:</span> {selectedClient.registrationDate}</div>
                  <div><span className="text-gray-600">Preference:</span> {selectedClient.communicationPreference}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Project Details</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-600">Project ID:</span> {selectedClient.projectId}</div>
                  <div><span className="text-gray-600">Status:</span> {selectedClient.projectStatus}</div>
                  <div><span className="text-gray-600">Progress:</span> {selectedClient.projectProgress}%</div>
                  <div><span className="text-gray-600">Budget:</span> Rs.{selectedClient.projectBudget.toLocaleString()}</div>
                  <div><span className="text-gray-600">Current Phase:</span> {selectedClient.projectPhase}</div>
                  <div><span className="text-gray-600">Satisfaction:</span> {selectedClient.satisfaction}★</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Communication History</h4>
              <div className="bg-gray-50 p-4 rounded max-h-40 overflow-y-auto">
                <div className="space-y-2 text-sm">
                  <div className="border-b pb-2">
                    <div className="font-medium">Design Approval Meeting</div>
                    <div className="text-gray-600">2024-02-28 - Discussed final design changes</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="font-medium">Material Selection Call</div>
                    <div className="text-gray-600">2024-02-25 - Finalized material choices</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="font-medium">Initial Consultation</div>
                    <div className="text-gray-600">2024-02-20 - Project requirements discussion</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-6">
              <button 
                onClick={() => setSelectedClient(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button 
                onClick={() => handleContactClient(selectedClient)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Contact Client
              </button>
              <button 
                onClick={() => handleScheduleMeeting(selectedClient)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Client Management Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-plus mr-2"></i>
            Add New Client
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-calendar-alt mr-2"></i>
            Schedule Follow-up
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-chart-bar mr-2"></i>
            Client Analytics
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center">
            <i className="fas fa-file-export mr-2"></i>
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientManagement;