import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function CommunicationHub() {
  const { communications } = SAMPLE_DATA;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Read': return 'bg-green-200 text-green-600';
      case 'Unread': return 'bg-red-200 text-red-600';
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

  const getTypeColor = (type) => {
    switch (type) {
      case 'Message': return 'bg-blue-200 text-blue-600';
      case 'Response': return 'bg-green-200 text-green-600';
      case 'Update': return 'bg-purple-200 text-purple-600';
      case 'Alert': return 'bg-red-200 text-red-600';
      case 'Feedback': return 'bg-yellow-200 text-yellow-600';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  return (
    <div className="communication-hub">
      <h3 className="text-2xl font-semibold mb-6">Communication Hub</h3>
      
      {/* Communication Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Messages</h4>
          <p className="text-3xl font-bold text-gray-800">{communications.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Unread</h4>
          <p className="text-3xl font-bold text-red-600">{communications.filter(c => c.status === 'Unread').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">High Priority</h4>
          <p className="text-3xl font-bold text-orange-600">{communications.filter(c => c.priority === 'High').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Today's Messages</h4>
          <p className="text-3xl font-bold text-blue-600">{communications.filter(c => new Date(c.timestamp).toDateString() === new Date().toDateString()).length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Send Broadcast
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Mark All Read
            </button>
          </div>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Projects</option>
              <option value="PR001">PR001</option>
              <option value="PR002">PR002</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Types</option>
              <option value="Message">Message</option>
              <option value="Alert">Alert</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
        </div>
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">From</th>
              <th className="py-3 px-6 text-left">To</th>
              <th className="py-3 px-6 text-left">Subject</th>
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-center">Type</th>
              <th className="py-3 px-6 text-center">Priority</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Timestamp</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {communications.map(comm => (
              <tr key={comm.id} className={`border-b border-gray-200 hover:bg-gray-100 ${comm.status === 'Unread' ? 'bg-blue-50' : ''}`}>
                <td className="py-3 px-6 text-left">
                  <div className="font-medium">{comm.fromUser}</div>
                </td>
                <td className="py-3 px-6 text-left">{comm.toUser}</td>
                <td className="py-3 px-6 text-left">
                  <div>
                    <div className="font-medium">{comm.subject}</div>
                    <div className="text-gray-500 text-xs truncate max-w-xs">{comm.message}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{comm.projectId}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getTypeColor(comm.type)}`}>
                    {comm.type}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getPriorityColor(comm.priority)}`}>
                    {comm.priority}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(comm.status)}`}>
                    {comm.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="text-xs">
                    {new Date(comm.timestamp).toLocaleDateString()}
                    <br />
                    {new Date(comm.timestamp).toLocaleTimeString()}
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="View Full Message">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" title="Reply">
                      <i className="fas fa-reply"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="Forward">
                      <i className="fas fa-share"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110" title="Archive">
                      <i className="fas fa-archive"></i>
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

export default CommunicationHub;