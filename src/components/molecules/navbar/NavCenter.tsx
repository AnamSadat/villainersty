import { Menu, MenuItem, NavbarPart } from '@/components';
import Link from 'next/link';
import React from 'react';

type Route = { name: string; link: string };

export const NavCenter = ({
  routes,
  pathname,
}: {
  routes: Route[];
  pathname: string;
}) => {
  return (
    <NavbarPart className=" hidden flex-none lg:block" part={'center'}>
      <Menu className="gap-3" direction={'horizontal'}>
        {/* Navbar menu content here */}
        {routes.map((route) => (
          <MenuItem key={route.link}>
            <Link
              href={route.link}
              className={pathname === route.link ? 'menu-active ' : ''}
            >
              {route.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </NavbarPart>
  );
};
