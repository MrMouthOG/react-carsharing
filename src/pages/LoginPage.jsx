import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get('https://634d1979f5d2cc648e9c558d.mockapi.io/Users');
        setUsers(data);
      } catch (error) {
        alert('Произошла ошибка при загрузке пользователей');
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(String(e.target.value));
  }

  const onClickEnter = (e) => {
    e.preventDefault();
    console.log('Need to do something');
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
            <button className='btn'>Enter</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;