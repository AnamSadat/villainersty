import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type LogoProps = {
  className?: string;
  classNameImage?: string;
  width?: number;
  height?: number;
};

export const Logo = ({
  width = 80,
  height = 0,
  className,
  classNameImage,
}: LogoProps) => {
  return (
    <>
      <Link href={'/'} className={className}>
        <Image
          src={'/villainersty.png'}
          alt="logo"
          height={height}
          width={width}
          className={classNameImage}
        />
      </Link>
    </>
  );
};
