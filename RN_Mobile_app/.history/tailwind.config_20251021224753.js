/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
            primary: '#030014',
            accent: '#AB8BFF',
            secondary: '#151312',
            light: {
                100: '#D6C6FF',
                100: '#A8B5DB',
                100: '#D6C6FF'
            }
        }
    },
  },
  plugins: [],
}

