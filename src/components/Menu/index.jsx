import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import { ReactComponent as MenuCars } from '../../assets/menuItem1.svg';
import { ReactComponent as MenuAdd } from '../../assets/menuItem2.svg';
import { ReactComponent as MenuRented } from '../../assets/menuItem3.svg';

import styles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={styles.menuWrapper}>
      <div className={styles.menuLogo}>
        <LogoSvg />
        <span>Need for car</span>
      </div>
      <div className={styles.menuItems}>
        <NavLink to="/" end>
          <div className={styles.menuItem}>
            <MenuCars />
            <span>Выбор автомобиля</span>
          </div>
        </NavLink>
        <NavLink to="add">
          <div className={styles.menuItem}>
            <MenuAdd />
            <span>Добавить автомобиль</span>
          </div>
        </NavLink>
        <NavLink to="rented">
          <div className={styles.menuItem}>
            <MenuRented />
            <span>Арендованные автомобили</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export { Menu };
