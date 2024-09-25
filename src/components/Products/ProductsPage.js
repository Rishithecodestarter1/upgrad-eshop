import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dev-project-ecommerce.upgrad.dev/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography>{product.description}</Typography>
              <Typography>Price: ${product.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
