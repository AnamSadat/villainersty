'use client';
import { useState } from 'react';
import clsx from 'clsx';

type Option = { label: string; value: string };

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  className?: string;
};

export function CustomSelect({
  options,
  placeholder,
  className,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  return (
    <div className={clsx('relative inline-block w-48', className)}>
      {/* Trigger yang mirip <select> */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="select select-bordered w-full cursor-pointer flex justify-between items-center no-arrow"
      >
        <span>
          {selected ? selected.label : placeholder || 'Select option'}
        </span>
      </div>

      {/* Dropdown list */}
      {open && (
        <ul className="absolute mt-1 w-full bg-base-100 rounded-lg shadow z-10 max-h-60 overflow-auto">
          {options.map((opt) => (
            <li key={opt.value}>
              <div
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
              >
                {opt.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
