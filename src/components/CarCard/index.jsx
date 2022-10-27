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
  color,
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
      isRent: !isRent,
    };
    btnCarHandler(car);
  };

  return (
    <div className={styles.rentItem}>
      <img src={imageUrl} alt="Car" />
      <div className={styles.rentItemDescription}>
        <div className={styles.name}>{`${brand} ${model} `}</div>
        <div className={styles.color}>
          Цвет: <span>{color ? color : 'Не указан'}</span>
        </div>
        <div className={styles.color}>
          Город: <span>{city ? city : 'Не указан'}</span>
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
