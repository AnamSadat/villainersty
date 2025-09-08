'use client';
import clsx from 'clsx';
import { useState } from 'react';

export const MenuDropdown = ({
  title,
  children,
  className,
  classNameButton,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  classNameButton?: string;
}) => {
  const [open, setOpen] = useState(false);

  const baseClassButton = clsx('menu-dropdown-toggle', className);
  const baseClass = clsx('menu-dropdown', classNameButton);

  return (
    <li>
      <div
        role="button"
        className={baseClassButton}
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      <ul
        className={clsx(
          baseClass,
          'mt-2 w-full overflow-hidden transition-all duration-300',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        {children}
      </ul>
    </li>
  );
};
