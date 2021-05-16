import React, { useState } from 'react';

import NavItemLink from './NavItemLink';

const NavItemSectionRight = props => (
  <div
    className="hidden lg:block flex-1"
    style={{maxWidth: '320px'}}
  >
    <h4 className="font-medium">{props.title}</h4>
    <p className="mt-2 font-light leading-relaxed">{props.description}</p>
    <a
      className="inline-flex mt-5 font-medium text-blue-primary hover:opacity-75"
      href="#"
    >
      {props.link}
    </a>
  </div>
)

const NavItemSection = props => {
  const links = props.links;
  const summary = props.summary;

  return (
    <section className="NavSection hidden lg:block bg-gray-100 py-5 lg:bg-white lg:px-10 lg:py-11 lg:absolute lg:z-10 lg:inset-x-0 lg:opacity-0 lg:invisible lg:pointer-events-none lg:bg-white lg:border-b">
      <div className="NavSection__content lg:max-w-screen-lg lg:mx-auto lg:opacity-0 lg:flex lg:justify-center">
        <div className="lg:grid lg:items-start lg:justify-end lg:mr-16">
          {links.map(item => (
            <NavItemLink key={item.title} title={item.title} icon={item.icon} description={item.description} />
          ))}
        </div>
        <NavItemSectionRight
          title={summary.title}
          description={summary.description}
          link={summary.link}
        />
      </div>
    </section>
  )
}

const NavItem = props => {
  const hasSection = !('links' in props && props.links == undefined);

  const idx = props.idx;
  const name = props.name;
  const links = props.links;
  const summary = props.summary;

  return (
    <div className="NavItem lg:h-full lg:inline-flex">
      <a
        className="NavLink lg:h-full lg:inline-flex"
        href="#"
        tabIndex={idx}
      >
        <div className="NavLink__inner px-6 py-5 lg:p-0 lg:h-full lg:mx-4 lg:inline-flex lg:items-center lg:justify-center lg:relative">
          <span className="text-sm font-medium">{name}</span>
        </div>
      </a>

      {hasSection && <NavItemSection links={links} summary={summary} />}

    </div>
  )
}

export default NavItem