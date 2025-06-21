// components/ProtectedAdminRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
    setLoading(false);
  }, []);

  if (loading) {
    return null; // Or <LoadingSpinner />
  }

  if (role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
