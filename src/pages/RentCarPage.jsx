import React from 'react';

//Components
import CarCart from '../components/CarCart';

function RentCarPage({cars}) {
  return (
    <div className='rent-car__wrapper'>
      <h2>Выберите автомобиль для аренды:</h2>
      <div className='rent-car__items'>
        {
          cars.map(car => <CarCart key={car.id} {...car} />)
        }
      </div>
    </div>
  )
}

export default RentCarPage;