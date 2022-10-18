import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(String(e.target.value));
  }

  const onClickEnter = (e) => {
    e.preventDefault();
    console.log('Need to do something: ', login, typeof(login),password, typeof(password));
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
          <input type="text" value={login} onChange={onChangeLogin} placeholder='Введите логин' />
          <label>Пароль:</label>
          <input type="password" value={password} onChange={onChangePassword} placeholder='Введите пароль' />
          <div className='login__btns'>
            <Link to='/'>
              <button className='btn'>Войти</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export { LoginPage };