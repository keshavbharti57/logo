/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here if needed
      },
      spacing: {
        // Add custom spacing here if needed
      },
      fontSize: {
        // Add custom font sizes here if needed
      },
    },
  },
  plugins: [],
};
