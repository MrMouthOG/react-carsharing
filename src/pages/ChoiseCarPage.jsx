import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { setCarsList } from '../store/carsSlice';
import { CarCard } from '../components/CarCard';
import { Skeleton } from '../components/CarCard/Skeleton';

function ChoiseCarPage() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data, statusText, status } = await axios.get(
          'https://634d1979f5d2cc648e9c558d.mockapi.io/cars',
        );

        if (statusText !== 'OK') {
          throw new Error('Server error ' + status);
        }

        dispatch(setCarsList(data));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCars();
  }, []);

  const rentCarHandler = async (car) => {
    try {
      await axios.post('https://634d1979f5d2cc648e9c558d.mockapi.io/rentedCars', car);
    } catch (error) {
      console.error(error);
    }
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
