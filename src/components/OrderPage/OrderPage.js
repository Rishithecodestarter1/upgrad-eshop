import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderPage.css';

const OrderPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get('https://dev-project-ecommerce.upgrad.dev/api/addresses');
        setAddresses(response.data);
      } catch (error) {
        console.error('Error fetching addresses', error);
      }
    };
    fetchAddresses();
  }, []);

  const handleOrder = async () => {
    if (!selectedAddress) {
      alert('Please select an address!');
      return;
    }

    try {
      await axios.post('https://dev-project-ecommerce.upgrad.dev/api/orders', {
        product: 'PRODUCT_ID', // Replace with actual product ID
        address: selectedAddress,
      });
      setOrderPlaced(true);
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  return (
    <div className="order-page-container">
      {orderPlaced ? (
        <h2>Your order is confirmed!</h2>
      ) : (
        <>
          <h2>Select Address</h2>
          <select value={selectedAddress} onChange={(e) => setSelectedAddress(e.target.value)}>
            <option value="">Select</option>
            {addresses.map((address) => (
              <option key={address.id} value={address.id}>
                {address.name}, {address.city}
              </option>
            ))}
          </select>
          <button onClick={handleOrder}>Confirm Order</button>
        </>
      )}
    </div>
  );
};

export default OrderPage;
