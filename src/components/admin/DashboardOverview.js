import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';
import { Chart, registerables } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

function DashboardOverview() {
  const { customers, projects, leads, designers, materials } = SAMPLE_DATA;

  const totalUsers = customers.length + designers.length;
  const activeProjects = projects.filter(p => p.status === 'In Progress').length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const newLeadsCount = leads.filter(l => l.status === 'New').length;

  // Data for New Leads by Source Chart
  const leadSources = leads.reduce((acc, lead) => {
    acc[lead.source] = (acc[lead.source] || 0) + 1;
    return acc;
  }, {});

  const leadSourceData = {
    labels: Object.keys(leadSources),
    datasets: [
      {
        label: 'Number of Leads',
        data: Object.values(leadSources),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Data for Top Designers by Projects Chart
  const designerProjects = designers.map(designer => ({
    name: designer.name,
    projects: designer.projects,
  })).sort((a, b) => b.projects - a.projects).slice(0, 5);

  const designerData = {
    labels: designerProjects.map(d => d.name),
    datasets: [
      {
        label: 'Projects Handled',
        data: designerProjects.map(d => d.projects),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for Top Selling Materials Chart
  const materialSales = materials.reduce((acc, material) => {
    // Assuming a simple sales metric based on stock and price for demo
    acc[material.name] = material.stock * material.price; 
    return acc;
  }, {});

  const topSellingMaterials = Object.entries(materialSales)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const materialData = {
    labels: topSellingMaterials.map(([name]) => name),
    datasets: [
      {
        label: 'Revenue (INR)',
        data: topSellingMaterials.map(([, value]) => value),
        backgroundColor: [
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-overview">
      <h3 className="text-2xl font-semibold mb-6">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Total Users</h4>
          <p className="text-3xl font-bold text-gray-800">{totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Active Projects</h4>
          <p className="text-3xl font-bold text-gray-800">{activeProjects}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">Completed Projects</h4>
          <p className="text-3xl font-bold text-gray-800">{completedProjects}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600">New Leads</h4>
          <p className="text-3xl font-bold text-gray-800">{newLeadsCount}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">New Leads by Source</h4>
          <Doughnut data={leadSourceData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Top 5 Designers by Projects</h4>
          <Bar data={designerData} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Top 5 Selling Materials (by Estimated Revenue)</h4>
          <Bar data={materialData} />
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;