import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ReactComponent as LogoSvg } from '../assets/logo.svg';

function LoginPage({ usersList }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onClickEnter = (e) => {
    e.preventDefault();

    const currentUser = usersList.find((user) => {
      return user.login === login && String(user.password) === password;
    });

    if (currentUser) {
      const token = `${currentUser.id}${currentUser.login}${currentUser.password}`;
      const userWithToken = { ...currentUser, isAuth: token };
      axios.put(
        `https://634d1979f5d2cc648e9c558d.mockapi.io/users/${userWithToken.id}`,
        userWithToken,
      );
      localStorage.setItem('isAuth', token);
      navigate('/');
    } else {
      alert('Вы ввели неверные данные');
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
        <form onSubmit={onClickEnter}>
          <label>Логин:</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Введите логин"
            required
          />
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
          <button className="btn">Войти</button>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
