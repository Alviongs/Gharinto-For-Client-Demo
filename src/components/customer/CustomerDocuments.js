import React, { useState } from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { useAuth } from '../../App';

function CustomerDocuments() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState(null);
  
  const customerName = user?.name || 'Sharma Family';
  const project = SAMPLE_DATA.projects.find(p => p.customerName === customerName);

  // Mock document data based on project phases
  const documents = [
    {
      id: 'DOC001',
      name: 'Project Agreement Contract',
      category: 'Contracts',
      type: 'PDF',
      size: '2.4 MB',
      uploadDate: '2024-01-01',
      status: 'Signed',
      description: 'Main project agreement with terms and conditions',
      downloadUrl: '#',
      isImportant: true
    },
    {
      id: 'DOC002',
      name: 'Design Specifications',
      category: 'Designs',
      type: 'PDF',
      size: '15.8 MB',
      uploadDate: '2024-01-15',
      status: 'Approved',
      description: 'Detailed design specifications and material list',
      downloadUrl: '#',
      isImportant: true
    },
    {
      id: 'DOC003',
      name: 'Material BOQ (Bill of Quantities)',
      category: 'BOQ',
      type: 'Excel',
      size: '1.2 MB',
      uploadDate: '2024-02-01',
      status: 'Final',
      description: 'Complete bill of quantities for all materials',
      downloadUrl: '#',
      isImportant: true
    },
    {
      id: 'DOC004',
      name: 'Electrical Layout Plan',
      category: 'Technical',
      type: 'CAD',
      size: '8.5 MB',
      uploadDate: '2024-02-10',
      status: 'Approved',
      description: 'Electrical wiring and fixture layout plans',
      downloadUrl: '#',
      isImportant: false
    },
    {
      id: 'DOC005',
      name: 'Plumbing Layout Plan',
      category: 'Technical',
      type: 'CAD',
      size: '6.2 MB',
      uploadDate: '2024-02-10',
      status: 'Approved',
      description: 'Plumbing and water supply layout plans',
      downloadUrl: '#',
      isImportant: false
    },
    {
      id: 'DOC006',
      name: 'Material Warranty Certificate',
      category: 'Warranty',
      type: 'PDF',
      size: '3.1 MB',
      uploadDate: '2024-02-20',
      status: 'Active',
      description: '5-year warranty certificate for all materials',
      downloadUrl: '#',
      isImportant: true
    },
    {
      id: 'DOC007',
      name: 'Installation Warranty',
      category: 'Warranty',
      type: 'PDF',
      size: '2.8 MB',
      uploadDate: '2024-03-01',
      status: 'Active',
      description: '2-year warranty for installation and workmanship',
      downloadUrl: '#',
      isImportant: true
    },
    {
      id: 'DOC008',
      name: 'Project Completion Certificate',
      category: 'Certificates',
      type: 'PDF',
      size: '1.5 MB',
      uploadDate: '2024-03-15',
      status: 'Pending',
      description: 'Official project completion certificate',
      downloadUrl: '#',
      isImportant: true
    },
    {
      id: 'DOC009',
      name: 'Maintenance Guidelines',
      category: 'Maintenance',
      type: 'PDF',
      size: '4.2 MB',
      uploadDate: '2024-03-15',
      status: 'Available',
      description: 'Complete maintenance guide for all installed items',
      downloadUrl: '#',
      isImportant: false
    },
    {
      id: 'DOC010',
      name: 'Invoice - Milestone 1',
      category: 'Invoices',
      type: 'PDF',
      size: '0.8 MB',
      uploadDate: '2024-01-15',
      status: 'Paid',
      description: 'Invoice for design approval milestone',
      downloadUrl: '#',
      isImportant: false
    },
    {
      id: 'DOC011',
      name: 'Invoice - Milestone 2',
      category: 'Invoices',
      type: 'PDF',
      size: '0.9 MB',
      uploadDate: '2024-02-01',
      status: 'Paid',
      description: 'Invoice for material procurement milestone',
      downloadUrl: '#',
      isImportant: false
    },
    {
      id: 'DOC012',
      name: 'Quality Check Report',
      category: 'Reports',
      type: 'PDF',
      size: '5.6 MB',
      uploadDate: '2024-02-25',
      status: 'Completed',
      description: 'Quality inspection report with photos',
      downloadUrl: '#',
      isImportant: false
    }
  ];

  const categories = ['all', ...new Set(documents.map(doc => doc.category))];
  const filteredDocuments = selectedCategory === 'all' ? documents : documents.filter(doc => doc.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Signed':
      case 'Approved':
      case 'Final':
      case 'Active':
      case 'Paid':
      case 'Completed':
      case 'Available':
        return 'bg-green-200 text-green-800';
      case 'Pending':
        return 'bg-yellow-200 text-yellow-800';
      case 'Draft':
        return 'bg-blue-200 text-blue-800';
      case 'Expired':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'fas fa-file-pdf text-red-500';
      case 'excel':
        return 'fas fa-file-excel text-green-500';
      case 'cad':
        return 'fas fa-file-image text-blue-500';
      case 'word':
        return 'fas fa-file-word text-blue-600';
      default:
        return 'fas fa-file text-gray-500';
    }
  };

  const handleDownload = (document) => {
    alert(`Downloading ${document.name}...`);
  };

  const handleShare = (document) => {
    alert(`Sharing ${document.name}...`);
  };

  if (!project) {
    return (
      <div className="customer-documents">
        <h2 className="text-3xl font-bold mb-6">Documents & Warranty</h2>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <i className="fas fa-file-alt text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Documents Available</h3>
          <p className="text-gray-500">No active project found to display documents.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-documents">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Documents & Warranty Center</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-download mr-2"></i>Download All
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-share mr-2"></i>Share Documents
          </button>
        </div>
      </div>

      {/* Document Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Documents</h4>
              <p className="text-3xl font-bold text-blue-600">{documents.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <i className="fas fa-file-alt text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Warranties Active</h4>
              <p className="text-3xl font-bold text-green-600">{documents.filter(d => d.category === 'Warranty' && d.status === 'Active').length}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <i className="fas fa-shield-alt text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Important Docs</h4>
              <p className="text-3xl font-bold text-purple-600">{documents.filter(d => d.isImportant).length}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <i className="fas fa-star text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Size</h4>
              <p className="text-3xl font-bold text-orange-600">
                {documents.reduce((total, doc) => total + parseFloat(doc.size), 0).toFixed(1)} MB
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <i className="fas fa-hdd text-orange-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} 
              {category !== 'all' && ` (${documents.filter(d => d.category === category).length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Important Documents Section */}
      {selectedCategory === 'all' && (
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">
            <i className="fas fa-star text-yellow-600 mr-2"></i>
            Important Documents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.filter(doc => doc.isImportant).map(document => (
              <div key={document.id} className="bg-white p-4 rounded-lg border border-yellow-300">
                <div className="flex items-center mb-2">
                  <i className={`${getFileIcon(document.type)} text-2xl mr-3`}></i>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{document.name}</h4>
                    <p className="text-xs text-gray-500">{document.size}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleDownload(document)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xs py-1 px-2 rounded"
                >
                  <i className="fas fa-download mr-1"></i>Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map(document => (
          <div key={document.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <i className={`${getFileIcon(document.type)} text-3xl mr-3`}></i>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{document.name}</h3>
                    <p className="text-xs text-gray-500">{document.type} • {document.size}</p>
                  </div>
                </div>
                {document.isImportant && (
                  <i className="fas fa-star text-yellow-500"></i>
                )}
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">Category</span>
                  <span className="text-xs font-medium">{document.category}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">Upload Date</span>
                  <span className="text-xs">{new Date(document.uploadDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Status</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(document.status)}`}>
                    {document.status}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-600 mb-4">{document.description}</p>

              <div className="flex space-x-2">
                <button 
                  onClick={() => handleDownload(document)}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs py-2 px-3 rounded"
                >
                  <i className="fas fa-download mr-1"></i>Download
                </button>
                <button 
                  onClick={() => setSelectedDocument(document)}
                  className="bg-gray-500 hover:bg-gray-600 text-white text-xs py-2 px-3 rounded"
                >
                  <i className="fas fa-eye"></i>
                </button>
                <button 
                  onClick={() => handleShare(document)}
                  className="bg-green-500 hover:bg-green-600 text-white text-xs py-2 px-3 rounded"
                >
                  <i className="fas fa-share"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Document Detail Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedDocument(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full m-4" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedDocument.name}</h3>
                <button onClick={() => setSelectedDocument(null)} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2"><strong>Category:</strong> {selectedDocument.category}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> {selectedDocument.type}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Size:</strong> {selectedDocument.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2"><strong>Status:</strong> {selectedDocument.status}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Upload Date:</strong> {new Date(selectedDocument.uploadDate).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Important:</strong> {selectedDocument.isImportant ? 'Yes' : 'No'}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Description:</strong></p>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{selectedDocument.description}</p>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => handleDownload(selectedDocument)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  <i className="fas fa-download mr-2"></i>Download
                </button>
                <button 
                  onClick={() => handleShare(selectedDocument)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  <i className="fas fa-share mr-2"></i>Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerDocuments;