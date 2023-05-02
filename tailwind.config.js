/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p2a-color-text-c3": "#4b5563",
        gray: {
          "100": "#121220",
          "200": "#020c1a",
        },
        black: "#000",
        "p2a-color-text-c1": "#111827",
        "p2a-color-text-or-01": "#fff",
        "main-color1": "#0574ba",
        "p2a-color-text-or-02": "#eaeaea",
        lavender: "#eae9f8",
        lavenderblush: "#fff2f2",
        oldlace: "#f9f7e6",
        honeydew: "#e3fdf2",
        "stock-2": "#e9e9e9",
        "p2a-color-text-c2": "#111926",
        gainsboro: "#e5e7eb",
        ghostwhite: "#f4f7fd",
        "p2a-color-text-or-03-body-text": "#737373",
        "p2a-color-secondary-c1": "#f8d60a",
        slategray: "#6b7280",
      },
      fontFamily: {
        manrope: "Manrope",
        "p2a-text-sub-title-1-18px": "Inter",
      },
      borderRadius: {
        "8xs-2": "4.2px",
      },
    },
    fontSize: {
      "xl-7": "20.7px",
      base: "16px",
      xl: "20px",
      lg: "18px",
      "smi-2": "12.2px",
      "lgi-1": "19.1px",
      "xs-2": "11.2px",
      "11xl": "30px",
      "2xl": "21px",
      "15xl": "34px",
      "25xl": "44px",
      sm: "14px",
      "5xl": "24px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
