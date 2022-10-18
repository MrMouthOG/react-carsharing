import React from 'react';

import styles from './CarCart.module.scss';

function CarCart({ model, city, imageUrl, tank, baby, right, price }) {
  return (
    <div className={styles.rentItem}>
      <img src={imageUrl} alt='Car' />
      <div className={styles.rentItemDescription}>
        <div><b>{model}</b> в <b>{city}</b>, <span>Нариманова, 45</span></div>
        <div>12.06.2019 12:00 — 13.06.2019 12:00</div>
        <div>Цвет: <span>Голубой</span></div>
      </div>
      <div className={styles.rentItemOptions}>
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
      <div className={styles.rentItemCost}>{price} руб. сутки</div>
      <button className="btn">Арендовать</button>
    </div>
  )
}

export { CarCart };