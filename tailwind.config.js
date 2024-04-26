/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkMode: {
          background: "#121212",
          text: "#FFFFFF",
          primary: "#4A90E2",
        },
      },
    },
  },
  plugins: [],
};
