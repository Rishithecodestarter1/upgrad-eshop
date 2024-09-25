import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ProductsPage from './components/Products/ProductsPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import OrderPage from './components/OrderPage/OrderPage';
import AddProduct from './components/AddProduct/AddProduct';
import AddressForm from './components/AddressForm/AddressForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-address" element={<AddressForm />} />
      </Routes>
    </div>
  );
}

export default App;