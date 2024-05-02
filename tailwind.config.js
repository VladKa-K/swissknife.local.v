/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'src/js/**/*.js',
    'src/js/*.js',
  ],
  theme: {
    colors: {
      'current': 'currentColor',
      'transparent': 'transparent',
      'white': '#fff',
      'black': '#000',
      'dark-green': '#1F4E3D',
      'light-green': '#49A760',
      'light-grey': '#878680',
      'dark': '#242424',
    },
    fontFamily: {
      default: [
        '"Inter"',
        'sans-serif',
      ],
    },
    lineHeight: {
      10: '1',
      11: '1.1',
      115: '1.15',
      12: '1.2',
      125: '1.25',
      13: '1.3',
      14: '1.4',
      145: '1.45',
      15: '1.5',
      16: '1.6',
      17: '1.7',
      18: '1.8',
      19: '1.9',
      20: '2',
      225: '2.25',
    },
    container: {
      center: true,
      padding: '16px',
      screens: {
        DEFAULT: '100%',
        xl: '1272px',
      },
    },
    extend: {},
  },
  plugins: [],
}
