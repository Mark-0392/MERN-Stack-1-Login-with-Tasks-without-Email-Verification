/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        sky: "url('/src/assets/Register Page Images/Mobile background Image/milkyway.jpg')",
        building:
          "url('/src/assets/Register Page Images/Mobile background Image/image3.webp')",
        newsLetter: "url('/src/assets/Background Images/img1.jpg')",
        news1: "url('/src/assets/Background Images/img2.png')",
        landing: "url('/src/assets/landing.jpg')",
        navbar: "url('/src/assets/navbar.jpg')",
        milkbar: "url('/src/assets/Mobile background Image/image5.jpg')",
        night: "url('/src/assets/Mobile background Image/image6.jpg')",
        loginPage: "url('/src/assets/diamond-sunset.png')",
        registerPage: "url('/src/assets/flat-mountains.png')",
      },
      fontFamily: {
        Playfair_SemiBold: ['Playfair SemiBold SemiExpanded'],
        DM_Serif_FontBold: ['DM Serif Font'],
        Tangerine_Regular: ['Tangerine Regular'],
        Roboto_Bold_Italic: ['Roboto Bold Italic'],
        Ysabeau_Bold: ['Ysabeau Bold'],
        Ysabeau_Regular: ['Ysabeau Regular'],
        BlackOps_Regular: ['BlackOps Regular'],
        LeckerLi_One_Regular: ['LeckerLi One Regular'],
      },
    },
  },
  plugins: [],
}
