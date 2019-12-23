const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#3498DB',
      secondary: '#F1C40F',
      neutral: '#34495E',
      success: '#2ECC71',
      danger: '#E74C3C'
    },
    minWidth: {
      25: '6.25rem'
    },
    inset: {
      '0': 0,
      '1/2': '50%'
    }
  },
  variants: {},
  plugins: []
}
