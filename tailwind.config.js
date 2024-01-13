/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Nunito",
      },
      backgroundColor: {
        primary: "#F0E2D9",
        "primary-button": "rgb(255, 16, 83)",
        "secondary-button": "rgb(5, 25, 37)",
      },
      textColor: {
        primary: "#221538",
        secondary: "#7e7e7e",
        red: "rgb(255, 16, 83)",
        black: "rgb(5, 25, 37)",
        blue: "#2441e7",
      },
      borderColor: {
        primary: "rgb(255, 16, 83)",
        secondary: "rgb(5, 25, 37)",
      },
    },
  },
  plugins: [require("daisyui")],
};
