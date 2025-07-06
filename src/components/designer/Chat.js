
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState('clients');

  // Mock chat data for designers
  const chatData = {
    clients: [
      { id: 1, name: 'Sharma Family', lastMessage: 'Can we discuss the kitchen design?', time: '2 min ago', unread: 2, avatar: 'SF', status: 'online' },
      { id: 2, name: 'Gupta Residence', lastMessage: 'The 3D renders look amazing!', time: '15 min ago', unread: 0, avatar: 'GR', status: 'offline' },
      { id: 3, name: 'Singh Mansion', lastMessage: 'When can we schedule the site visit?', time: '1 hour ago', unread: 1, avatar: 'SM', status: 'online' }
    ],
    team: [
      { id: 4, name: 'Rajesh Kumar (PM)', lastMessage: 'Material delivery scheduled for tomorrow', time: '30 min ago', unread: 0, avatar: 'RK', status: 'online' },
      { id: 5, name: 'Vikash Singh (Procurement)', lastMessage: 'BOQ approved, proceeding with orders', time: '2 hours ago', unread: 1, avatar: 'VS', status: 'online' }
    ]
  };

  const messages = selectedChat ? [
    { id: 1, sender: 'client', message: 'Hi, I wanted to discuss some changes to the kitchen design', time: '10:30 AM', avatar: selectedChat.avatar },
    { id: 2, sender: 'me', message: 'Of course! I\'d be happy to help. What changes did you have in mind?', time: '10:32 AM' },
    { id: 3, sender: 'client', message: 'We\'d like to change the cabinet color from white to a warm wood tone', time: '10:35 AM', avatar: selectedChat.avatar },
    { id: 4, sender: 'me', message: 'That\'s a great choice! Wood tones will add warmth to the space. Let me prepare some options for you.', time: '10:37 AM' }
  ] : [];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container bg-white rounded-lg shadow-lg h-[600px] flex">
      {/* Chat List Sidebar */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Messages</h3>
          
          {/* Tabs */}
          <div className="flex mt-3 space-x-1">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeTab === 'clients' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Clients ({chatData.clients.length})
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeTab === 'team' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Team ({chatData.team.length})
            </button>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chatData[activeTab].map(chat => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedChat?.id === chat.id ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {chat.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    chat.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">{chat.name}</p>
                    <p className="text-xs text-gray-500">{chat.time}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {selectedChat.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedChat.name}</h4>
                  <p className="text-sm text-gray-500">
                    {selectedChat.status === 'online' ? 'Online' : 'Last seen 2 hours ago'}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.sender === 'me' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {message.sender !== 'me' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {message.avatar}
                      </div>
                    )}
                    <div className={`px-4 py-2 rounded-lg ${
                      message.sender === 'me' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.message}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a client or team member to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
