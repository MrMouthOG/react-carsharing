import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRentedCars, sendCancelRentCar } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';
import { Skeleton } from '../components/CarCard/Skeleton';
import { Title } from '../components/Title';

function RentedCarsPage() {
  const dispatch = useDispatch();
  const rentedCars = useSelector((state) => state.cars.rentedCars);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const searchValue = useSelector((state) => state.search.searchString);

  useEffect(() => {
    dispatch(fetchRentedCars());
  }, [dispatch]);

  const cancelRent = async (car) => {
    dispatch(sendCancelRentCar(car));
  };

  const skeletons = [...Array(4)].map((_, i) => <Skeleton key={i} />);
  const mappedRentedCars = rentedCars
    .filter(
      (item) =>
        item.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.model.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map((rentedCar) => (
      <CarCard key={rentedCar.id} btnCarHandler={cancelRent} btnTitle="Отменить" {...rentedCar} />
    ));

  return (
    <div className="rent-car__wrapper">
      <Title title="Арендованные автомобили" />
      <div className="rent-car__items">{isLoading ? skeletons : mappedRentedCars}</div>
    </div>
  );
}

export { RentedCarsPage };
