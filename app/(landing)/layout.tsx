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
    <html lang="en" className="m-0 h-full">
      <body
        className={`${poppins.className} m-0 flex h-full flex-col bg-gradient bg-fixed `}
      >
        <main className="relative z-0 mx-0 my-auto flex h-full flex-col py-0 max-sm:gap-2.5">
          <Logo src="/eGreet_logo_gray.svg" alt="eGreet Gray Logo" />
          {children}
          <Footer textColor="text-white" textOpacity="opacity-70" />
        </main>
      </body>
    </html>
  );
}
