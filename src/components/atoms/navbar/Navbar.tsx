'use client';

import clsx from 'clsx';
import React from 'react';

export type NavbarProps = {
  children?: React.ReactNode;
  className?: string;
};

export type NavbarPartProps = NavbarProps & {
  part?: 'start' | 'center' | 'end';
};

export const Navbar = ({ children, className }: NavbarProps) => {
  const baseClassNavbar = clsx('navbar', className);
  return <div className={baseClassNavbar}>{children}</div>;
};

export const NavbarPart = ({ children, className, part }: NavbarPartProps) => {
  const baseClassNavbarPart = clsx(part && `navbar-${part}`, className);
  return <div className={baseClassNavbarPart}>{children}</div>;
};
