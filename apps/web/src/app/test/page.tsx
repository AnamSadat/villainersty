import { CardActions } from '@/components/atoms/card/Card';
import { Button } from '@/components/atoms/global/Button';
import React from 'react';

export default function TestUI() {
  // semua variant + styleType dijadikan hidden untuk trigger Tailwind JIT
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

  // drawer, navbar, menu trigger
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
      </div>

      {/* Button real */}
      <Button variant="info" styleType="soft" size="xl">
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
    </div>
  );
}
