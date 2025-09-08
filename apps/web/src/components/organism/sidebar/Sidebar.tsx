import { Card, CardBody, Divider, SearchInput } from '@/components';
import clsx from 'clsx';
import React from 'react';
import { DropdownManual } from '@/components/atoms/global/Dropdown';
import { CheckboxLabel } from '@/components/molecules/global/CheckboxLabel';

export type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  const baseClass = clsx('h-auto mb-10', className);
  return (
    <div className={baseClass} {...props}>
      <Card className="h-auto p-5">
        <SearchInput />
        <CardBody>
          <DropdownManual trigger={<h1>Kategory</h1>} defaultOpen>
            <div className="flex flex-col gap-3">
              <CheckboxLabel
                className="text-info cursor-pointer w-full"
                variant={'neutral'}
                sizes={'xs'}
              >
                Subtotal: $999
              </CheckboxLabel>
              <CheckboxLabel
                className="text-info cursor-pointer w-full"
                variant={'neutral'}
                sizes={'xs'}
              >
                Subtotal: $999
              </CheckboxLabel>
            </div>
          </DropdownManual>

          <Divider className="p-0 m-0" />

          <DropdownManual trigger={<div>Tipe Produk</div>} defaultOpen>
            <div className="flex flex-col gap-3">
              <CheckboxLabel
                className="text-info cursor-pointer w-full"
                variant={'neutral'}
                sizes={'xs'}
              >
                Subtotal: $999
              </CheckboxLabel>
              <CheckboxLabel
                className="text-info cursor-pointer w-full"
                variant={'neutral'}
                sizes={'xs'}
              >
                Subtotal: $999
              </CheckboxLabel>
            </div>
          </DropdownManual>

          <Divider className="p-0 m-0" />

          <DropdownManual trigger={<div>Harga</div>} defaultOpen>
            <div className="flex flex-col gap-3">
              <CheckboxLabel
                className="text-info cursor-pointer w-full"
                variant={'neutral'}
                sizes={'xs'}
              >
                Subtotal: $999
              </CheckboxLabel>
              <CheckboxLabel
                className="text-info cursor-pointer w-full"
                variant={'neutral'}
                sizes={'xs'}
              >
                Subtotal: $999
              </CheckboxLabel>
              <CheckboxLabel
                className="text-info cursor-pointer w-full"
                variant={'neutral'}
                sizes={'xs'}
              >
                Subtotal: $999
              </CheckboxLabel>
            </div>
          </DropdownManual>
        </CardBody>
      </Card>
    </div>
  );
};
