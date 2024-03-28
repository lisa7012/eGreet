import type { Metadata } from 'next';
import '../globals.css';

// components
import Footer from '../components/Footer';
import Logo from '../components/Logo';

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
      <body className="m-0 flex h-full flex-col bg-gradient bg-fixed font-poppins">
        <main className="relative z-0 mx-0 my-auto flex h-full flex-col py-0 max-sm:gap-2.5">
          <Logo src="/eGreet_logo_gray.svg" alt="eGreet Gray Logo" />
          {children}
          <Footer textColor="text-white" textOpacity="opacity-70" />
        </main>
      </body>
    </html>
  );
}
