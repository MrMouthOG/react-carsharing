import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

function Menu() {
  const checkActive = ({ isActive }) => isActive ? 'active' : '';

  return (
    <nav className={styles.menuWrapper}>
      <div className={styles.menuLogo}>
        <img src="/img/logo.svg" alt="Logo" />
        <span>Need for car</span>
      </div>
      <div className={styles.menuItems}>
        <NavLink to='/' className={checkActive} end>
          <div className={styles.menuItem}>
            <svg width="20" height="20" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0V2.71429H10.6667V0H0ZM10.6667 8.14286H0V5.42857H10.6667V8.14286ZM0 13.5714H10.6667V10.8571H0V13.5714ZM0 19H10.6667V16.2857H0V19ZM24 0H13.3333V19H24V0Z" fill="#CACEDB" />
            </svg>
            <span>Выбор автомобиля</span>
          </div>
        </NavLink>
        <NavLink to='add' className={checkActive}>
          <div className={styles.menuItem}>
            <svg width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M25.6425 7.21705C26.1192 7.69365 26.1192 8.46355 25.6425 8.94015L23.4062 11.1765L18.8235 6.59381L21.0599 4.35745C21.5365 3.88085 22.3063 3.88085 22.7829 4.35745L25.6425 7.21705ZM4 26V21.4173L17.5159 7.9014L22.0986 12.4841L8.5827 26H4Z" fill="#CACEDB" />
            </svg>
            <span>Добавить автомобиль</span>
          </div>
        </NavLink>
        <NavLink to='rented' className={checkActive}>
          <div className={styles.menuItem}>
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.3529 16.2308H5V7H12.3529V16.2308ZM12.3529 27H5V17.7692H12.3529V27ZM13.8235 27H21.1765V17.7692H13.8235V27ZM30 27H22.6471V17.7692H30V27ZM13.8235 16.2308H21.1765V7H13.8235V16.2308ZM22.6471 16.2308V7H30V16.2308H22.6471Z" fill="#CACEDB" />
            </svg>
            <span>Арендованные автомобили</span>
          </div>
        </NavLink>
      </div>
    </nav>
  )
}

export { Menu };