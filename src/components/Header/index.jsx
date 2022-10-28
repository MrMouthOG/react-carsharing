import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentUser, toggleUserToken } from '../../store/usersSlice';
import { setSearchString, clearSearchString } from '../../store/searchSlice';
import { ReactComponent as LogOutSvg } from '../../assets/logout.svg';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';
import styles from './Header.module.scss';

function Header() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const usersList = useSelector((state) => state.users.users);
  const searchValue = useSelector((state) => state.search.searchString);

  useEffect(() => {
    const token = localStorage.getItem('isAuth');

    const check = usersList.find((item) => item.isAuth === token);

    if (check && token !== null) {
      dispatch(setCurrentUser(check));
    }
  }, [dispatch, usersList]);

  const logOut = () => {
    dispatch(toggleUserToken({ ...currentUser, isAuth: null }));
    localStorage.removeItem('isAuth');
    navigate('/login');
  };

  const avatar = currentUser?.avatar;
  const login = currentUser?.login;

  return (
    <header>
      <div className={styles.headerSearch}>
        <img src="/img/search.png" alt="Search" />
        <input
          value={searchValue}
          onChange={(e) => dispatch(setSearchString(e.target.value))}
          type="text"
          placeholder="Поиск..."
        />
        {searchValue && <CloseSvg onClick={() => dispatch(clearSearchString())} />}
      </div>
      <div className={styles.headerNotifications}>
        <img src="/img/notifications.png" alt="Notifications" />
      </div>
      <div className={styles.headerUser} onClick={() => setIsOpenPopUp((prev) => !prev)}>
        <img src={avatar} alt="Avatar" />
        <span>{login || 'Someone user'}</span>
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
