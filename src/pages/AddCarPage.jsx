import React from 'react';

import { AddCarForm } from '../components/AddCarForm';
import { Title } from '../components/Title';

function AddCarPage() {
  return (
    <div className="add-car__wrapper">
      <Title title="Добавить автомобиль" />
      <AddCarForm />
    </div>
  );
}

export { AddCarPage };
