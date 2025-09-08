import {
  Badge,
  Button,
  CardActions,
  CardBody,
  Chart,
  Dropdown,
  Indicator,
  IndicatorItem,
  NavbarPart,
  SearchInput,
} from '@/components';
import { LogOut, Settings, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const NavEnd = () => {
  return (
    <NavbarPart className=" flex-1 gap-4" part={'end'}>
      <div>
        <SearchInput />
      </div>

      {/* Cart */}
      <Dropdown
        className=""
        placement={'end'}
        trigger={
          <Indicator>
            <IndicatorItem className="">
              <Badge className="" size={'sm'}>
                8
              </Badge>
            </IndicatorItem>
            <Chart className="h-5 w-5" />
          </Indicator>
        }
      >
        <CardBody>
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <CardActions>
            <Button variant={'primary'} block>
              View cart
            </Button>
          </CardActions>
        </CardBody>
      </Dropdown>

      {/* Login Regist */}
      <div className="gap-2 hidden lg:flex">
        <Link href={'/login'}>
          <Button className=" rounded-lg" variant={'neutral'}>
            Login
          </Button>
        </Link>
      </div>

      {/* Avatar */}
      {/* <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              alt="User avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              width={40}
              height={40}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link href="#">
              <User size={14} /> Profile
            </Link>
          </li>
          <li>
            <a>
              <Settings size={14} /> Settings
            </a>
          </li>
          <li>
            <a>
              <LogOut size={14} /> Logout
            </a>
          </li>
        </ul>
      </div> */}
    </NavbarPart>
  );
};
