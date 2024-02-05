import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_20: "#CCF0FF",
        primary_40: "#99E0FF",
        primary_60: "#33C1FF",
        primary_80: "#008ECC",
        primary_100: "#607559",

        secondary_20: "#8690A2",
        secondary_40: "#646E82",
        secondary_60: "#4B5362",
        secondary_80: "#383D48",
        secondary_100: "#111B21",

        gray_10: "#F4F7FB",
        gray_20: "#EAEEF5",
        gray_30: "#D7DEEA",
        gray_40: "#B7BECD",
        gray_50: "#9DA5B4",
        gray_60: "#8690A2",
        gray_70: "#646E82",
        gray_80: "#4B5362",
        gray_90: "#383D48",
        gray_100: "#21242C",

        red_10: "#FFF5F5",
        red_20: "#FECDCD",
        red_30: "#FD9B9B",
        red_40: "#FF6666",
        red_50: "#FF3D3D",
        red_60: "#ED1D1D",
        red_70: "#C61010",
        red_80: "#A50D0D",
        red_90: "#760909",
        red_100: "#5F0707",

        green_10: "#F2FCF2",
        green_20: "#BDF5C1",
        green_30: "#8FEF99",
        green_40: "#65E673",
        green_50: "#2BCD3E",
        green_60: "#25AF36",
        green_70: "#1F932D",
        green_80: "#197624",
        green_90: "#145D1D",
        green_100: "#104C18",

        yellow_10: "#FFF8E6",
        yellow_20: "#FEEFC3",
        yellow_30: "#FCD974",
        yellow_40: "#FAC734",
        yellow_50: "#ECB52B",
        yellow_60: "#D6A12E",
        yellow_70: "#B7831F",
        yellow_80: "#8E6115",
        yellow_90: "#70490F",
        yellow_100: "#51350B",
      },
    },
  },
  plugins: [],
};
export default config;
