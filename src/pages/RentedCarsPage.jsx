import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { setRentedCarsList } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';
import { Skeleton } from '../components/CarCard/Skeleton';

function RentedCarsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const rentedCars = useSelector((state) => state.cars.rentedCars);

  useEffect(() => {
    async function fetchRentedCars() {
      try {
        const { data, status, statusText } = await axios.get(
          'https://634d1979f5d2cc648e9c558d.mockapi.io/rentedCars',
        );

        if (statusText !== 'OK') {
          throw new Error('Server error ' + status);
        }

        dispatch(setRentedCarsList(data));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRentedCars();
  }, []);

  const cancelRent = async (car) => {
    try {
      await axios.delete(`https://634d1979f5d2cc648e9c558d.mockapi.io/rentedCars/${car.id}`);
    } catch (error) {
      console.error(error);
    }
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
