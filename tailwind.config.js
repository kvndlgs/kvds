/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './lib/**/*.js'
  ],
  theme: {
    extend: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      'primary': {
        DEFAULT: '#CBA6FE',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FAF7FF',
        '400': '#E3CEFE',
        '500': '#CBA6FE',
        '600': '#AB6FFD',
        '700': '#8A37FD',
        '800': '#6A03F9',
        '900': '#5302C1'
      },
      'secondary': {
        DEFAULT: '#3D1556',
        '50': '#A14FD4',
        '100': '#983ED0',
        '200': '#832DB8',
        '300': '#6C2598',
        '400': '#541D77',
        '500': '#3D1556',
        '600': '#1D0A29',
        '700': '#000000',
        '800': '#000000',
        '900': '#000000'
      },
      'tierce': {
        DEFAULT: '#FF7392',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFEDF1',
        '300': '#FFC5D2',
        '400': '#FF9CB2',
        '500': '#FF7392',
        '600': '#FF3B66',
        '700': '#FF033B',
        '800': '#CA002D',
        '900': '#920020'
      },
      'green-lite': {
        DEFAULT: '#F1F7E1',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FFFFFF',
        '400': '#FFFFFF',
        '500': '#F1F7E1',
        '600': '#DCEBB5',
        '700': '#C8DF88',
        '800': '#B3D45C',
        '900': '#9CC334'
      },
      text: '',
      link: ''
  },
  breakpoints: [512, 680, 940, 1048],
  space: [0, 3, 5, 8, 24, 144, 256, 512],
  spaces: [0, 1, 3, 5, 8, 16],
  fontSize: {
    'xs': '0.75rem',
    'sm': '1rem',
    'tiny': '0.75rem',
    'base': '1rem',
    'lg': '1.333rem',
    'xl': '1.777rem',
    '2xl': '2.69rem',
    '3xl': '3.157rem',
    '4xl': '4.209rem',
    '5xl': '5.61rem',
    '6xl': '7.478rem',
    '7xl': '9.969rem'
  },
  fontWeights: [300, 500, 600, 700, 800, 900],
  lineHeights: {
      body: 1.75,
      heading: 1.3,
  },
  fontFamily: {
      sans: [
        'IntegralCF-Regular, sans-serif', 
        'IntegralCF-Medium, sans-serif', 
        'IntegralCF-SemiBold, sans-serif', 
        'IntegralCF-Bold, sans-serif', 
        'IntegralCF-Heavy, sans-serif', 
        'Outfit-Regular, sans-serif',
        'Outfit-Medium, sans-serif',
        'Outfit-Bold, sans-serif',
      ],
      serif: [],
      display: [],
      body: []
   },
  },
  },
  plugins: [],
}
