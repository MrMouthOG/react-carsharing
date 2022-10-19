import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';

function RentCarPage() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);

  useEffect(() => {
    try {
      dispatch(fetchCars());
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  return (
    <div className="rent-car__wrapper">
      <h2>Выберите автомобиль для аренды:</h2>
      <div className="rent-car__items">
        {cars.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

export { RentCarPage };
