import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars, sendRentCar } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';
import { Skeleton } from '../components/CarCard/Skeleton';

function ChoiseCarPage() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);
  const isLoading = useSelector((state) => state.cars.isLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const rentCarHandler = (car) => {
    dispatch(sendRentCar(car));
  };

  return (
    <div className="rent-car__wrapper">
      <h2 className="title">Выберите автомобиль для аренды:</h2>
      <div className="rent-car__items">
        {isLoading
          ? [...Array(4)].map((_, i) => <Skeleton key={i} />)
          : cars.map((car) => <CarCard key={car.id} btnCarHandler={rentCarHandler} {...car} />)}
      </div>
    </div>
  );
}

export { ChoiseCarPage };
