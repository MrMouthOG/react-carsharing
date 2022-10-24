import React from 'react';

import { AddCarForm } from '../components/AddCarForm';

function AddCarPage() {
  return (
    <div className="add-car__wrapper">
      <h2 className="title">Добавить автомобиль</h2>
      <AddCarForm />
    </div>
  );
}

export { AddCarPage };
