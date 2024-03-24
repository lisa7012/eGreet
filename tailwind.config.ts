import type { Config } from 'tailwindcss';

// TODO: check for any values that aren't used and remove them
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
        'white-ivory': '#FFFFFB',
        white: '#FFFFFF',
        black: '#333333',
        'light-gray': '#DCDBD9',
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
        'indie-flower': 'var(--indie-flower)',
        'bona-nova': 'var(--bona-nova)',
        'leckerli-one': 'var(--leckerli-one)',
        'cherry-bomb-one': 'var(--cherry-bomb-one)',
      },
      fontSize: {
        'intro-cl': 'clamp(0.875rem, 0.4606rem + 1.7680vw, 1.875rem)',
        'btn-cl': 'clamp(0.813rem, 0.7373rem + 0.3231vw, 1.125rem)',
        'footer-cl': 'clamp(0.625rem, 0.3660rem + 1.1050vw, 1.25rem)',
        'caption-cl': 'clamp(0.5rem, 0.4697rem + 0.1294vw, 0.625rem)',
        'next-btn-cl': 'clamp(0.625rem, 0.5340rem + 0.3883vw, 1rem)',
        'search-btn-cl': 'clamp(0.813rem, 0.7676rem + 0.1937vw, 1rem)',
        'input-cl': 'clamp(0.688rem, 0.6577rem + 0.1294vw, 0.813rem)',
        'label-cl': 'clamp(0.813rem, 0.7373rem + 0.3231vw, 1.125rem)',
        'card-msg-cl': 'clamp(0.813rem, 0.7373rem + 0.3231vw, 1.125rem)',
        'info-cl': 'clamp(0.75rem, 0.5706rem + 0.7654vw, 0.938rem)',
      },
      lineHeight: {
        'intro-cl': 'clamp(1.313rem, 0.7716rem + 2.3100vw, 2.25rem)',
      },
      padding: {
        'btn-x-cl': 'clamp(5.438rem, 5.2051rem + 0.9936vw, 6rem)',
        'btn-y-cl': 'clamp(0.5rem, 0.3964rem + 0.4420vw, 0.75rem)',
        'content-cl': 'clamp(1.875rem, 1.1527rem + 3.0817vw, 3.125rem)',
        'gallery-cl': 'clamp(3rem, -0.2464rem + 13.8511vw, 16.375rem)',
        'next-x-cl': 'clamp(0.938rem, 0.6802rem + 1.0998vw, 2rem)',
        'next-y-cl': 'clamp(0.125rem, 0.0643rem + 0.2589vw, 0.375rem)',
        'search-x-cl': 'clamp(1.313rem, 0.9946rem + 1.3587vw, 2.625rem)',
        'input-cl': 'clamp(0.313rem, 0.2373rem + 0.3231vw, 0.625rem)',
      },
      margin: {
        'logo-y-cl': 'clamp(1.875rem, 1.3694rem + 2.1572vw, 2.75rem)',
        'logo-x-cl': 'clamp(1.875rem, 1.1527rem + 3.0817vw, 3.125rem)',
        'search-cl': 'clamp(1.875rem, 1.5716rem + 1.2945vw, 3.125rem)',
        'creation-btn-cl': 'clamp(0.938rem, 0.7106rem + 0.9704vw, 1.875rem)',
      },
      width: {
        'logo-cl': 'clamp(4.438rem, 3.1941rem + 5.3074vw, 9.563rem)',
        'landing-btn-cl': 'clamp(15.625rem, 14.3301rem + 5.5249vw, 18.75rem)',
        'example-cl': 'clamp(18.75rem, 12.2496rem + 27.7350vw, 30rem)',
        'search-cl': 'clamp(15.625rem, 10.2852rem + 22.7832vw, 37.625rem)',
        'search-btn-cl': 'clamp(6.25rem, 4.5833rem + 3.4722vw, 8.75rem)',
        'next-btn-cl': 'clamp(3.406rem, 2.4580rem + 3.1600vw, 6.25rem)',
        'card-cl': 'clamp(16.875rem, 12.5515rem + 18.4471vw, 34.688rem)',
        'form-cl': 'clamp(16.875rem, 11.8689rem + 21.3592vw, 37.5rem)',
        'sm-input-cl': 'clamp(7.813rem, 5.3858rem + 10.3560vw, 17.813rem)',
        'color-p-cl': 'clamp(0.625rem, 0.4733rem + 0.6472vw, 1.25rem)',
        'react-colorful-cl': 'clamp(7.813rem, 6.6754rem + 4.8539vw, 12.5rem)',
        'cp-pointer-cl': 'clamp(1.125rem, 0.9733rem + 0.6472vw, 1.75rem)',
        'info-arrow-cl': 'clamp(1.563rem, 0.9666rem + 2.5445vw, 2.188rem)',
      },
      height: {
        'logo-cl': 'clamp(2.063rem, 1.2438rem + 3.4951vw, 5.438rem)',
        'landing-btn-cl': 'clamp(2.188rem, 1.9606rem + 0.9704vw, 3.125rem)',
        'photo-cl': 'clamp(8.125rem, 5.2427rem + 12.2977vw, 20rem)',
        'input-cl': 'clamp(1.875rem, 1.7233rem + 0.6472vw, 2.5rem)',
        'next-btn-cl': 'clamp(1.094rem, 0.8337rem + 0.8678vw, 1.875rem)',
        'card-cl': 'clamp(23.313rem, 17.3664rem + 25.3722vw, 47.813rem)',
        'card-pic-cl': 'clamp(11.438rem, 8.5254rem + 12.4272vw, 23.438rem)',
        'card-msg-cl': 'clamp(11.875rem, 8.8410rem + 12.9450vw, 24.375rem)',
        'txt-area-cl': 'clamp(6.063rem, 4.5006rem + 6.6661vw, 12.5rem)',
        'color-p-cl': 'clamp(0.625rem, 0.4733rem + 0.6472vw, 1.25rem)',
        'react-colorful-cl': 'clamp(7.813rem, 6.6754rem + 4.8539vw, 12.5rem)',
        'cp-pointer-cl': 'clamp(1.125rem, 0.9733rem + 0.6472vw, 1.75rem)',
        'cp-hue-cl': 'clamp(1.125rem, 1.0340rem + 0.3883vw, 1.5rem)',
        'info-arrow-cl': 'clamp(1.563rem, 0.9666rem + 2.5445vw, 2.188rem)',
      },
      gap: {
        'content-cl': 'clamp(1.875rem, 1.2250rem + 2.7735vw, 3rem)',
        'intro-cl': 'clamp(1.25rem, 1.0428rem + 0.8840vw, 1.75rem)',
        'gallery-x-cl': 'clamp(1.25rem, 0.9466rem + 1.2945vw, 2.5rem)',
        'gallery-y-cl': 'clamp(0.938rem, 0.5589rem + 1.6176vw, 2.5rem)',
        'search-cl': 'clamp(1.875rem, 1.5716rem + 1.2945vw, 3.125rem)',
        'photo-cl': 'clamp(0.125rem, 0.0340rem + 0.3883vw, 0.5rem)',
        'creation-cl': 'clamp(1.875rem, -0.0971rem + 8.4142vw, 10rem)',
        'form-cl': 'clamp(0.625rem, 0.4733rem + 0.6472vw, 1.25rem)',
        'input-field-cl': 'clamp(1.25rem, 1.1286rem + 0.5178vw, 1.75rem)',
        'color-p-cl': 'clamp(0.313rem, 0.2676rem + 0.1937vw, 0.5rem)',
        'creation-btn-cl': 'clamp(1.25rem, 1.1286rem + 0.5178vw, 1.75rem)',
      },
      zIndex: {
        '1': '1',
      },
      borderRadius: {
        'next-btn-cl': 'clamp(0.188rem, 0.1426rem + 0.1937vw, 0.375rem)',
      },
      borderWidth: {
        'photo-cl': 'clamp(0.188rem, 0.1730rem + 0.0642vw, 0.25rem)',
        'card-cl': 'clamp(0.094rem, 0.0712rem + 0.0973vw, 0.188rem)',
      },
    },
  },
  plugins: [],
};
export default config;
