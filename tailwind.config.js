/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // si tu código está dentro de /src
    "./app/**/*.{js,ts,jsx,tsx}", // si usas la carpeta app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
