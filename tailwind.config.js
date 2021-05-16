const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: [
      './index.html',
      './src/**/*.jsx',
      './src/**/*.js',
    ],
  },
  theme: {
    extend: {
      colors: {
        gray: {light: 'rgb(236, 239, 241)'},
        blue: {primary: '#0052ff', dark: '#113355'},
        green: {primary: '#05b169'},
        banner: {primary: '#113355', secondary: '#e9f6ff'},
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.light', 'currentColor')
      }),
      height: {
        banner: '460px',
        line: '1px'
      },
      flex: {
        '1/2': '1 1 50%',
        '2': '2 1 0%',
        '6': '6 1 0%',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        sm: '4px',
      },
    },
  },
  variants: {
    extend: {
      padding: ['first'],
      display: ['first'],
      borderWidth: ['first'],
      textColor: ['last'],
    }
  },
  plugins: []
};
