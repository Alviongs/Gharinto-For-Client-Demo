import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function ProjectManagement() {
  const { projects } = SAMPLE_DATA;

  return (
    <div className="project-management">
      <h3 className="text-2xl font-semibold mb-6">Project Management</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Project</th>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-left">Designer</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Progress</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {projects.map(project => (
              <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{project.id}</td>
                <td className="py-3 px-6 text-left">{project.customerName}</td>
                <td className="py-3 px-6 text-left">{project.designerName}</td>
                <td className="py-3 px-6 text-center">
                  <span className={`py-1 px-3 rounded-full text-xs ${project.status === 'Completed' ? 'bg-green-200 text-green-600' : 'bg-yellow-200 text-yellow-600'}`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">{project.progress}%</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <i className="fas fa-eye"></i>
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

export default ProjectManagement;