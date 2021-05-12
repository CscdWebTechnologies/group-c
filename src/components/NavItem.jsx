import React, { useState } from 'react';

import Card from './Card';

const NavItem = props => {
  const Links = props.links;
  const hasSection = !('links' in props && props.links == undefined);

  return (
    <div
      className="lg:NavItem lg:h-full lg:inline-flex"
    >

      <a
        className="lg:NavLink lg:h-full lg:inline-flex"
        href="#"
      >
        <div className="px-6 py-5 lg:p-0 lg:NavLink__inner lg:h-full lg:mx-5 lg:inline-flex lg:items-center lg:justify-center lg:relative">
          <span className="text-sm font-medium">{props.name}</span>
        </div>
      </a>

      {hasSection &&
        <section
          className="bg-gray-100 py-5 lg:bg-white lg:NavSection lg:px-10 lg:py-11 lg:absolute lg:z-10 lg:inset-x-0 lg:opacity-0 lg:invisible lg:pointer-events-none lg:bg-white lg:border-b"
        >
          <div
            className="lg:NavSection__content lg:max-w-screen-lg lg:mx-auto lg:opacity-0 lg:flex lg:justify-center"
          >
            {/* links */}
            <div
              className="lg:grid lg:items-start lg:justify-end lg:mr-16"
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
              className="hidden lg:block flex-1"
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