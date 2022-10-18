import React from 'react'

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.wrapper}>
      <h1>
        <span>500</span>
        <br />
        Что-то пошло не так
      </h1>
      <p>Попробуйте ещё раз позднее</p>
      <button className='btn'>Назад</button>
    </div>
  )
}

export { NotFoundBlock };