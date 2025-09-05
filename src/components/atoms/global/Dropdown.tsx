'use client';
import React from 'react';
import clsx from 'clsx';

type DropdownProps = {
  trigger: React.ReactNode; // Tombol pemicu
  children: React.ReactNode; // Isi dropdown
  placement?: 'start' | 'center' | 'end'; // horizontal align
  direction?: 'top' | 'bottom' | 'left' | 'right'; // arah buka
  hover?: boolean; // buka saat hover
  open?: boolean; // force open
  className?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  placement = 'start',
  direction = 'bottom',
  hover = false,
  className,
}) => {
  const baseClass = clsx(
    'dropdown',
    placement && `dropdown-${placement}`,
    direction && `dropdown-${direction}`,
    hover && 'dropdown-hover',
    className
  );

  return (
    <div className={baseClass}>
      {/* Trigger */}
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        {trigger}
      </div>

      {/* Content */}
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {children}
      </ul>
    </div>
  );
};
