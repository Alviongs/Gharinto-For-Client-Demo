
import React, { useState } from 'react';

function PurchaseOrderForm({ onClose }) {
  const [formData, setFormData] = useState({
    vendor: '',
    project: '',
    items: [{ name: '', quantity: '', price: '' }],
    deliveryDate: '',
    notes: ''
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'name' || name === 'quantity' || name === 'price') {
      const items = [...formData.items];
      items[index][name] = value;
      setFormData({ ...formData, items });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddItem = () => {
    setFormData({ ...formData, items: [...formData.items, { name: '', quantity: '', price: '' }] });
  };

  const handleRemoveItem = (index) => {
    const items = [...formData.items];
    items.splice(index, 1);
    setFormData({ ...formData, items });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold">Create Purchase Order</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times"></i>
            </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-gray-700">Vendor</label>
              <select name="vendor" onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option value="">Select Vendor</option>
                {/* Add vendor options here */}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Project</label>
              <select name="project" onChange={handleChange} className="w-full px-3 py-2 border rounded">
                <option value="">Select Project</option>
                {/* Add project options here */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Items</h4>
            {formData.items.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 mb-2">
                <input type="text" name="name" placeholder="Item Name" value={item.name} onChange={(e) => handleChange(e, index)} className="w-1/2 px-3 py-2 border rounded" />
                <input type="number" name="quantity" placeholder="Quantity" value={item.quantity} onChange={(e) => handleChange(e, index)} className="w-1/4 px-3 py-2 border rounded" />
                <input type="number" name="price" placeholder="Price" value={item.price} onChange={(e) => handleChange(e, index)} className="w-1/4 px-3 py-2 border rounded" />
                <button type="button" onClick={() => handleRemoveItem(index)} className="text-red-500">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddItem} className="text-blue-500">
              + Add Item
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Expected Delivery Date</label>
            <input type="date" name="deliveryDate" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Notes</pre>
            <textarea name="notes" onChange={handleChange} className="w-full px-3 py-2 border rounded"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Create PO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PurchaseOrderForm;
