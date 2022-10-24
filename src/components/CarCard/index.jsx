import React from 'react';

import styles from './CarCard.module.scss';

function CarCard({
  brand,
  model,
  city,
  options,
  imageUrl,
  cost,
  id,
  isRent,
  btnCarHandler,
  btnTitle = 'Арендовать',
}) {
  const [fullTank, babyChair, rightHand] = options;

  const onRentHandler = async () => {
    const car = {
      brand,
      model,
      city,
      options,
      imageUrl,
      cost,
      id,
      isRent: true,
    };
    btnCarHandler(car);
  };

  return (
    <div className={styles.rentItem}>
      <img src={imageUrl} alt="Car" />
      <div className={styles.rentItemDescription}>
        <div>
          <b>{model}</b> в <b>{city}</b>, <span>Нариманова, 45</span>
        </div>
        <div>12.06.2019 12:00 — 13.06.2019 12:00</div>
        <div>
          Цвет: <span>Голубой</span>
        </div>
      </div>
      <div className={styles.rentItemOptions}>
        <label>
          <input type="checkbox" disabled={!fullTank} />
          Полный бак
        </label>
        <label>
          <input type="checkbox" disabled={!babyChair} />
          Детское кресло
        </label>
        <label>
          <input type="checkbox" disabled={!rightHand} />
          Правый руль
        </label>
      </div>
      <div className={styles.rentItemCost}>{cost} руб. сутки</div>
      <button onClick={onRentHandler} className="btn">
        {btnTitle}
      </button>
    </div>
  );
}

export { CarCard };
