import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { currentUser, emailUser } = useAuth();
    return currentUser || emailUser ? children : <Navigate to='/signin-email' />;
};

export default PrivateRoute;
