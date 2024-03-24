import type { Metadata } from 'next';
import '../globals.css';
import { fonts } from '../font/font';

// components
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'eGreet',
  icons: {
    icon: '/eGreet_icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 h-full">
      <body className={`${fonts.poppins.className} m-0 h-full bg-white-ivory`}>
        <main className="mx-0 my-auto flex h-full flex-col gap-search-cl">
          <Logo src="/eGreet_logo_color.svg" alt="eGreet Logo" />
          {children}
          <Footer textColor="text-black" />
        </main>
      </body>
    </html>
  );
}
