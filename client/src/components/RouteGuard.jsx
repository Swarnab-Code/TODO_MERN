import React from 'react';
import { Navigate } from 'react-router';
import { isAuthenticated } from '../services/authServices';

const RouteGuard = ({ children, redirectTo='/' }) => {
	if (!isAuthenticated()) {
		return children;
	}
	return <Navigate to={redirectTo}/>
};

export default RouteGuard;
