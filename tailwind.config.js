/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pageComponents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PageBg: "rgb(var(--page-bg))",
        HeaderBg: "rgb(var(--header-bg))",
        TextColor: "rgb(var(--text-color))",
        SecTextColor: "rgb(var(--sec-text-color))",
        PrimaryBtnBg: "rgb(var(--primary-btn-bg))",
        PrimaryBtnText: "rgb(var(--primary-btn-text))",
        SecBtnBg: "rgb(var(--sec-btn-bg))",
        SecBtnText: "rgb(var(--sec-btn-text))",
        flipkartColor: "rgb(var(--flipkart-color))",
        amazonColor: "rgb(var(--amazon-color))",
      },
    },
  },
  plugins: [],
};
