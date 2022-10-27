import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { sendCar } from '../../store/carsSlice';
import { Modal } from './Modal';
import styles from './AddCarForm.module.scss';

function AddCarForm() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [carForModal, setCarForModal] = useState(null);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const cities = ['Ульяновск', 'Москва', 'Казань', 'Самара', 'Чебоксары'];

  const AddCarHandler = ({ brand, model, city, full, chair, right, imageUrl, cost }) => {
    const result = {
      brand,
      model,
      city,
      options: [full, chair, right],
      imageUrl,
      cost,
      isRent: false,
    };
    dispatch(sendCar(result));
    setCarForModal(result);
    setOpenModal(true);
    reset();
  };

  return (
    <>
      <Modal opened={openModal} closeModal={setOpenModal} {...carForModal} />
      <form className={styles.addForm} onSubmit={handleSubmit(AddCarHandler)}>
        <div className={styles.row}>
          <label>
            Производитель
            <input
              {...register('brand', {
                required: 'Поле обязательно для заполнения',
              })}
              placeholder="Введите производителя"
            />
            <div className="error">{errors?.brand && (errors?.brand?.message || 'Ошибка')}</div>
          </label>
          <label>
            Модель
            <input
              {...register('model', {
                required: 'Поле обязательно для заполнения',
              })}
              placeholder="Введите модель"
            />
            <div className="error">{errors?.model && (errors?.brand?.message || 'Ошибка')}</div>
          </label>
        </div>
        <div className={styles.row}>
          <label>
            Изображение
            <input
              {...register('imageUrl', {
                required: 'Поле обязательно для заполнения',
              })}
              placeholder="Введите ссылку на изображение"
            />
            <div className="error">
              {errors?.imageUrl && (errors?.imageUrl?.message || 'Ошибка')}
            </div>
          </label>
          <label>
            Стоимость аренды
            <input
              {...register('cost', {
                required: 'Поле обязательно для заполнения',
              })}
              type="number"
              placeholder="Введите стоимость аренды"
            />
            <div className="error">{errors?.cost && (errors?.cost?.message || 'Ошибка')}</div>
          </label>
        </div>
        <div className={styles.rowWithSelect}>
          <label>
            Город
            <select
              {...register('city', {
                required: 'Поле обязательно для заполнения',
              })}>
              {cities.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="error">{errors?.city && (errors?.city?.message || 'Ошибка')}</div>
          </label>
          <div className={styles.options}>
            <label>
              <input {...register('full')} type="checkbox" />
              Полный бак
            </label>
            <label>
              <input {...register('chair')} type="checkbox" />
              Детское кресло
            </label>
            <label>
              <input {...register('right')} type="checkbox" />
              Правый руль
            </label>
          </div>
        </div>
        <input type="submit" value="Добавить" className="btn" disabled={!isValid} />
      </form>
    </>
  );
}

export { AddCarForm };
