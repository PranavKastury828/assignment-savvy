/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-gradient": "linear-gradient(35deg, #494949, #313131)",
      },
    },
  },
  plugins: [],
};
