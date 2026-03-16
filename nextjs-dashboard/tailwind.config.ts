import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        // Handcrafted Haven brand colors
        // Primary: Warm amber/brown tones evoking natural craftsmanship
        amber: {
          50: '#FFF8F0',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#C87533',
          600: '#A0522D',
          700: '#7C3F1E',
          800: '#5C2E16',
          900: '#3D1F0F',
        },
        // Accent: Sage green for sustainability and nature
        sage: {
          50: '#F5F7F4',
          100: '#E8ECE6',
          200: '#D1D9CD',
          300: '#A8B89F',
          400: '#7D9B6F',
          500: '#5C7A4E',
          600: '#4A6340',
          700: '#3B4F33',
          800: '#2D3B27',
          900: '#1F291B',
        },
        // Warm neutrals for backgrounds and surfaces
        cream: {
          50: '#FEFCF8',
          100: '#FDF8EF',
          200: '#FAF0DE',
          300: '#F5E6CC',
          400: '#E8D5B5',
          500: '#D4C4A0',
        },
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
