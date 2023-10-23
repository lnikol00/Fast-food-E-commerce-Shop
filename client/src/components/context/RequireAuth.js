import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
    const location = useLocation();

    const token = window.localStorage.getItem("userInfo");

    return (
        token ?
            <Outlet /> :
            <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth