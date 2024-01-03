/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: "Nunito",
      },
      backgroundColor: {
        "primary-bg": "#F0E2D9",
        "primary-button": "rgb(255, 16, 83)",
        "secondary-button": "rgb(5, 25, 37)",
      },
      textColor: {
        "primary-text": "#221538",
        "secondary-text": "#7e7e7e",
        "primary-button-text": "rgb(255, 16, 83)",
        "secondary-button-text": "rgb(5, 25, 37)",
      },
      borderColor: {
        "primary-border": "rgb(255, 16, 83)",
        "secondary-border": "rgb(5, 25, 37)",
      },
    },
  },
  plugins: [require("daisyui")],
};
