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
  defaultOpen?: boolean;
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
  defaultOpen = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={clsx('w-full cursor-pointer select-none', className)}>
      {/* Trigger */}
      <div
        onClick={handleToggle}
        role="button"
        className="py-2 transition-colors duration-300 flex justify-between items-center"
      >
        {trigger}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className={clsx(
            'transform transition-transform duration-300',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        >
          <path
            fill="currentColor"
            d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
          />
        </svg>
      </div>

      {/* Dropdown content */}
      <div
        className={clsx(
          ' w-full overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
        )}
      >
        {children}
      </div>
    </div>
  );
};
