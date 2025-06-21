/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure your files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide') // ✅ plugin added
  ],
};
