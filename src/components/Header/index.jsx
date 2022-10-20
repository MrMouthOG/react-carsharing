import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';

function Header() {
  const user = useSelector((state) => state.users.currentUser);

  const avatar = user?.avatar;
  const login = user?.login;

  return (
    <header>
      <div className={styles.headerSearch}>
        <img src="/img/search.png" alt="Search" />
        <input type="text" placeholder="Поиск..." />
      </div>
      <div className={styles.headerNotifications}>
        <img src="/img/notifications.png" alt="Notifications" />
      </div>
      <div className={styles.headerUser}>
        <img src={avatar} alt="Avatar" />
        <span>{login || 'User test'}</span>
      </div>
    </header>
  );
}

export { Header };
