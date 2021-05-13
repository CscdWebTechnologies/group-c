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
        gray: {
          light: 'rgb(236, 239, 241)',
        },
        blue: {
          primary: '#0052ff',
        },
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.light', 'currentColor')
      }),
      flex: {
        '2': '2 1 0%',
        '6': '6 1 0%'
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
    }
  },
  plugins: []
};
