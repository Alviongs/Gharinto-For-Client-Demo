
import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function DesignerPortfolio() {
  const designerName = 'Priya Sharma'; // Hardcoded for demo
  const portfolioItems = SAMPLE_DATA.portfolioItems.filter(item => item.designer === designerName);

  return (
    <div className="designer-portfolio">
      <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignerPortfolio;
