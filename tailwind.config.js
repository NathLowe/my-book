/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
          light: "#38bdf8",
          main: "#0284c7",
          dark: "#075985",
        },
        secondary:{
          light: "#fbbf24",
          main: "#d97706",
          dark: "#92400e",
        },
        disabled: "#9ca3af"
      }
    },
  },
  plugins: [],
}
