
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function InventoryManagement() {
  const inventory = SAMPLE_DATA.inventory;

  return (
    <div className="inventory-management">
      <h2 className="text-3xl font-bold mb-6">Inventory Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Material</th>
              <th className="py-3 px-6 text-left">SKU</th>
              <th className="py-3 px-6 text-center">Stock Level</th>
              <th className="py-3 px-6 text-center">Location</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {inventory.map(item => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.sku}</td>
                <td className="py-3 px-6 text-center">{item.stock}</td>
                <td className="py-3 px-6 text-center">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryManagement;
