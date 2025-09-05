import React from 'react';
import { Input, Label } from '@/components';
import clsx from 'clsx';

export type DrawerProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  type?: string;
  placement?: 'end';
  htmlFor?: string;
  ariaLabel?: string;
};

export const Drawer = ({ children, className, placement }: DrawerProps) => {
  const baseClass = clsx(
    'drawer',
    placement && `drawer-${placement}`,
    className
  );
  return <div className={clsx('drawer', baseClass)}>{children}</div>;
};

export const DrawerToggle = ({ className, id, type }: DrawerProps) => {
  return (
    <Input id={id} type={type} className={clsx('drawer-toggle', className)} />
  );
};

export const DrawerContent = ({ children, className }: DrawerProps) => {
  return <div className={className}>{children}</div>;
};

export const DrawerButton = ({ children, className, htmlFor }: DrawerProps) => {
  const baseClass = clsx('drawer-button', className);
  return (
    <Label className={baseClass} htmlFor={htmlFor}>
      {children}
    </Label>
  );
};

export const DrawerSide = ({ children, className }: DrawerProps) => {
  const baseClass = clsx('drawer-side', className);
  return <div className={baseClass}>{children}</div>;
};

export const DrawerOverlay = ({
  children,
  className,
  ariaLabel,
  htmlFor,
}: DrawerProps) => {
  return (
    <Label className={className} aria-label={ariaLabel} htmlFor={htmlFor}>
      {children}
    </Label>
  );
};
