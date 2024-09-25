import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn, isAdmin }) => {
  return (
    <nav className="bg-blue-700 p-4 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center">
        <i className="fas fa-shopping-cart text-white text-xl mr-2"></i>
        <span className="text-white text-xl font-bold">upGrad E-Shop</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-blue-600 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none w-70"
          />
          <i className="fas fa-search absolute left-3 top-2.5 text-white"></i>
        </div>
      </div>

      {/* Links and Buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white">
          Home
        </Link>
        {isAdmin && (
          <Link to="/add-product" className="text-white">
            Add Product
          </Link>
        )}
        {isLoggedIn ? (
          <button className="bg-pink-600 text-white px-4 py-2 rounded">
            LOGOUT
          </button>
        ) : (
          <>
            <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/signup" className="text-white">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
