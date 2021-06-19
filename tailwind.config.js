module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00A878',
        background: '#F5F1E3'
      },
      fontFamily: {
        'header': ['Fraunces', 'serif'],
        'body': ['Roboto Mono', 'monospace']
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
