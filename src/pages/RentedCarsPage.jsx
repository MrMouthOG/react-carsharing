import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRentedCars, sendCancelRentCar } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';
import { Skeleton } from '../components/CarCard/Skeleton';

function RentedCarsPage() {
  const dispatch = useDispatch();
  const rentedCars = useSelector((state) => state.cars.rentedCars);
  const isLoading = useSelector((state) => state.cars.isLoading);

  useEffect(() => {
    dispatch(fetchRentedCars());
  }, [dispatch]);

  const cancelRent = async (car) => {
    dispatch(sendCancelRentCar(car));
  };

  return (
    <div className="rent-car__wrapper">
      <h2 className="title">Арендованные автомобили:</h2>
      <div className="rent-car__items">
        {isLoading
          ? [...Array(4)].map((_, i) => <Skeleton key={i} />)
          : rentedCars.map((rentedCar) => (
              <CarCard
                key={rentedCar.id}
                btnCarHandler={cancelRent}
                btnTitle="Отменить"
                {...rentedCar}
              />
            ))}
      </div>
    </div>
  );
}

export { RentedCarsPage };
