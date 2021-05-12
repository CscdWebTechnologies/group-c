import React, { useState } from 'react';

import logo from '../static/logo.svg';

import Menu from '../utils/menu';

import './Header.css';

import NavItem from './NavItem';


const Header = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => menu ? setMenu(false) : setMenu(true)

  return (
    <header className="sticky z-20 top-0 border-b tracking-wide">

      <div
        className="px-5 flex mx-auto"
        style={{maxWidth: '1142px', height: '58px'}}
      >

        <div className="flex items-center flex-2">
          <a className="inline-block pb-1" href="/">
            <img src={logo} height="20" width="112" alt="Logo" style={{maxHeight: '20px'}} />
          </a>
        </div>

        {/* menu button */}
        <div className="flex py-5 pl-5">
          <div
            onClick={() => toggleMenu()}
            className={menu ? "Burger active" : "Burger"}
          >
            <div className="Burger__inner"></div>
          </div>
        </div>

        <nav className="hidden flex items-center justify-center flex-6">
          {Menu.map((item) => {
            return (
              <NavItem
                key={item.name}
                name={item.name}
                links={item.links}
                summary={item.summary}
              />
            );
          })}
        </nav>

        <div className="hidden flex items-center justify-end flex-2 text-sm font-medium">
          <a
            className="mr-5 hover:text-blue-primary"
            href="#/signin"
          >
            Sign in
          </a>
          <button
            className="font-medium text-white border border-blue-primary bg-blue-primary"
            style={{padding: '10px 12px', lineHeight: '14px', borderRadius: '4px'}}
          >
            Get started
          </button>
        </div>

      </div>

    </header>
  )
}

export default Header
