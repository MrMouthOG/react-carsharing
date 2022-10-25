import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCurrentUser, toggleUserToken } from '../store/usersSlice';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';

function LoginPage({ usersList }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('isAuth');

    const check = usersList.find((item) => item.isAuth === token);

    if (check && token !== null) {
      dispatch(setCurrentUser(check));
      navigate('/');
    }
  }, [usersList, navigate, dispatch]);

  const onSubmit = ({ login, password }) => {
    const isUserExist = usersList.find(
      (item) => item.login === login && String(item.password) === password,
    );

    if (isUserExist) {
      const token = `${isUserExist.id}${isUserExist.login}${isUserExist.password}`;
      localStorage.setItem('isAuth', token);
      const userWithToken = { ...isUserExist, isAuth: token };
      dispatch(toggleUserToken(userWithToken));
      navigate('/');
    } else {
      alert('Вы ввели неверные данные');
      reset();
    }
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
