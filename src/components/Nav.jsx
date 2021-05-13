import React from 'react';

import NavItem from './NavItem';

import Menu from '../utils/menu';

const Nav = props => {

	return (
		<nav
			className={`Nav ${props.active ? "Nav-offset-top h-full absolute inset-x-0 border-t flex flex-col overflow-y-scroll" : "hidden"} lg:static lg:h-auto lg:flex lg:flex-row lg:items-center lg:justify-center lg:flex-6 lg:overflow-visible lg:border-t-0`}
		>
			{Menu.map((item, id) => {
        return (
          <NavItem
            id={id}
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