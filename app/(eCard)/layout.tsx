import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';

// components
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Photo Gallery',
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
      <body className={`${poppins.className} m-0 h-full bg-white-ivory`}>
        <main className="mx-0 my-auto flex h-full flex-col gap-search-cl">
          <Logo src="/eGreet_logo_color.svg" alt="eGreet Logo" />
          {children}
          <Footer textColor="text-black" />
        </main>
      </body>
    </html>
  );
}
