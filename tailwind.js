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
  plugins: [
    ({ addComponents }) => {
      const input = {
        input: {
          '&:focus': {
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important'
          }
        }
      }

      addComponents(input)
    }
  ]
}
