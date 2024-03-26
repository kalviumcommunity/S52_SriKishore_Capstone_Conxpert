/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        introColor:'#E65F46',
        primaryColor:'#0067FF',
        pinkColor:'#FDF3F1',
        yellowColor:'#FEB60D',
        webColor1:"#FFFBF2",
        buttonColor:'#00553C',
        purpleColor:'#9771FF',
        irisBlueColor:'#0185C5',
        headingColor:'#181A1E',
        textColor:'#4E545F'
      },
      fontFamily:{
        display:['Palanquin Dark']
      }
    },
  },
  plugins: [],
}