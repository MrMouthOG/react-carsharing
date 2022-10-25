import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserList } from './store/usersSlice';
import { AddCarPage } from './pages/AddCarPage';
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
    dispatch(fetchUserList());
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
        <Route path="/add" element={<AddCarPage />} />
        <Route path="/rented" element={<RentedCarsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
