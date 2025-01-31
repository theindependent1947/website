/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        // Custom breakpoint for example: making 'md' at 800px
        'custom-max': '900px',
      },
    },
  },
  plugins: [],
}

