import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { toggleTokenForUser } from '../store/usersSlice';
import { setCurrentUser } from '../store/usersSlice';
// import { useAuth } from '../hooks/useAuth';

function LoginPage({ usersList }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // const [singIn] = useAuth();

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // // const location = useLocation();

  // const users = useSelector((state) => state.users.users);
  // const fromPage = location.state?.from?.pathname || '/';

  // useEffect(() => {
  //   try {
  //     dispatch(fetchUsers());
  //     console.log('fetching users');
  //   } catch (error) {
  //     alert('Ошибка при загрузке пользователей, LoginPage');
  //     console.error(error);
  //   }
  // }, [dispatch]);

  const onClickEnter = (e) => {
    e.preventDefault();
    //Поиск пользователя по логину и паролю
    const currentUser = usersList.find((user) => {
      return user.login === login && String(user.password) === password;
    });

    if (currentUser) {
      dispatch(setCurrentUser(currentUser));
      navigate('/');
    } else {
      alert('Вы ввели неверные данные');
    }

    // //Проверка на совпадение
    // if (currentUser) {
    //   const hasToken = currentUser.isAuth; //Проверка на существование токена у пользователя
    //   //Если токена нет, создаем его, записываем в локалстораге и на бек
    //   if (!hasToken) {
    //     const token = `${currentUser.id}${currentUser.login}${currentUser.password}`;
    //     localStorage.setItem('isAuth', token);
    //     dispatch(toggleTokenForUser({ ...currentUser, isAuth: token }));
    //     navigate('/');
    //     console.log('Авторизация прошла успешно', token);
    //   }
    // } else {
    //   alert('Вы ввели неверные данные');
    // }

    // const userExist = users.find((user) => {
    //   return user.login === login && String(user.password) === password;
    // });
    // const userExist = users.find(
    //   (user) => user.login === login && String(user.password) === password,
    // );

    // if (userExist) {
    //   console.log('Login page, singin');
    //   singIn(userExist);
    //   navigate('/');
    //   setLogin('');
    //   setPassword('');
    // } else {
    //   console.log('LoginPage, user doesnt exist');
    // }

    // if (userExist) {
    //   dispatch(setCurrentUser(userExist));
    //   navigate('/');
    // } else {
    //   alert('Вы ввели неверные данные');
    //   setLogin('');
    //   setPassword('');
    // }
  };

  return (
    <div className="login__wrapper">
      <div className="login__logo">
        <img src="/img/logo.svg" alt="Logo" />
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
