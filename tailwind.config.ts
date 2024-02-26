import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        strawberry: {
          400: "#F46C83",
          600: "#DD415B",
        },
        mustard: "#ECBD2C",
        tangerine: "#E48659",
        'white-ivory': "#E48659",
        'white': "#FFFFFF",
        'black': "#333333",
      },
      backgroundImage: {
        'landing-pattern': "url('/landing_pattern.svg'), linear-gradient(135deg, rgba(244,108,131,1) 0%, rgba(221,65,91,1) 35%, rgba(228,134,89,1) 100%)",
      },
      backgroundSize: {
        '100%': 'auto 100%',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)'
      },
      padding: {
        '50px': '3.125rem',
      },
      margin: {
        '72px': '4.5rem',
      },
      width:{
        '300px': '18.75rem',
        '785px': '49.063rem',
      }
    },
  },
  plugins: [],
};
export default config;
