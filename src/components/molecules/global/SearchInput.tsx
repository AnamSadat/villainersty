import { Input, Label, Search } from '@/components';
import React from 'react';

export const SearchInput = () => {
  return (
    <>
      <Label className="input">
        <Search className="h-[1em] opacity-50" />
        <Input type="search" required placeholder="Search" />
      </Label>
    </>
  );
};
