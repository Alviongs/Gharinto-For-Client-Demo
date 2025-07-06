import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function LeadMarketplace() {
  const [filter, setFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState(null);
  
  // Get available leads (not assigned or assigned to current designer)
  const designerName = 'Priya Mehta';
  const availableLeads = SAMPLE_DATA.leads.filter(lead => 
    lead.assignedTo === null || lead.assignedTo === designerName
  );
  
  const filteredLeads = filter === 'all' ? availableLeads : 
    availableLeads.filter(lead => lead.status === filter);

  const getBudgetColor = (budget) => {
    const budgetValue = parseInt(budget.split('-')[0]);
    if (budgetValue >= 10) return 'bg-green-200 text-green-800';
    if (budgetValue >= 5) return 'bg-yellow-200 text-yellow-800';
    return 'bg-blue-200 text-blue-800';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-200 text-red-800';
      case 'Medium': return 'bg-orange-200 text-orange-800';
      case 'Low': return 'bg-green-200 text-green-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const handleAcceptLead = (leadId) => {
    alert(`Lead ${leadId} accepted! This would deduct credits from your wallet.`);
  };

  return (
    <div className="lead-marketplace">
      <h2 className="text-3xl font-bold mb-6">Lead Marketplace</h2>
      
      {/* Lead Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Available Leads</h4>
          <p className="text-3xl font-bold text-blue-600">{availableLeads.filter(l => l.status === 'New').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">My Leads</h4>
          <p className="text-3xl font-bold text-green-600">{availableLeads.filter(l => l.assignedTo === designerName).length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">High Value</h4>
          <p className="text-3xl font-bold text-purple-600">{availableLeads.filter(l => l.budget.includes('10-') || l.budget.includes('15-')).length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Credits Required</h4>
          <p className="text-3xl font-bold text-orange-600">5-15</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Leads</option>
              <option value="New">New Leads</option>
              <option value="Assigned">My Leads</option>
              <option value="In Discussion">In Discussion</option>
            </select>
          </div>
          <div className="flex space-x-2 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Refresh Leads
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Purchase Credits
            </button>
          </div>
        </div>
      </div>

      {/* Lead Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLeads.map(lead => (
          <div key={lead.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{lead.customer}</h3>
                <p className="text-gray-600">{lead.location}</p>
              </div>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 text-xs rounded ${getBudgetColor(lead.budget)}`}>
                  {lead.budget}
                </span>
                <span className={`px-2 py-1 text-xs rounded ${getPriorityColor(lead.priority)}`}>
                  {lead.priority}
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Project Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Property Type:</span>
                  <p className="font-medium">{lead.propertyType}</p>
                </div>
                <div>
                  <span className="text-gray-500">Area:</span>
                  <p className="font-medium">{lead.area}</p>
                </div>
                <div>
                  <span className="text-gray-500">Source:</span>
                  <p className="font-medium">{lead.source}</p>
                </div>
                <div>
                  <span className="text-gray-500">Contact:</span>
                  <p className="font-medium">{lead.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Requirements</h4>
              <p className="text-sm text-gray-600">{lead.requirements}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Credits: {lead.priority === 'High' ? '15' : lead.priority === 'Medium' ? '10' : '5'}
              </div>
              <div className="flex space-x-2">
                {lead.assignedTo === designerName ? (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                    Assigned to You
                  </span>
                ) : lead.status === 'New' ? (
                  <>
                    <button 
                      onClick={() => setSelectedLead(lead)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleAcceptLead(lead.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Accept Lead
                    </button>
                  </>
                ) : (
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm">
                    {lead.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold">{selectedLead.customer}</h3>
              <button 
                onClick={() => setSelectedLead(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">Project Information</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-500">Location:</span> {selectedLead.location}</div>
                  <div><span className="text-gray-500">Budget:</span> {selectedLead.budget}</div>
                  <div><span className="text-gray-500">Property:</span> {selectedLead.propertyType}</div>
                  <div><span className="text-gray-500">Area:</span> {selectedLead.area}</div>
                  <div><span className="text-gray-500">Priority:</span> {selectedLead.priority}</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Contact Details</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-500">Phone:</span> {selectedLead.phone}</div>
                  <div><span className="text-gray-500">Source:</span> {selectedLead.source}</div>
                  <div><span className="text-gray-500">Lead ID:</span> {selectedLead.id}</div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Detailed Requirements</h4>
              <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded">
                {selectedLead.requirements}
              </p>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setSelectedLead(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  handleAcceptLead(selectedLead.id);
                  setSelectedLead(null);
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Accept Lead (Credits: {selectedLead.priority === 'High' ? '15' : selectedLead.priority === 'Medium' ? '10' : '5'})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lead Tips */}
      <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Lead Marketplace Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <h4 className="font-medium mb-2">How to Accept Leads:</h4>
            <ul className="space-y-1">
              <li>• Purchase credits from your wallet</li>
              <li>• Review lead details carefully</li>
              <li>• Accept leads matching your expertise</li>
              <li>• Respond to clients within 24 hours</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Credit System:</h4>
            <ul className="space-y-1">
              <li>• High Priority: 15 credits</li>
              <li>• Medium Priority: 10 credits</li>
              <li>• Low Priority: 5 credits</li>
              <li>• Refund if client doesn't respond</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadMarketplace;