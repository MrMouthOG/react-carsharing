import React from 'react';

import styles from './AddCarForm.module.scss';

function AddCarForm() {
  const cities = ['Ульяновск', 'Москва', 'Казань', 'Самара', 'Чебоксары'];

  return (
    <form className={styles.form}>
      <h3>Описание автомобиля</h3>
      <div className={styles.name}>
        <label>
          Производитель:
          <input type="text" placeholder="Введите производителя" />
        </label>
        <label>
          Модель:
          <input type="text" placeholder="Введите модель" />
        </label>
      </div>
      <div>
        <label>
          Город:
          <select placeholder="Выберите город">
            {cities.map((city, i) => (
              <option key={i}>{city}</option>
            ))}
          </select>
        </label>
        <div>
          <label>
            <input type="checkbox" />
            Полный бак
          </label>
          <label>
            <input type="checkbox" />
            Десткое кресло
          </label>
          <label>
            <input type="checkbox" />
            Правый руль
          </label>
        </div>
      </div>
    </form>
  );
}

export { AddCarForm };
