/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        fontFamily: {
            Jakarta: ["Jakarta", "sans-serif"],
            JakartaBold: ["Jakarta-Bold", "sans-serif"],
            JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
            JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
            JakartaLight: ["Jakarta-Light", "sans-serif"],
            JakartaMedium: ["Jakarta-Medium", "sans-serif"],
            JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
        },
        colors: {
            primary: {
                100: "#ecfdf5", // emerald-50
                200: "#d1fae5", // emerald-100 (Brand Light)
                300: "#6ee7b7", // emerald-300
                400: "#34d399", // emerald-400
                500: "#10b981", // emerald-500 (Brand Primary)
                600: "#059669", // emerald-600 (Brand Hover)
                700: "#047857", // emerald-700 (Brand Dark)
                800: "#065f46", // emerald-800
                900: "#064e3b", // emerald-900
            },
            secondary: {
                100: "#cffafe", // cyan-100 (Brand Light)
                200: "#a5f3fc", // cyan-200
                300: "#67e8f9", // cyan-300
                400: "#22d3ee", // cyan-400
                500: "#0891b2", // cyan-600 (Brand Secondary - shifted to 500 slot for usage)
                600: "#0e7490", // cyan-700 (Brand Hover)
                700: "#155e75", // cyan-800 (Brand Dark)
                800: "#164e63", // cyan-900
                900: "#083344", // cyan-950
            },
            accent: {
                100: "#fef3c7", // amber-100
                500: "#f59e0b", // amber-500 (Brand Accent)
                600: "#d97706", // amber-600
                700: "#b45309", // amber-700
            },
            danger: "#ef4444",
            start: "#10b981", // Brand Green
            end: "#0891b2",   // Brand Blue
            danger: {
                100: "#FFF5F5",
                200: "#FED7D7",
                300: "#FEB2B2",
                400: "#FC8181",
                500: "#F56565",
                600: "#E53E3E",
                700: "#C53030",
                800: "#9B2C2C",
                900: "#742A2A",
            },
            warning: {
                100: "#FFFBEB",
                200: "#FEF3C7",
                300: "#FDE68A",
                400: "#FACC15",
                500: "#EAB308",
                600: "#CA8A04",
                700: "#A16207",
                800: "#854D0E",
                900: "#713F12",
            },
            general: {
                100: "#CED1DD",
                200: "#858585",
                300: "#EEEEEE",
                400: "#0CC25F",
                500: "#F6F8FA",
                600: "#E6F3FF",
                700: "#EBEBEB",
                800: "#ADADAD",
            },
        },
    },
},
plugins: [],
};