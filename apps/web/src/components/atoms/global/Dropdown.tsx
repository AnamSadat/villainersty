'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

type DropdownProps = {
  trigger: React.ReactNode; // Tombol pemicu
  children: React.ReactNode; // Isi dropdown
  placement?: 'start' | 'center' | 'end'; // horizontal align
  direction?: 'top' | 'bottom' | 'left' | 'right'; // arah buka
  hover?: boolean; // buka saat hover
  open?: boolean; // force open
  inline?: boolean;
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

export const DropdownManual: React.FC<DropdownProps> = ({
  trigger,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={clsx('w-full cursor-pointer select-none', className)}>
      {/* Trigger */}
      <div
        onClick={handleToggle}
        role="button"
        className="transition-colors duration-300"
      >
        {trigger}
      </div>

      {/* Dropdown content */}
      <div
        className={clsx(
          'mt-2 w-full overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        {children}
      </div>
    </div>
  );
};
