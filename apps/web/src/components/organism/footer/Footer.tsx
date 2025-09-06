import Image from 'next/image';
import Link from 'next/link';
import { FooterMain, FooterTitle } from '@/components';

export default function Footer() {
  const services = [
    { link: '/', name: 'Branding' },
    { link: '/', name: 'Design' },
    { link: '/', name: 'Marketing' },
    { link: '/', name: 'Advertisement' },
  ];

  const company = [
    { link: '/', name: 'About Us' },
    { link: '/', name: 'Contact' },
    { link: '/', name: 'Jobs' },
    { link: '/', name: 'Preset Kit' },
  ];

  const legal = [
    { link: '/', name: 'Term of use' },
    { link: '/', name: 'Privacy Police' },
    { link: '/', name: 'Cookie Police' },
  ];

  return (
    <div>
      <FooterMain
        className="
          bg-base-200 text-base-content p-10
          flex flex-col items-center text-center
          sm:grid sm:grid-cols-4 sm:items-center sm:text-left
        "
      >
        <aside className="flex flex-col items-center sm:items-start w-full">
          <Image src={'/villainersty.png'} alt="logo" width={100} height={0} />
          <p>
            Villainersty
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>

        <nav className="flex flex-col items-center sm:items-start gap-1">
          <FooterTitle>Services</FooterTitle>
          {services.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col items-center sm:items-start gap-1">
          <FooterTitle>Company</FooterTitle>
          {company.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col items-center sm:items-start gap-1">
          <FooterTitle>Legal</FooterTitle>
          {legal.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>
      </FooterMain>

      <div className="bg-base-300 text-center py-4 text-sm">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Villainersty
        </p>
      </div>
    </div>
  );
}
