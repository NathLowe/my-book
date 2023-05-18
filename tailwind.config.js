/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      darkMode: 'media',
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary:{
          light: "#a78bfa",
          main: "#7c3aed",
          dark: "#5b21b6",
        },
        secondary:{
          light: "#38bdf8",
          main: "#0284c7",
          dark: "#075985",
        },
        disabled: "#9ca3af"
      }
    },
  },
  plugins: [],
}
