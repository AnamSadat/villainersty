'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, Settings, User } from 'lucide-react';

export default function NavbarDrawer() {
  const pathname = usePathname();

  const routes = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'About', link: '/about' },
  ];

  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar shadow-sm w-full">
          {/* <-- CONTAINER: batasi lebar dan center konten navbar --> */}
          <div className="container mx-auto px-4 flex items-center gap-4">
            {/* Mobile hamburger */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="nav-drawer"
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

            {/* Logo (flex-1 agar menu center tetap di tengah) */}
            <div className="flex-1">
              <Link href="/" className="font-bold text-lg">
                LOGO
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:block">
              <ul className="menu menu-horizontal gap-2">
                {routes.map((r) => (
                  <li key={r.link}>
                    <Link
                      href={r.link}
                      className={pathname === r.link ? 'font-bold' : ''}
                    >
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right icons */}
            <div className="flex-none flex items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />

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

              {/* Avatar */}
              <div className="dropdown dropdown-end">
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
              </div>
            </div>
          </div>
          {/* <-- akhir container --> */}
        </div>
      </div>

      {/* Drawer side (sidebar full-height) */}
      <div className="drawer-side">
        <label
          htmlFor="nav-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {routes.map((route) => (
            <li key={route.link}>
              <Link href={route.link}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
