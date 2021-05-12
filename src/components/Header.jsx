import React, { useState } from 'react';

import logo from '../static/logo.svg';

import './Header.css';

import Nav from './Nav';

const Header = () => {
  const [isNavActive, setNavActive] = useState(false)

  const toggleMenu = () => isNavActive ? setNavActive(false) : setNavActive(true)

  return (
    <header
      className={`${isNavActive ? "fixed z-20 inset-0 top-0" : "sticky z-20 top-0 "} lg:static border-b bg-white tracking-wide`}
    >

      <div
        className="px-5 flex mx-auto"
        style={{maxWidth: '1142px', height: '58px'}}
      >

        <div className="pb-1 flex items-center flex-2">
          <a className="inline-block" href="/">
            <img src={logo} height="20" width="112" alt="Logo" style={{maxHeight: '20px'}} />
          </a>
        </div>

        <Nav active={isNavActive} />

        <div className="hidden lg:flex items-center justify-end flex-2 text-sm font-medium">
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

        <div className="lg:hidden flex py-5 pl-5">
          <div
            onClick={() => toggleMenu()}
            className={`Burger ${isNavActive ? "active" : ""}`}
          >
            <div className="Burger__inner"></div>
          </div>
        </div>

      </div>

    </header>
  )
}

export default Header
