import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
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
          <Link href={'#'} className="link link-hover">
            Branding
          </Link>
          <Link href={'#'} className="link link-hover">
            Design
          </Link>
          <Link href={'#'} className="link link-hover">
            Marketing
          </Link>
          <Link href={'#'} className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href={'#'} className="link link-hover">
            About us
          </Link>
          <Link href={'#'} className="link link-hover">
            Contact
          </Link>
          <Link href={'#'} className="link link-hover">
            Jobs
          </Link>
          <Link href={'#'} className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href={'#'} className="link link-hover">
            Terms of use
          </Link>
          <Link href={'#'} className="link link-hover">
            Privacy policy
          </Link>
          <Link href={'#'} className="link link-hover">
            Cookie policy
          </Link>
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
