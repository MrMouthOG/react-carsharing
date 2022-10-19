import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1>
        <span>500</span>
        <br />
        Что-то пошло не так
      </h1>
      <p>Попробуйте ещё раз позднее</p>
      <button onClick={() => navigate(-1)} className='btn'>Назад</button>
    </div>
  )
}

export { NotFoundBlock };