import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Menu } from '../Menu';

function Layout() {
  return (
    <div className="main__wrapper">
      <Menu />
      <Header />
      <main className="main__content">
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
