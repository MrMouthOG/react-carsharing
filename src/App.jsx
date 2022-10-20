import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { setUsersList } from './store/usersSlice';
import { LoginPage } from './pages/LoginPage';
import { ChoiseCarPage } from './pages/ChoiseCarPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';
import { RequireAuth } from './hoc/RequireAuth';
import { RentedCarsPage } from './pages/RentedCarsPage';

function App() {
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.users.users);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data, status, statusText } = await axios.get(
          'https://634d1979f5d2cc648e9c558d.mockapi.io/users',
        );

        if (statusText !== 'OK') {
          throw new Error('Server error ' + status);
        }

        dispatch(setUsersList(data));
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
    // dispatch(fetchUsers());
    // localStorage.removeItem('isAuth');
    // console.log('App, UseEffect, fetchUsers');

    // return () => {
    //   console.log('App, willUnmount, delete token');
    //   const token = localStorage.getItem('isAuth');
    //   const deleteToken = usersList.find((user) => user.isAuth === token);

    //   if (token) {
    //     dispatch(toggleTokenForUser({ ...deleteToken, isAuth: null }));
    //   }
    // };
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage usersList={usersList} />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }>
        <Route path="/" element={<ChoiseCarPage />} />
        <Route path="/add" element={<h1>Добавить автомобиль</h1>} />
        <Route path="/rented" element={<RentedCarsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
