import Image from 'next/image';
import Link from 'next/link';

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
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <Image src={'/villainersty.png'} alt="logo" width={100} height={0} />
          <p>
            Villainersty
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          {services.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          {company.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          {legal.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>
      </footer>
      <div className="bg-base-300 text-center py-4 text-sm">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Villainersty
        </p>
      </div>
    </div>
  );
}
