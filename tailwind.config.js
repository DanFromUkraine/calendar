/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/**/*.jsx"
  ],
  theme: {
    extend: {
      screens: {
        md_l: "850px",
        max: "1440px"
      },
      colors: {
        gray: "#E0E0E0",
        light_blue: "#E3F3FB",
        light_gray: "#F5F5F5",
        dark_gray: "#616161",
        darker_gray: "#2F3538",
        border: "#DADCE0",
        mid_gray: "#333333",
        blue: "#0C41FF"
      },
      fontSize: {
        sm: "10.24px"
      }
    },
  },
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
  ],
  plugins: [],
}

