import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function QualityControl() {
  const projects = SAMPLE_DATA.projects.filter(p => p.pmName === 'Rajesh Kumar');
  const [selectedProject, setSelectedProject] = useState(projects[0]?.id || '');
  
  // Mock quality control data
  const qualityChecks = [
    { id: 'QC001', projectId: 'PR001', phase: 'Civil Work', checkType: 'Material Quality', status: 'Passed', inspector: 'Quality Team', date: '2024-02-25', score: 95, notes: 'All materials meet specifications' },
    { id: 'QC002', projectId: 'PR001', phase: 'Electrical', checkType: 'Wiring Standards', status: 'Pending', inspector: 'Electrical Inspector', date: '2024-03-01', score: null, notes: 'Scheduled for next week' },
    { id: 'QC003', projectId: 'PR002', phase: 'Design', checkType: 'Design Compliance', status: 'Passed', inspector: 'Design Team', date: '2024-02-20', score: 88, notes: 'Minor adjustments recommended' },
    { id: 'QC004', projectId: 'PR004', phase: 'Procurement', checkType: 'Material Inspection', status: 'Failed', inspector: 'Quality Team', date: '2024-02-28', score: 65, notes: 'Some items need replacement' },
    { id: 'QC005', projectId: 'PR001', phase: 'Installation', checkType: 'Workmanship', status: 'In Progress', inspector: 'Site Supervisor', date: '2024-03-02', score: null, notes: 'Currently being evaluated' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Passed': return 'bg-green-200 text-green-800';
      case 'Failed': return 'bg-red-200 text-red-800';
      case 'Pending': return 'bg-yellow-200 text-yellow-800';
      case 'In Progress': return 'bg-blue-200 text-blue-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="quality-control">
      <h2 className="text-3xl font-bold mb-6">Quality Control & Assurance</h2>
      
      {/* Quality Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Checks</h4>
          <p className="text-3xl font-bold text-blue-600">{qualityChecks.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Passed</h4>
          <p className="text-3xl font-bold text-green-600">{qualityChecks.filter(q => q.status === 'Passed').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Failed</h4>
          <p className="text-3xl font-bold text-red-600">{qualityChecks.filter(q => q.status === 'Failed').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Average Score</h4>
          <p className="text-3xl font-bold text-purple-600">
            {qualityChecks.filter(q => q.score).length > 0 ? 
              Math.round(qualityChecks.filter(q => q.score).reduce((sum, q) => sum + q.score, 0) / qualityChecks.filter(q => q.score).length) : 
              'N/A'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Quality Checks List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Quality Checks</h3>
          <div className="space-y-4">
            {qualityChecks.map(check => (
              <div key={check.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{check.checkType}</h4>
                    <p className="text-sm text-gray-500">{check.projectId} - {check.phase}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(check.status)}`}>
                    {check.status}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Inspector: {check.inspector}</span>
                  {check.score && (
                    <span className={`font-bold ${getScoreColor(check.score)}`}>
                      Score: {check.score}/100
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">{check.notes}</p>
                <p className="text-xs text-gray-500">Date: {check.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards Checklist */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Quality Standards Checklist</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-3">Design Phase Standards</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-sm">Design compliance with approved plans</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-sm">Material specifications verification</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-yellow-500 mr-2"></i>
                  <span className="text-sm">Client approval documentation</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-3">Procurement Standards</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-sm">Vendor quality certification</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-times-circle text-red-500 mr-2"></i>
                  <span className="text-sm">Material quality inspection</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-sm">Delivery condition verification</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-3">Installation Standards</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-clock text-yellow-500 mr-2"></i>
                  <span className="text-sm">Workmanship quality check</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-yellow-500 mr-2"></i>
                  <span className="text-sm">Safety compliance verification</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-yellow-500 mr-2"></i>
                  <span className="text-sm">Final inspection and handover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Quality Control Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Schedule Inspection
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Generate QC Report
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Create Corrective Action
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Quality Audit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QualityControl;