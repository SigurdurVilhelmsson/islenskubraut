import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dyr: '#2D6A4F',
        matur: '#E76F51',
        farartaeki: '#264653',
        manneskja: '#7B2CBF',
        stadir: '#C1121F',
        klaednadur: '#F4A261',
      },
      fontFamily: {
        sans: ['Source Sans 3', 'Noto Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
