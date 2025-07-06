import React from 'react';
import { SAMPLE_DATA } from '../../sampleData';

function ProductCatalog() {
  const { materials } = SAMPLE_DATA;
  
  return (
    <div className="product-catalog">
      {showProductForm && <ProductForm onClose={() => setShowProductForm(false)} />}
      <h3 className="text-2xl font-semibold mb-6">Product Catalog Management</h3>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add Product
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Bulk Upload
            </button>
          </div>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Categories</option>
              <option value="Furniture">Furniture</option>
              <option value="Lighting">Lighting</option>
              <option value="Flooring">Flooring</option>
            </select>
          </div>
        </div>
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-right">Price</th>
              <th className="py-3 px-6 text-center">Stock</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {materials.slice(0, 5).map(product => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-gray-500 text-xs">{product.description}</div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{product.category}</td>
                <td className="py-3 px-6 text-right font-medium">₹{product.price.toLocaleString()}</td>
                <td className="py-3 px-6 text-center">
                  <span className={product.stock < 10 ? 'text-red-600 font-bold' : ''}>{product.stock}</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Active</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110" title="View">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="Edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110" title="Delete">
                      <i className="fas fa-trash-alt"></i>
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

export default ProductCatalog;