import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ReactComponent as LogOutSvg } from '../../assets/logout.svg';
import styles from './Header.module.scss';

function Header() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem('isAuth');
      try {
        const { data } = await axios.get(
          `https://634d1979f5d2cc648e9c558d.mockapi.io/users?isAuth=${token}`,
        );

        setCurrentUser(data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  const logOut = () => {
    axios.put(`https://634d1979f5d2cc648e9c558d.mockapi.io/users/${currentUser.id}`, {
      ...currentUser,
      isAuth: null,
    });
    localStorage.removeItem('isAuth');
    navigate('/login');
  };

  const avatar = currentUser?.avatar;
  const login = currentUser?.login;

  return (
    <header>
      <div className={styles.headerSearch}>
        <img src="/img/search.png" alt="Search" />
        <input type="text" placeholder="Поиск..." />
      </div>
      <div className={styles.headerNotifications}>
        <img src="/img/notifications.png" alt="Notifications" />
      </div>
      <div className={styles.headerUser} onClick={() => setIsOpenPopUp((prev) => !prev)}>
        <img src={avatar} alt="Avatar" />
        <span>{login || 'User test'}</span>
      </div>
      {isOpenPopUp && (
        <div onClick={logOut} className={styles.headerPopup}>
          <ul>
            <li>
              <LogOutSvg />
              Выйти
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export { Header };
