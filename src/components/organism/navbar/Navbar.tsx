'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerSide,
  DrawerToggle,
  Label,
  Menu,
  MenuIcon,
  MenuItem,
  NavCenter,
  NavEnd,
  NavStart,
} from '@/components';
import { Navbar } from '@/components';

export default function NavbarDrawer() {
  const pathname = usePathname();

  const routes = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'About', link: '/about' },
  ];

  return (
    <Drawer placement={'end'}>
      <DrawerToggle id="nav-drawer" type="checkbox" />
      <DrawerContent className=" flex flex-col">
        {/* Navbar */}
        <Navbar className="shadow-sm w-full fixed top-0 z-50 bg-white">
          <div className="container mx-auto flex items-center">
            <NavStart />
            <NavCenter routes={routes} pathname={pathname} />
            <NavEnd />
            <div className="flex-none lg:hidden">
              <Label
                htmlFor="nav-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <MenuIcon className="inline-block h-6 w-6 stroke-current" />
              </Label>
            </div>
          </div>
        </Navbar>
      </DrawerContent>

      {/* Navbar side */}
      <DrawerSide className=" z-100">
        <Label
          htmlFor="nav-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></Label>
        <div className="flex flex-col bg-base-200 min-h-full w-80">
          <div className="gap-2 flex flex-col p-4">
            <Link href={'/login'}>
              <Button className="btn btn-soft rounded-lg w-full">
                Sign In
              </Button>
            </Link>
            <Link href={'/register'}>
              <Button className="btn btn-neutral rounded-lg w-full">
                Sign Up
              </Button>
            </Link>
          </div>
          <Menu className="bg-base-200 flex-1 min-h-full w-80 p-4 gap-3">
            {/* Sidebar content here */}
            {routes.map((route) => (
              <MenuItem key={route.link}>
                <Link
                  href={route.link}
                  className={pathname === route.link ? 'menu-active' : ''}
                >
                  {route.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </DrawerSide>
    </Drawer>
  );
}
