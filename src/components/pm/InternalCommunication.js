
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function InternalCommunication() {
  const [messages, setMessages] = useState(SAMPLE_DATA.communications.filter(m => m.toUser === 'Rajesh Kumar' || m.fromUser === 'Rajesh Kumar'));
  const [newMessage, setNewMessage] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('Admin');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const msg = {
      id: `COMM${messages.length + 100}`,
      projectId: 'PR001',
      fromUser: 'Rajesh Kumar',
      toUser: selectedRecipient,
      type: 'Message',
      subject: 'Project Update',
      message: newMessage,
      timestamp: new Date().toISOString(),
      status: 'Read',
      priority: 'Medium'
    };

    setMessages([...messages, msg]);
    setNewMessage('');
  };

  const projects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');
  const teamMembers = ['Admin', 'Priya Mehta', 'Anita Sharma', 'Vikash Singh'];

  return (
    <div className="internal-communication">
      <h2 className="text-3xl font-bold mb-6">Internal Communication Hub</h2>
      
      {/* Communication Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Messages</h4>
          <p className="text-3xl font-bold text-blue-600">{messages.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Unread</h4>
          <p className="text-3xl font-bold text-red-600">{messages.filter(m => m.status === 'Unread').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">High Priority</h4>
          <p className="text-3xl font-bold text-orange-600">{messages.filter(m => m.priority === 'High').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Today</h4>
          <p className="text-3xl font-bold text-green-600">{messages.filter(m => new Date(m.timestamp).toDateString() === new Date().toDateString()).length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Message Thread */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Message Thread</h3>
          <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-md">
            {messages.map(msg => (
              <div key={msg.id} className={`mb-4 p-3 rounded-lg max-w-xs ${
                msg.fromUser === 'Rajesh Kumar' ? 'bg-blue-500 text-white ml-auto' : 'bg-white border text-gray-800'
              }`}>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold text-sm">{msg.fromUser}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    msg.priority === 'High' ? 'bg-red-200 text-red-800' :
                    msg.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {msg.priority}
                  </span>
                </div>
                <p className="text-sm mb-1">{msg.subject}</p>
                <p className="text-sm">{msg.message}</p>
                <p className="text-xs mt-2 opacity-75">
                  {new Date(msg.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          
          {/* Send Message */}
          <div className="space-y-3">
            <div className="flex space-x-2">
              <select 
                value={selectedRecipient}
                onChange={(e) => setSelectedRecipient(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                {teamMembers.map(member => (
                  <option key={member} value={member}>{member}</option>
                ))}
              </select>
            </div>
            <div className="flex">
              <input 
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 p-2 border rounded-l-md"
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Communications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Project Communications</h3>
          <div className="space-y-4">
            {messages.slice(0, 8).map(msg => (
              <div key={msg.id} className="border-b border-gray-200 pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm">{msg.fromUser}</span>
                      <i className="fas fa-arrow-right text-gray-400 text-xs"></i>
                      <span className="text-sm text-gray-600">{msg.toUser}</span>
                    </div>
                    <p className="text-sm font-medium mt-1">{msg.subject}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate">{msg.message}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs text-gray-500">{msg.projectId}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        msg.type === 'Alert' ? 'bg-red-200 text-red-800' :
                        msg.type === 'Update' ? 'bg-blue-200 text-blue-800' :
                        'bg-gray-200 text-gray-800'
                      }`}>
                        {msg.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(msg.timestamp).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternalCommunication;
