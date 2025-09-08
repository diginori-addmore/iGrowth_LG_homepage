/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/app/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
