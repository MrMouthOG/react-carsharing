import React from 'react';

function Header() {
  return (
    <header>
      <div className='header__search'>
        <img src='/img/search.png' alt="Search" />
        <input type="text" placeholder='Search...' />
      </div>
      <div className='header__notifications'>
        <img src='/img/notifications.png' alt="Notifications" />
      </div>
      <div className='header__user'>
        <img src='/img/avatar.png' alt='Avatar' />
        <span>User 1</span>
      </div>
    </header>
  )
}

export default Header;