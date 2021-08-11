module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-bg':'#26262c',
        'custom-bga':'#3f3f49',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
