import React from 'react';

import Card from './Card';

const NavItem = props => {
  const Links = props.links;

  return (
    <React.Fragment>
      <a className="NavLink h-full inline-flex" href="#">
        <div className="h-full mx-5 inline-flex items-center justify-center relative">
          <span>{props.name}</span>
        </div>
      </a>
       {/* nav section */}
      {!('links' in props && props.links == undefined) &&
        <section className="NavSection absolute z-10 inset-x-0 pointer-events-none bg-white">
          <div className="NavSection__content max-w-screen-lg mx-auto flex justify-center">
            {/* links */}
            <div>
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
            <div>
              <h4>{props.summary.title}</h4>
              <h4>{props.summary.description}</h4>
              <h4>{props.summary.link}</h4>
            </div>

          </div>
        </section>
      }
    </React.Fragment>
  )
}

export default NavItem