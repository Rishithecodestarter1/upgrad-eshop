import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [availableItems, setAvailableItems] = useState('');

  const handleAddProduct = async () => {
    try {
      await axios.post('https://dev-project-ecommerce.upgrad.dev/api/products', {
        name,
        category,
        price,
        description,
        manufacturer,
        availableItems,
      });
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
        placeholder="Manufacturer"
      />
      <input
        type="number"
        value={availableItems}
        onChange={(e) => setAvailableItems(e.target.value)}
        placeholder="Available Items"
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
