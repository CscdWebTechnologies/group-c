import React from 'react';

import logo from '../static/logo.svg';

import Menu from '../utils/menu';

import './Header.css';

import NavItem from './NavItem';


const Header = () => {
  return (
    <header className="sticky z-20 top-0 border-b tracking-wide">

      <div className="h-16 px-5 flex max-w-screen-xl mx-auto">

        <div className="flex items-center flex-2">
          <a className="inline-block" href="/">
            <img src={logo} height="20" width="112" alt="Logo" style={{maxHeight: '20px'}} />
          </a>
        </div>

        {/* burger button */}
        <div className="BurgerIcon py-5 pl-5 hidden">
          <div className="BurgerIcon__line"></div>
        </div>

        <nav className="flex items-center justify-center flex-6">
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

        <div className="flex items-center justify-end flex-2 text-sm font-medium">
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
