/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#1F7634', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },

    },
    container: {
      center: true, 
      padding: '1rem', 
      screens: {
        sm: '100%', 
        md: '768px', 
        lg: '1024px', 
        xl: '1240px', 
        '2xl': '1536px', 
      },
    },
  },
  plugins: [],
};
