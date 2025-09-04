'use client';

import clsx from 'clsx';
import React from 'react';

export type NavbarProps = {
  children?: React.ReactNode;
  className?: string;
  part?: 'start' | 'center' | 'end';
};

export const Navbar = ({ children, part, className }: NavbarProps) => {
  const baseKuliah = clsx('navbar', part, className);
  return <div className={baseKuliah}>{children}</div>;
};
