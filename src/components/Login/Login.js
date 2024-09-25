import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('demo@demo.com'); // Default demo credentials
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // This is the function that will be triggered when the user clicks "Sign In"
  const handleLogin = async () => {
    try {
      // Send login request
      const response = await axios.post('https://dev-project-ecommerce.upgrad.dev/api/auth/signin', {
        username: email,
        password: password,
      });
  
      // Log the entire response object to inspect everything
      console.log('Full Response:', response);
  
      // Check if the token is in the headers or the body
      const token = response.headers['x-auth-token'];  // Expected in headers
  
      // If not found in headers, check the response body (if token is there)
      const tokenInBody = response.data.token;
  
      // Log both options to see where the token is
      console.log('Token from header:', token);
      console.log('Token from body (if present):', tokenInBody);
  
      // Decide where to get the token
      if (token) {
        localStorage.setItem('auth-token', token);
        navigate('/products');
      } else if (tokenInBody) {
        // Store token if found in the response body instead
        localStorage.setItem('auth-token', tokenInBody);
        navigate('/products');
      } else {
        setError('Authentication failed. No token received.');
        console.error('No token received.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials.');
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <i className="fas fa-lock text-pink-500 text-4xl"></i>
        </div>
        <h2 className="text-center text-2xl font-semibold mb-6">Sign in</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Form submission will be prevented using onSubmit */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            {/* Sign In button triggers the handleLogin function */}
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin} // Here is where handleLogin is triggered
            >
              SIGN IN
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link to="/signup" className="text-pink-500">
            Don't have an account? Sign Up
          </Link>
        </div>
        <div className="text-center mt-2">
          <p className="text-gray-600">
            Copyright © <a href="#" className="text-blue-700">upGrad</a> 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
