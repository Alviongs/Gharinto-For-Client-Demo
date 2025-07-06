
import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function CustomerCommunication() {
  const customerName = 'Amit Kumar'; // Hardcoded for demo
  const [messages, setMessages] = useState(SAMPLE_DATA.communications.filter(m => m.to === customerName || m.from === customerName));
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const msg = {
      id: messages.length + 1,
      from: customerName,
      to: 'Rakesh Sharma', // Simplified for demo
      message: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, msg]);
    setNewMessage('');
  };

  return (
    <div className="customer-communication">
      <h2 className="text-3xl font-bold mb-6">Communication Hub</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-md">
          {messages.map(msg => (
            <div key={msg.id} className={`mb-4 p-3 rounded-lg max-w-xs ${
              msg.from === customerName ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-300 text-gray-800'
            }`}>
              <p className="font-semibold">{msg.from}</p>
              <p>{msg.message}</p>
              <p className="text-xs text-right mt-1">{msg.timestamp}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input 
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded-l-md"
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCommunication;
