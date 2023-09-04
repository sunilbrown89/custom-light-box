/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: "#000461",
        secondary: "#EA9AA7",
        themeBlue: "#DFF4FF",
        themeGray: "#F4F4F5",
        facebook: "#3b5998",
        twitter: "#00acee",
        linkedin: "#0072b1",
        instagram: "#BD33B5",
        whatsapp: "#25d366",
        youtube: "#cd201f",
        pinterest: "#E60023",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
