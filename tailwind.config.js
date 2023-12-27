/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A603",
      },
      boxShadow: {
        balanceShadow: "0px 4px 4px 0px rgba(234, 234, 234, 0.25)",
        balanceItem: "0px 4px 4px 0px rgba(233, 233, 233, 0.25)",
      },
    },
  },
  plugins: [],
};
