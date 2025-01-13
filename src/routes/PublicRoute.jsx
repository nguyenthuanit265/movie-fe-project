import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const hasToken = localStorage.getItem('token');

    return (!isAuthenticated || !hasToken) ? children : <Navigate to="/" />;
};

export default PublicRoute;
