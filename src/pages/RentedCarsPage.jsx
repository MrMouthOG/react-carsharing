import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { fetchRentedCars } from '../store/carsSlice';
import { setRentedCarsList } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';
import { Skeleton } from '../components/CarCard/Skeleton';

function RentedCarsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const rentedCars = useSelector((state) => state.cars.rentedCars);

  useEffect(() => {
    dispatch(fetchRentedCars());
    setIsLoading(false);
    // async function fetchRentedCars() {
    //   try {
    //     const { data, status, statusText } = await axios.get(
    //       'https://634d1979f5d2cc648e9c558d.mockapi.io/cars?isRent=true',
    //     );

    //     if (statusText !== 'OK') {
    //       throw new Error('Server error ' + status);
    //     }

    //     dispatch(setRentedCarsList(data));
    //     setIsLoading(false);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // fetchRentedCars();
  }, [dispatch]);

  const cancelRent = async (car) => {};

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
