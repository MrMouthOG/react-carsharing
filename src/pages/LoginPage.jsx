import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchUserByLogin } from '../store/usersSlice';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';

function LoginPage() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenExist = localStorage.getItem('isAuth');

    if (tokenExist) {
      console.log('Token exist, go to home');
      navigate('/');
    }

    console.log('useEffect');

    if (currentUser) {
      console.log('User in effect: ', currentUser);
      const token = `${currentUser.id}${currentUser.login}${currentUser.password}`;
      localStorage.setItem('isAuth', token);
      navigate('/');
    }
  }, [currentUser, navigate]);

  const onSubmit = ({ login, password }) => {
    dispatch(fetchUserByLogin({ login, password }));
    reset();
  };

  return (
    <div className="login__wrapper">
      <div className="login__logo">
        <LogoSvg />
        <span>Need for car</span>
      </div>
      <div className="login__form">
        <span>Авторизация</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Логин:
            <input
              {...register('login', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 5,
                  message: 'Минимум 5 символов',
                },
              })}
              placeholder="Введите логин"
            />
          </label>
          <div>{errors?.login && (errors?.login?.message || 'Ошибка!')}</div>
          <label>
            Пароль:
            <input
              {...register('password', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
              })}
              type="password"
              placeholder="Введите пароль"
            />
          </label>
          <div>{errors?.password && (errors?.password?.message || 'Ошибка')}</div>
          <input type="submit" value="Войти" className="btn" disabled={!isValid} />
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
