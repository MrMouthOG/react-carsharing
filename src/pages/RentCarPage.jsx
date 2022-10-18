import React from 'react';

import { CarCard } from '../components/CarCard';

function RentCarPage({cars}) {

  return (
    <div className='rent-car__wrapper'>
      <h2>Выберите автомобиль для аренды:</h2>
      <div className='rent-car__items'>
        {
          cars.map(car => <CarCard key={car.id} {...car} />)
        }
      </div>
    </div>
  )
}

export { RentCarPage };