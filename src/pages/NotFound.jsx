import React from 'react';

function NotFound() {
  return (
    <div className='not-found__wrapper'>
      <h1 className='not-found__title'>
        <span>500</span>
        <br />
        Что-то пошло не так
      </h1>
      <p className='not-found__description'>Попробуйте ещё раз позднее</p>
      <button className='btn btn_blue'>Назад</button>
    </div>
  )
}

export default NotFound;