import { NOTES_COLOR_NAMES } from './src/constants'
const {green, red, yellow, green_v2, blue_v2, purple} = NOTES_COLOR_NAMES;

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
        blue: "#0C41FF",
        gray_v6: "#50616B",

        [green]: {
          dot: "#2C5A41",
          text: "#8FDCB2"
        },
        [red]: {
          dot: "#BE1A1A",
          text: "#BE1A1A"
        },
        [yellow]: {
          dot: "#E7C160",
          text: "#684D08"
        },
        [green_v2]: {
          dot: "#55D28F",
          text: "#3BA86E"
        },
        [blue_v2]: {
          dot: "#3849E0",
          text: "#2937B5"
        },
        [purple]: {
          dot: "#A384FF",
          text: "#341D76"
        }
      },
      fontSize: {
        sm: "10.24px"
      }
    },
  },
  safelist: [
    {
      pattern: /col-span-(1|2|3|4|5|6|7)/
    },
    {
      pattern: /bg-(green-dot|red-dot|yellow-dot|green_v2-dot|blue_v2-dot|purple-dot)/
    },
    {
      pattern: /text-(green-text|red-text|yellow-text|green_v2-text|blue_v2-text|purple-text)/
    }
  ],
  plugins: [],
}

