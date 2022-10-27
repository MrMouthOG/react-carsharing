import React from 'react';

import styles from './AddCarForm.module.scss';

export function Modal({ brand, model, imageUrl, color, city, cost, opened, closeModal }) {
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.modal}>
        <h2>Вы успешно добавили автомобиль!!!</h2>
        <img src={imageUrl} alt="Cars" />
        <h3>
          Производитель: <span>{brand}</span>
          <br />
          Модель: <span>{model}</span>
          <br />
          Цвет: <span>{color}</span>
          <br />
          Город: <span>{city}</span>
          <br />
          Стоимость: <span>{cost}</span>
        </h3>
        <button onClick={() => closeModal(false)} className="btn">
          OK!
        </button>
      </div>
    </div>
  );
}
