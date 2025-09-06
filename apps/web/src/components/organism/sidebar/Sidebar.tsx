import { Card, CardBody, SearchInput } from '@/components';
import clsx from 'clsx';
import React from 'react';
import { DropdownManual } from '@/components/atoms/global/Dropdown';

export type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  const baseClass = clsx('h-auto', className);
  return (
    <div className={baseClass} {...props}>
      <Card className="h-auto p-5">
        <SearchInput />
        <CardBody>
          <DropdownManual trigger={<div>saya</div>}>
            <span className="text-lg font-bold">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
          </DropdownManual>
        </CardBody>
      </Card>
    </div>
  );
};
