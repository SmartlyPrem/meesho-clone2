/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        'meesho-cl': 'rgb(159, 32, 137)',
      },
      backgroundColor: {
        // Add custom background colors here
        'meesho-bg': 'rgb(159, 32, 137)',
      },
    },
  },
  plugins: [],
}