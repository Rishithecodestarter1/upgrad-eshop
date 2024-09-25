import React, { useState } from 'react';
import axios from 'axios';
import './AddressForm.css';

const AddressForm = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
  const [street, setStreet] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleAddAddress = async () => {
    try {
      await axios.post('https://dev-project-ecommerce.upgrad.dev/api/addresses', {
        name,
        contactNumber,
        city,
        landmark,
        street,
        state,
        zipcode,
      });
      alert('Address added successfully!');
    } catch (error) {
      console.error('Error adding address', error);
    }
  };

  return (
    <div className="address-form-container">
      <h2>Add Address</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        placeholder="Contact Number"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      <input
        type="text"
        value={landmark}
        onChange={(e) => setLandmark(e.target.value)}
        placeholder="Landmark"
      />
      <input
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        placeholder="Street"
      />
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="State"
      />
      <input
        type="text"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        placeholder="Zipcode"
      />
      <button onClick={handleAddAddress}>Add Address</button>
    </div>
  );
};

export default AddressForm;
