import { Button } from '@/components';
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
      <Button className={baseClassButton} onClick={() => setOpen(!open)}>
        {title}
      </Button>
      <ul className={clsx(baseClass, open && 'menu-dropdown-show')}>
        {children}
      </ul>
    </li>
  );
};
