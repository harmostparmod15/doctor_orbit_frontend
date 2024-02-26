/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mullish: ["Mulish", "sans-serif"],
      },

      keyframes: {
        tiltShaking: {
          "0%": { transform: "translate(0)" },
          "25%": { transform: "translate(5px)" },
          "50%": { transform: "translate(-5px)" },
          "75%": { transform: "translate(5px)" },
          "100%": { transform: "translate(0)" },
        },
      },
      animation: {
        tiltShaking: "tiltShaking 300ms ease-in-out 2",
      },
    },
  },
  plugins: [],
};
