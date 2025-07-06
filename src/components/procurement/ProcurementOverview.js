
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function ProcurementOverview() {
  const orders = SAMPLE_DATA.procurement;
  const vendors = SAMPLE_DATA.vendors;

  return (
    <div className="procurement-overview">
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Open Orders</h3>
          <p className="text-4xl font-bold text-blue-500">{orders.filter(o => o.status !== 'Delivered').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Pending Deliveries</h3>
          <p className="text-4xl font-bold text-yellow-500">{orders.filter(o => o.status === 'Shipped').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Total Vendors</h3>
          <p className="text-4xl font-bold text-purple-500">{vendors.length}</p>
        </div>
      </div>
    </div>
  );
}

export default ProcurementOverview;
