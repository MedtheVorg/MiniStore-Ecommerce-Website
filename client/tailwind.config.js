/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        banner1:
          "url('./src/assets/bannerImages/Tech-Essentials-Await-You.jpg')",
        banner2:
          "url('./src/assets/bannerImages/Your-One-Stop-Tech-Shop.jpeg')",
      },
      fontFamily: {
        jost: 'jost',
        lato: 'lato',
      },
      colors: {
        semiBlue: '#72AEC8',
        dark: '#272727',
        lightGray: '#3A3A3A',
        lightWhite: '#EDF1F3',
      },
    },
  },
  plugins: [],
};
