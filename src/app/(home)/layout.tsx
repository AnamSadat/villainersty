import Footer from '@/components/footer/Footer';
import NavbarDrawer from '@/components/navbar/Navbar';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavbarDrawer />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
