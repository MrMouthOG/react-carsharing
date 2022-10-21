import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { fetchUserByLogin } from '../store/usersSlice';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    console.log(currentUser);
  });

  const singInHandler = (e) => {
    e.preventDefault();

    dispatch(fetchUserByLogin({ login, password }));

    console.log(currentUser);
    if (currentUser?.isAuth) {
      console.log('CurrentUser is exist and isAuth isnt false');
    }
  };

  // const navigate = useNavigate();

  // const onClickEnter = (e) => {
  //   e.preventDefault();

  //   const currentUser = usersList.find((user) => {
  //     return user.login === login && String(user.password) === password;
  //   });

  //   if (currentUser) {
  //     const token = `${currentUser.id}${currentUser.login}${currentUser.password}`;
  //     const userWithToken = { ...currentUser, isAuth: token };
  //     axios.put(
  //       `https://634d1979f5d2cc648e9c558d.mockapi.io/users/${userWithToken.id}`,
  //       userWithToken,
  //     );
  //     localStorage.setItem('isAuth', token);
  //     navigate('/');
  //   } else {
  //     alert('Вы ввели неверные данные');
  //   }
  // };

  return (
    <div className="login__wrapper">
      <div className="login__logo">
        <LogoSvg />
        <span>Need for car</span>
      </div>
      <div className="login__form">
        <span>Авторизация</span>
        <form onSubmit={singInHandler}>
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
          <div className="btn">Войти</div>
        </form>
      </div>
    </div>
  );
}

export { LoginPage };
