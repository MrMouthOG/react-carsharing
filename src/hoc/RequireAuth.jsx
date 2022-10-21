import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RequireAuth({ children }) {
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(true);
  let isLoading = true;

  const fetchUser = async (token) => {
    try {
      const { data } = await axios.get(
        `https://634d1979f5d2cc648e9c558d.mockapi.io/users?isAuth=${token}`,
      );

      return data;
    } catch (error) {
      console.error(error);
    }
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
      .then((answer) => (answer ? children : <Navigate to="login" />)); // switched navigate to <navigate></navigate>
    isLoading = false;
  };

  // if (!isLoading) {
  //   return isAuth();
  // }
  // const check = isAuth();
  // console.log(check);
  // if (!check) {
  //   return <Navigate to="login" />;
  // }

  if (!isLoading) return children;

  return children;
}

export { RequireAuth };
