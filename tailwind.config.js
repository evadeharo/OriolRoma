module.exports = {
  purge: {
    enabled: true,
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      bs: '1440px',
      sbs: '1920px',
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
      },
      fontSize: {
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        20: '1.25rem',
        24: '1.5rem',
        30: '1.875rem',
        40: '2.5rem',
        46: '2.875rem',
        50: '3.125rem',
        60: '3.75rem',
        70: '4.375rem',
        90: '5.625rem',
        100: '6.25rem',
        110: '6.875rem',
        130: '8.125rem',
        150: '9.375rem',
      },
      content: {
        '-': '-',
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      margin: ['hover', 'active'],
      textColor: ['hover'],
    },
  },
  plugins: [],
}
