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
    <html lang="en">
      <body className={poppins.className}>
        <Logo src="/eGreet_logo_color.svg" alt="eGreet Logo" />
        {children}
        <Footer textColor="text-black" />
      </body>
    </html>
  );
}
