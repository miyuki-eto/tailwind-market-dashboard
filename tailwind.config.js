module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-bg':'#131722',
        'custom-bga':'#2a2e39',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
