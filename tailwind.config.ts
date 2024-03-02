import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        strawberry: {
          400: '#F46C83',
          600: '#DD415B',
        },
        mustard: '#ECBD2C',
        tangerine: '#E48659',
        'white-ivory': '#E48659',
        white: '#FFFFFF',
        black: '#333333',
      },
      screens: {
        mobile: '480px',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(135deg, rgba(244,108,131,1) 0%, rgba(221,65,91,1) 32%, rgba(228,134,89,1) 80%)',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
      },
      fontSize: {
        'intro-cl': 'clamp(0.875rem, 0.4606rem + 1.7680vw, 1.875rem)',
        'btn-cl': 'clamp(0.813rem, 0.6837rem + 0.5516vw, 1.125rem)',
        'footer-cl': 'clamp(0.625rem, 0.3660rem + 1.1050vw, 1.25rem)',
      },
      lineHeight: {
        'intro-cl': 'clamp(1.313rem, 0.7716rem + 2.3100vw, 2.25rem)',
      },
      padding: {
        'btn-x-cl': 'clamp(5.438rem, 5.2051rem + 0.9936vw, 6rem)',
        'btn-y-cl': 'clamp(0.5rem, 0.3964rem + 0.4420vw, 0.75rem)',
        'content-cl': 'clamp(1.875rem, 1.1527rem + 3.0817vw, 3.125rem)',
      },
      margin: {
        '50px': '3.125rem',
        'logo-y-cl': 'clamp(1.875rem, 1.3694rem + 2.1572vw, 2.75rem)',
        'logo-x-cl': 'clamp(1.875rem, 1.1527rem + 3.0817vw, 3.125rem)',
      },
      width: {
        '785px': '49.063rem',
        'logo-cl': 'clamp(4.438rem, 3.1941rem + 5.3074vw, 9.563rem)',
        'btn-cl': 'clamp(15.625rem, 14.3301rem + 5.5249vw, 18.75rem)',
        'example-cl': 'clamp(18.75rem, 12.2496rem + 27.7350vw, 30rem)',
      },
      height: {
        'logo-cl': 'clamp(2.063rem, 1.2438rem + 3.4951vw, 5.438rem)',
      },
      gap: {
        'content-cl': 'clamp(1.875rem, 1.2250rem + 2.7735vw, 3rem)',
        'intro-cl': 'clamp(1.25rem, 1.0428rem + 0.8840vw, 1.75rem)',
      },
      zIndex: {
        '1': '1',
      },
    },
  },
  plugins: [],
};
export default config;
