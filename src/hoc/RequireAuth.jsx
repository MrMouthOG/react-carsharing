import React from 'react';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const token = localStorage.getItem('isAuth');

  if (!token) {
    return <Navigate to="login" />;
  }

  return children;
}

export { RequireAuth };
