import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchUsers, setCurrentUser } from '../store/usersSlice';

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const users = useSelector(state => state.users.users);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchUsers());
    } catch (error) {
      alert('Ошибка при загрузке пользователей, компонент логин');
      console.error(error);
    }
  }, [dispatch]);

  const onClickEnter = (e) => {
    e.preventDefault();
    const userExist = users.find(user => (user.login === login) && (String(user.password) === password));

    if (userExist) {
      dispatch(setCurrentUser(userExist));
      navigate('/');
    } else {
      alert('Вы ввели неверные данные');
      setLogin('');
      setPassword('');
    }
  }

  return (
    <div className='login__wrapper'>
      <div className='login__logo'>
        <img src="/img/logo.svg" alt="Logo" />
        <span>Need for car</span>
      </div>
      <div className='login__form'>
        <span>Авторизация</span>
        <form onSubmit={onClickEnter}>
          <label>Логин:</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder='Введите логин'
          />
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Введите пароль'
          />
          <button className='btn'>Войти</button>
        </form>
      </div>
    </div>
  )
}

export { LoginPage };