import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuthenticated = checkAuth(); // Function to check authentication

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// Example checkAuth function (replace with your actual authentication logic)
const checkAuth = () => {
    // Check if a token is present in local storage, cookies, or context
    const token = localStorage.getItem('token'); // Example using local storage
    return !!token; // Returns true if token exists, false otherwise
};

export default PrivateRoute;