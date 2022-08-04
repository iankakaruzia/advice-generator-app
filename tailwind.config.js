/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        lg: 'box-shadow: 0px 0px 40px #53FFAA',
        xl: '30px 50px 80px rgba(0, 0, 0, 0.100202)'
      },
      borderRadius: {
        xl: '0.625rem'
      },
      colors: {
        green: {
          100: '#CEE3E9',
          500: '#53FFAA'
        },
        gray: {
          500: '#313A48',
          700: '#202733'
        }
      }
    }
  },
  plugins: []
}
