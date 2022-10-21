import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RequireAuth({ children }) {
  const navigate = useNavigate();

  const fetchUser = async (token) => {
    const { data } = await axios.get(
      `https://634d1979f5d2cc648e9c558d.mockapi.io/users?isAuth=${token}`,
    );

    return data;
  };

  const isAuth = () => {
    const token = localStorage.getItem('isAuth');

    if (!token) {
      return false;
    }

    fetchUser(token)
      .then((data) => {
        if (!data.length) {
          return false;
        }
        return true;
      })
      .then((answer) => (answer ? children : navigate('login')));
  };

  isAuth();

  if (false) {
    <Navigate to="login" />;
  }

  return children;
}

export { RequireAuth };
