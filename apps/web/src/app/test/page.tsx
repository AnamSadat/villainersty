'use client';
import { CardActions } from '@/components/atoms/card/Card';
import { Button } from '@/components/atoms/global/Button';
import React from 'react';
import { toast } from 'react-toastify';

export default function TestUI() {
  const allVariants = [
    'btn',
    'btn-neutral',
    'btn-primary',
    'btn-secondary',
    'btn-accent',
    'btn-info',
    'btn-success',
    'btn-warning',
    'btn-error',
  ];

  const allSizes = ['btn-xs', 'btn-sm', 'btn-md', 'btn-lg', 'btn-xl'];
  const allStyleTypes = [
    'btn-outline',
    'btn-dash',
    'btn-soft',
    'btn-ghost',
    'btn-link',
  ];

  const drawerClasses = [
    'drawer',
    'drawer-toggle',
    'drawer-content',
    'drawer-side',
    'drawer-overlay',
    'drawer-end',
    'drawer-open',
  ];

  const navbarClasses = [
    'navbar',
    'navbar-start',
    'navbar-center',
    'navbar-end',
  ];

  const menuClasses = [
    'menu',
    'menu-title',
    'menu-dropdown',
    'menu-dropdown-toggle',
    'menu-disabled',
    'menu-active',
    'menu-focus',
    'menu-dropdown-show',
    'menu-xs',
    'menu-sm',
    'menu-md',
    'menu-lg',
    'menu-xl',
    'menu-vertical',
    'menu-horizontal',
  ];

  // ✅ Checkbox trigger classes
  const checkboxVariants = [
    'checkbox',
    'checkbox-primary',
    'checkbox-secondary',
    'checkbox-accent',
    'checkbox-neutral',
    'checkbox-success',
    'checkbox-warning',
    'checkbox-info',
    'checkbox-error',
  ];

  const checkboxSizes = [
    'checkbox-xs',
    'checkbox-sm',
    'checkbox-md',
    'checkbox-lg',
    'checkbox-xl',
  ];

  // ✅ Select trigger classes
  const selectVariants = [
    'select',
    'select-ghost',
    'select-neutral',
    'select-primary',
    'select-secondary',
    'select-accent',
    'select-info',
    'select-success',
    'select-warning',
    'select-error',
  ];

  const selectSizes = [
    'select-xs',
    'select-sm',
    'select-md',
    'select-lg',
    'select-xl',
  ];

  const handleSubmit = () => {
    toast.error('yoi');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      {/* Hidden div supaya Tailwind generate semua CSS */}
      <div className="hidden">
        {allVariants.map((v) => (
          <span key={v} className={v}>
            {v}
          </span>
        ))}
        {allSizes.map((s) => (
          <span key={s} className={s}>
            {s}
          </span>
        ))}
        {allStyleTypes.map((st) => (
          <span key={st} className={st}>
            {st}
          </span>
        ))}
        {drawerClasses.map((d) => (
          <span key={d} className={d}>
            {d}
          </span>
        ))}
        {navbarClasses.map((n) => (
          <span key={n} className={n}>
            {n}
          </span>
        ))}
        {menuClasses.map((m) => (
          <span key={m} className={m}>
            {m}
          </span>
        ))}

        {/* ✅ Checkbox trigger */}
        {checkboxVariants.map((cv) => (
          <input key={cv} type="checkbox" className={cv} />
        ))}
        {checkboxSizes.map((cs) => (
          <input key={cs} type="checkbox" className={cs} />
        ))}

        {/* ✅ Select trigger */}
        {selectVariants.map((sv) => (
          <select key={sv} className={sv}>
            <option>{sv}</option>
          </select>
        ))}
        {selectSizes.map((ss) => (
          <select key={ss} className={ss}>
            <option>{ss}</option>
          </select>
        ))}
      </div>

      {/* Button real */}
      <Button variant="info" styleType="soft" size="xl" onClick={handleSubmit}>
        Info Soft XL
      </Button>

      <CardActions className="flex justify-center">
        <Button variant="success" size="lg" wide>
          Success LG
        </Button>
      </CardActions>

      <Button variant="success" size="lg">
        Success LG
      </Button>

      <Button variant="warning" circle>
        Warning Default
      </Button>

      <Button styleType={'outline'} variant={'info'}>
        aas
      </Button>
      <Button styleType={'ghost'} variant={'info'}>
        aas
      </Button>

      {/* ✅ Real checkbox demo */}
      <div className="flex gap-4">
        <input type="checkbox" className="checkbox checkbox-primary" />
        <input
          type="checkbox"
          className="checkbox checkbox-success checkbox-lg"
        />
        <input
          type="checkbox"
          className="checkbox checkbox-warning checkbox-sm"
        />
      </div>

      {/* ✅ Real select demo */}
      <div className="flex gap-4">
        <select className="select select-primary w-40">
          <option>Primary</option>
        </select>
        <select className="select select-success select-lg w-40">
          <option>Success LG</option>
        </select>
        <select className="select select-warning select-sm w-40">
          <option>Warning SM</option>
        </select>
      </div>
    </div>
  );
}
