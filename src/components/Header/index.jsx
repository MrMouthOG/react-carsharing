import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <div className={styles.headerSearch}>
        <img src='/img/search.png' alt="Search" />
        <input type="text" placeholder='Search...' />
      </div>
      <div className={styles.headerNotifications}>
        <img src='/img/notifications.png' alt="Notifications" />
      </div>
      <div className={styles.headerUser}>
        <img src='/img/avatar.png' alt='Avatar' />
        <span>User 1</span>
      </div>
    </header>
  )
}

export { Header };