import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCars } from '../store/carsSlice';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { RentCarPage } from '../pages/RentCarPage';
import { NotFound } from './NotFound';

function MainPage() {
  const dispatch = useDispatch();

  const cars = useSelector(state => state.cars.cars);
  const currentUser = useSelector(state => state.users.currentUser);

  useEffect(() => {
    try {
      dispatch(fetchCars());
    } catch (error) {
      alert('При загрузке автомобилей произошла ошибка');
      console.error(error);
    }
  }, [dispatch])
  
  return (
    <div className='main__wrapper'>
      <Menu />
      <Header {...currentUser} />
      <main className='main__content'>
        <RentCarPage cars={cars} /> 
      </main>
    </div>
  )
}

export { MainPage };