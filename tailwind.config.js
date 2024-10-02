const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        farmersmartYellow: '#dabe78',
        farmersmartOrange: '#eeba2d',
        farmersmartLightGreen: '#c1e849',
        farmersmartGreen: '#007d29',
        farmersmartDarkGreen: '#0d4e25',
        farmersmartPaleGreen: '#F6FFDA',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
