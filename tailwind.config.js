/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: '300px',
        md: '768px',
        lg: '1024px',
      },
     
      colors:{
        headers:{
          100: '#D1C6C6'
        },
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(51, 51, 51)'
      },
      }
    },
  },
  plugins: [],
}

