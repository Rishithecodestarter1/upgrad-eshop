import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dev-project-ecommerce.upgrad.dev/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleOrder = async () => {
    try {
      await axios.post('https://dev-project-ecommerce.upgrad.dev/api/orders', {
        quantity,
        product: product.id,
        address: 'ADDRESS_ID', // You would replace this with a valid address ID
      });
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  return (
    <div className="product-details-container">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
          <button onClick={handleOrder}>Place Order</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
