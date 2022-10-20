import React from 'react';

import styles from './CarCard.module.scss';

function CarCard({
  brand,
  model,
  city,
  imageUrl,
  options,
  cost,
  id,
  btnCarHandler,
  btnTitle = 'Арендовать',
}) {
  const [fullTank, babyChair, rightHand] = options;

  const onRentHandler = async () => {
    const car = {
      id,
      brand,
      model,
      city,
      options,
      imageUrl,
      cost,
      parentId: id,
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
