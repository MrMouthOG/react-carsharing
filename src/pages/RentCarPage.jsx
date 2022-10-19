import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';
import { Skeleton } from '../components/CarCard/Skeleton';

function RentCarPage() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);

  useEffect(() => {
    try {
      dispatch(fetchCars());
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, [dispatch]);

  return (
    <div className="rent-car__wrapper">
      <h2>Выберите автомобиль для аренды:</h2>
      <div className="rent-car__items">
        {isLoading
          ? [...Array(3)].map((_, i) => <Skeleton key={i} />)
          : cars.map((car) => <CarCard key={car.id} {...car} />)}
      </div>
    </div>
  );
}

export { RentCarPage };
