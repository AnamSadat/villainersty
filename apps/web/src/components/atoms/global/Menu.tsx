import clsx from 'clsx';
import React from 'react';

type MenuProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  direction?: 'vertical' | 'horizontal';
};

export const Menu = ({
  children,
  className,
  size = 'md',
  direction = 'vertical',
}: MenuProps) => {
  const baseClass = clsx(
    'menu',
    size && `menu-${size}`,
    direction && `menu-${direction}`,
    className
  );
  return <ul className={baseClass}>{children}</ul>;
};

type MenuItemProps = {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  focus?: boolean;
  className?: string;
};

export const MenuItem = ({
  children,
  active,
  disabled,
  focus,
  className,
}: MenuItemProps) => {
  const baseClass = clsx(
    active && 'menu-active',
    disabled && 'menu-disabled',
    focus && 'menu-focus',
    className
  );
  return <li className={baseClass}>{children}</li>;
};

type MenuTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const MenuTitle = ({ children, className }: MenuTitleProps) => {
  return <li className={clsx('menu-title', className)}>{children}</li>;
};

type MenuDropdownProps = {
  children: React.ReactNode;
  show?: boolean;
  className?: string;
};

export const MenuDropdown = ({
  children,
  show,
  className,
}: MenuDropdownProps) => {
  const baseClass = clsx(
    'menu-dropdown',
    show && 'menu-dropdown-show',
    className
  );
  return <ul className={baseClass}>{children}</ul>;
};

type MenuDropdownToggleProps = {
  children: React.ReactNode;
  className?: string;
};

export const MenuDropdownToggle = ({
  children,
  className,
}: MenuDropdownToggleProps) => {
  return (
    <div className={clsx('menu-dropdown-toggle', className)}>{children}</div>
  );
};
