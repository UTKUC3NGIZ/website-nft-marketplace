/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "542px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1440px",
    },
    extend: {
      backgroundImage: {
        nft: "url('/src/assets/images/unsplash_E8Ufcyxz514.svg')",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        bhSans: ["Black Han Sans", "sans-serif"],
      },
      colors: {
        "custom-purple": "#3D00B7",
      },
    },
  },
  plugins: [],
};
