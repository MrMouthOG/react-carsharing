import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { RentCarPage } from './pages/RentCarPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<RentCarPage />} />
        <Route path="/add" element={<h1>Добавить автомобиль</h1>} />
        <Route path="/rented" element={<h1>Арендованные автомобили</h1>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
