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
          Цвет: <span>{color}</span>
        </div>
        <div className={styles.color}>
          Город: <span>{city}</span>
        </div>
      </div>
      <div>
        <div>Дополнительные опции</div>
        <ul>
          <li>Полный бак: {fullTank ? 'Да' : 'Нет'}</li>
          <li>Десткое кресло: {babyChair ? 'Да' : 'Нет'}</li>
          <li>Правый руль: {rightHand ? 'Да' : 'Нет'}</li>
        </ul>
      </div>
      <div className={styles.rentItemCost}>{cost} руб. сутки</div>
      <button onClick={onRentHandler} className="btn">
        {btnTitle}
      </button>
    </div>
  );
}

export { CarCard };
