'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, Search, Settings, User } from 'lucide-react';

export default function NavbarDrawer() {
  const pathname = usePathname();

  const routes = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'About', link: '/about' },
  ];

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar shadow-sm w-full fixed top-0 z-50 bg-white">
          <div className="container mx-auto flex items-center">
            {/* Navbar start */}
            <div className="navbar-start mx-2 flex-1 px-2">
              <Link href={'/'}>
                <Image
                  src={'/villainersty.png'}
                  alt="logo"
                  height={0}
                  width={80}
                />
              </Link>
            </div>

            {/* Navbar center */}
            <div className="navbar-center hidden flex-none lg:block">
              <ul className="menu menu-horizontal gap-3">
                {/* Navbar menu content here */}
                {routes.map((route) => (
                  <li key={route.link}>
                    <Link
                      href={route.link}
                      className={pathname === route.link ? 'font-bold ' : ''}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navbar end */}
            <div className="navbar-end flex-1 gap-4">
              <div>
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" required placeholder="Search" />
                </label>
              </div>

              {/* Cart */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    {/* svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* avatar */}
              <div className="gap-2 hidden lg:flex">
                <Link href={'/login'}>
                  <button className="btn btn-soft rounded-lg">Sign In</button>
                </Link>
                <Link href={'/register'}>
                  <button className="btn btn-neutral rounded-lg">
                    Sign Up
                  </button>
                </Link>
              </div>
              {/* <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <Image
                      alt="User avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link href="#">
                      <User size={14} /> Profile
                    </Link>
                  </li>
                  <li>
                    <a>
                      <Settings size={14} /> Settings
                    </a>
                  </li>
                  <li>
                    <a>
                      <LogOut size={14} /> Logout
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar side */}
      <div className="drawer-side z-100">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col bg-base-200 min-h-full w-80">
          <div className="gap-2 flex flex-col p-4">
            <Link href={'/login'}>
              <button className="btn btn-soft rounded-lg w-full">
                Sign In
              </button>
            </Link>
            <Link href={'/register'}>
              <button className="btn btn-neutral rounded-lg w-full">
                Sign Up
              </button>
            </Link>
          </div>
          <ul className="menu bg-base-200 flex-1 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {routes.map((route) => (
              <li key={route.link}>
                <Link href={route.link}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
