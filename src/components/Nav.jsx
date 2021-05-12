import React from 'react';

import NavItem from './NavItem';

import Menu from '../utils/menu';

const Nav = props => {
	return (
		<nav
			className={`${props.active ? "h-full absolute inset-x-0 border-t flex flex-col overflow-y-scroll" : "hidden"} lg:static lg:h-auto lg:flex lg:flex-row lg:items-center lg:justify-center lg:flex-6 lg:overflow-hidden lg:border-t-0`}
			style={{top: '58px'}}
		>
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
	)
}

export default Nav