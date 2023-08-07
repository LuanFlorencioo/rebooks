/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          '50': '#f2f2ff',
          '100': '#e9e7ff',
          '200': '#d4d1ff',
          '300': '#b4adff',
          '400': '#907eff',
          '500': '#6c4bff',
          '600': '#5a26ff',
          '700': '#5520ee',
          '800': '#3f10c7',
          '900': '#350fa3',
          '950': '#1d066f',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
