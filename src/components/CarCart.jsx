import React from 'react';

function CarCart({ model, city, imageUrl, tank, baby, right, price }) {
  return (
    <div className='rent-car__item'>
      <img src={imageUrl} alt='Car' />
      <div className='rent-car__description'>
        <div><b>{model}</b> в <b>{city}</b>, <span>Нариманова, 45</span></div>
        <div>12.06.2019 12:00 — 13.06.2019 12:00</div>
        <div>Цвет: <span>Голубой</span></div>
      </div>
      <div className='rent-car__options'>
        <label>
          <input type='checkbox' disabled={!tank} />
          Полный бак
        </label>
        <label>
          <input type='checkbox' disabled={!baby} />
          Детское кресло
        </label>
        <label>
          <input type='checkbox' disabled={!right} />
          Правый руль
        </label>
      </div>
      <div className='rent-car__cost'>{price} руб. сутки</div>
      <button className='btn'>Арендовать</button>
    </div>
  )
}

export default CarCart;