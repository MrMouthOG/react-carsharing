import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars, sendRentCar } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';
import { Skeleton } from '../components/CarCard/Skeleton';
import { Title } from '../components/Title';

function ChoiseCarPage() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const searchValue = useSelector((state) => state.search.searchString);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const rentCarHandler = (car) => {
    dispatch(sendRentCar(car));
  };

  const skeletons = [...Array(4)].map((_, i) => <Skeleton key={i} />);
  const mappedCars = cars
    .filter(
      (item) =>
        item.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.model.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map((car) => <CarCard key={car.id} btnCarHandler={rentCarHandler} {...car} />);

  return (
    <div className="rent-car__wrapper">
      <Title title="Выберите автомобиль для аренды" />
      <div className="rent-car__items">{isLoading ? skeletons : mappedCars}</div>
    </div>
  );
}

export { ChoiseCarPage };
