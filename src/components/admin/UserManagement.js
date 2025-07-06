import React, { useState } from 'react';
import { SAMPLE_DATA, SAMPLE_USERS } from '../../sampleData';

function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // Combine all users from different sources
  const allUsers = [
    ...SAMPLE_DATA.customers.map(u => ({ ...u, role: 'Customer', userType: 'customer' })),
    ...SAMPLE_DATA.designers.map(u => ({ ...u, role: 'Designer', userType: 'designer' })),
    ...Object.values(SAMPLE_USERS).map(u => ({ ...u, userType: 'system' }))
  ];

  // Filter users based on search and filters
  const filteredUsers = allUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role.toLowerCase() === roleFilter.toLowerCase();
    const matchesStatus = statusFilter === 'all' || (user.status || 'Active').toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getUserStats = () => {
    return {
      total: allUsers.length,
      active: allUsers.filter(u => (u.status || 'Active') === 'Active').length,
      customers: allUsers.filter(u => u.role === 'Customer').length,
      designers: allUsers.filter(u => u.role === 'Designer').length,
      admins: allUsers.filter(u => u.role === 'admin').length
    };
  };

  const stats = getUserStats();

  return (
    <div className="user-management">
      {showUserForm && <UserForm onClose={() => setShowUserForm(false)} />}
      <div className="flex justify-between items-center mb-6">
        <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold">User Management</h3>
        <button onClick={() => setShowUserForm(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add User
        </button>
      </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            <i className="fas fa-plus mr-2"></i>Add User
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-download mr-2"></i>Export
          </button>
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Total Users</h4>
              <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <i className="fas fa-users text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Active Users</h4>
              <p className="text-3xl font-bold text-green-600">{stats.active}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <i className="fas fa-user-check text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Customers</h4>
              <p className="text-3xl font-bold text-purple-600">{stats.customers}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <i className="fas fa-user-friends text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Designers</h4>
              <p className="text-3xl font-bold text-orange-600">{stats.designers}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <i className="fas fa-paint-brush text-orange-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-600">Admins</h4>
              <p className="text-3xl font-bold text-red-600">{stats.admins}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <i className="fas fa-user-shield text-red-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Users</label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by name or email..."
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Role</label>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Roles</option>
              <option value="customer">Customers</option>
              <option value="designer">Designers</option>
              <option value="admin">Admins</option>
              <option value="pm">Project Managers</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          <div className="flex items-end">
            <button 
              onClick={() => {
                setSearchTerm('');
                setRoleFilter('all');
                setStatusFilter('all');
              }}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-600">
            Users ({filteredUsers.length} of {allUsers.length})
          </h4>
          <div className="flex space-x-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Bulk Actions
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
              Send Notification
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">
                  <input type="checkbox" className="form-checkbox" />
                </th>
                <th className="py-3 px-6 text-left">User</th>
                <th className="py-3 px-6 text-left">Contact</th>
                <th className="py-3 px-6 text-center">Role</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">Join Date</th>
                <th className="py-3 px-6 text-center">Last Active</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {filteredUsers.map(user => (
                <tr key={`${user.userType}-${user.id}`} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">
                    <input type="checkbox" className="form-checkbox" />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <i className="fas fa-user text-gray-600"></i>
                      </div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-gray-500 text-xs">{user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div>
                      <div className="font-medium">{user.email}</div>
                      <div className="text-gray-500 text-xs">{user.phone || 'N/A'}</div>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className={`py-1 px-3 rounded-full text-xs ${
                      user.role === 'Customer' ? 'bg-blue-200 text-blue-600' :
                      user.role === 'Designer' ? 'bg-purple-200 text-purple-600' :
                      user.role === 'admin' ? 'bg-red-200 text-red-600' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {user.role || 'Customer'}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className={`py-1 px-3 rounded-full text-xs ${
                      (user.status || 'Active') === 'Active' ? 'bg-green-200 text-green-600' :
                      (user.status || 'Active') === 'VIP' ? 'bg-yellow-200 text-yellow-600' :
                      'bg-red-200 text-red-600'
                    }`}>
                      {user.status || 'Active'}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    {user.joinDate || user.registrationDate ? 
                      new Date(user.joinDate || user.registrationDate).toLocaleDateString() : 
                      'N/A'
                    }
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-gray-500">2 hours ago</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="View Profile">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="Edit User">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="w-4 mr-2 transform hover:text-green-500 hover:scale-110" title="Send Message">
                        <i className="fas fa-envelope"></i>
                      </button>
                      <button className="w-4 mr-2 transform hover:text-orange-500 hover:scale-110" title="Reset Password">
                        <i className="fas fa-key"></i>
                      </button>
                      <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110" title="Suspend User">
                        <i className="fas fa-ban"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-600">
            Showing {filteredUsers.length} of {allUsers.length} users
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100">Previous</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;