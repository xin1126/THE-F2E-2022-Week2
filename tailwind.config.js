/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 自訂顏色
      colors: {
        primary: '#B7EC5D',
        secondary: '#648D1E',
        dark: '#4D4D4D',
        gray: '#666666',
        // info: '#A46039',
        // background: '#ffc37d',
        // success: '#065f46',
        // danger: '#991b1b',
      },
      container: {
        center: true,
        screens: {
          '2xl': '1650px',
        },
        padding: {
          DEFAULT: '12px',
        },
      },
    },
  },
  plugins: [],
}
