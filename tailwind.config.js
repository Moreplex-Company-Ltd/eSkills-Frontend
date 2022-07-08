/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',  //640
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px',
    },
    // colors: {
    //   BlueBlack: '#000C7C',
    //   BlueBlackDark : '#020B5E',
    //   Gold: '#FF9A13',
    //   black: '#000000',
    // },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
      gold: '#FF9A13',
      black: '#000000',
      primaryBlue: '#020B5E',
      secondaryBlue: '#000C7C',
      grayBackground: '#F5F5F5'
    },
    
    },
  },
  plugins: [],
}