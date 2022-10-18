import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Components
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import RentCarPage from '../pages/RentCarPage';
import { NotFound } from './NotFound';

function MainPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data } = await axios.get('https://634d1979f5d2cc648e9c558d.mockapi.io/Cars');
        setCars(data);
      } catch (error) {
        alert('Не удалось получить список автомобилей');
        console.log(error);
      }
    }
    fetchCars();
  }, []);
  
  return (
    <div className='main__wrapper'>
      <Menu />
      <Header />
      <main className='main__content'>
        <NotFound />
        {/* <RentCarPage cars={cars} /> */}
      </main>
    </div>
  )
}

export default MainPage;