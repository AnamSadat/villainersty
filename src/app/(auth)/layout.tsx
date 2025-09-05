import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="antialiased relative w-full  lg:h-screen mt-0 text-white">
        <header className="fixed top-0 z-50 w-full">
          <div className="container flex py-2 mx-auto items-center px-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/villainersty.png"
                alt="Cerita.in Logo"
                width={80}
                height={0}
                priority
              />
            </Link>
          </div>
        </header>
        {children}
      </div>
    </>
  );
}
