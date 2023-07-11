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
      md: '428px',
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
        'newsletter-bg': "url('/wallpaper.svg')",
        'newsletter-mobile': "url('/wallpaperMobile.svg')",
      },
    },
  },
  plugins: [],
}