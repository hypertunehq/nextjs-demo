import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      intent: {
        neutral: { DEFAULT: "#4e576a", "05": "#F6F6F7" },
        warning: { DEFAULT: "#ee954c", 10: "#FDF4ED" },
        danger: { DEFAULT: "#ed544b", "05": "#FEF6F6" },
        success: { DEFAULT: "#3b9e62", "05": "#F5FAF7" },
        primary: { DEFAULT: "#3B82F6", "05": "#F6F7FD" },
      },
      // Text
      tx: {
        default: "#22252b",
        disabled: "#c5c9d3",
        muted: "#7a8396",
      },
      // Borders
      bd: {
        default: "#f4f5f8",
        light: "#f9f9fb",
        darker: "#eaecf1",
      },
      // Backgrounds
      bg: {
        default: "#ffffff",
        light: "#fcfcfd",
        medium: "#f9f9fb",
        hover: "#eaecf1",
        pressed: "#eaecf180",
        primary: "#3B82F61A",
        blurred: "rgba(0, 0, 0, 0.5)",
      },
    },
    fontSize: {
      "2xs": "0.625rem", // 10px
      xs: "0.688rem", // 11px
      sm: "0.75rem", // 12px
      base: "0.8125rem", // 13px
      md: "0.875rem", // 14px
      lg: "0.9375rem", // 15px
      h5: "1rem", // 16px
      h4: "1.125rem", // 18px
      h3: "1.25rem", // 20px
      h2: "1.5rem", // 24px
      h1: "1.625rem", // 26px
    },
    fontWeight: {
      light: "450",
      medium: "500",
      semibold: "600",
    },
    extend: {
      borderColor: {
        DEFAULT: "#eaecf1",
      },
      textColor: {
        DEFAULT: "#22252b",
      },
      boxShadow: {
        button: "0px 1px 3px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
