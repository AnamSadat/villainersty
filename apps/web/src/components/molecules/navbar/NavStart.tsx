import { Logo, NavbarPart } from '@/components';
import React from 'react';

export const NavStart = () => {
  return (
    <NavbarPart className=" mx-2 flex-1 px-2" part={'start'}>
      <Logo />
    </NavbarPart>
  );
};
