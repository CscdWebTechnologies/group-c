import React, { useState } from 'react';

import Card from './Card';

const NavItem = props => {
  const Links = props.links;
  const hasSection = !('links' in props && props.links == undefined);

  return (
    <div
      className="NavItem h-full inline-flex"
    >

      <a
        className="NavLink h-full inline-flex"
        href="#"
      >
        <div className="NavLink__inner h-full mx-5 inline-flex items-center justify-center relative">
          <span className="text-sm font-medium">{props.name}</span>
        </div>
      </a>

      {hasSection &&
        <section
          className="NavSection px-10 py-11 absolute z-10 inset-x-0 opacity-0 invisible pointer-events-none bg-white border-b"
        >
          <div
            className="NavSection__content max-w-screen-lg mx-auto opacity-0 flex justify-center"
          >
            {/* links */}
            <div
              className="grid items-start justify-end mr-16"
            >
              {Links.map((item) => {
                return (
                  <Card
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                  />
                );
              })}
            </div>
            {/* summary */}
            <div
              className="flex-1"
              style={{maxWidth: '320px'}}
            >
              <h4 className="font-medium">{props.summary.title}</h4>
              <p className="mt-2 font-light leading-relaxed">{props.summary.description}</p>
              <a
                className="inline-flex mt-5 font-medium text-blue-primary hover:opacity-75"
                href="#"
              >
                {props.summary.link}
              </a>
            </div>
          </div>
        </section>
      }

    </div>
  )
}

export default NavItem