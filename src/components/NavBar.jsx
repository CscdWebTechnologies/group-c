import React, { useState } from 'react';

import NavItem from './NavItem';
import Button from './Button';

import logo from '../static/logo.svg';

import menu from '../utils/menu';


const NavBarLeft = () => (
  <div className="pb-1 flex items-center flex-2">
    <a className="inline-block" href="/">
      <img src={logo} height="20" width="112" alt="Logo" style={{maxHeight: '20px'}} />
    </a>
  </div>
)

const NavBarMiddle = props => {
  return (
    <div className={`Nav ${props.active ? "Nav-offset-top h-full absolute inset-x-0 border-t flex flex-col overflow-y-scroll" : "hidden"} lg:static lg:h-auto lg:flex lg:flex-row lg:items-center lg:justify-center lg:flex-6 lg:overflow-visible lg:border-t-0`}>
      {menu && menu.map(item => (
        <NavItem
          key={item.name}
          idx={item.id}
          name={item.name}
          links={item.links}
          summary={item.summary}
        />
      ))}
    </div>
  )
}

const NavBarRight = () => (
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
)

const NavBar = () => {
  const [isNavActive, setNavActive] = useState(false)

  const toggleMenu = () => isNavActive ? setNavActive(false) : setNavActive(true)

  return (
    <nav className={`${isNavActive ? "fixed inset-0" : "sticky top-0"} lg:static z-20 border-b bg-white tracking-wide`}>
      <div
        className="px-5 flex mx-auto"
        style={{maxWidth: '1220px', height: '58px'}}
      >
        <NavBarLeft />
        <NavBarMiddle active={isNavActive} />
        <NavBarRight />
        <div className="lg:hidden flex py-5 pl-5">
          <div
            onClick={() => toggleMenu()}
            className={`Burger ${isNavActive ? "active" : ""}`}
          >
            <div className="Burger__inner"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
