/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '440px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'main': {
        light: '#78b8d8',
        primary: '#88d0f5',
        dark: '#69a1bd',
      },
      'gray': {
        DEFAULT: '#5e6478',
        primary: '#5e6478',
        light: '#9096ad',
      },
      'white': {
        DEFAULT: '#FFFFFF ',
      },
    },
    fontFamily: {
      outfit: ['Outfit-Medium', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'main-color': "var(--background-linear, #77B7D7)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'transform: translateY(0)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
    },
  },
  plugins: [],
}