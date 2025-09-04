module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: {
        brand: {
          50: '#f0f7ff', 100: '#dff0ff', 200: '#bfe3ff', 300: '#8fd0ff', 400: '#57b8ff',
          500: '#1d90ff', 600: '#1769d9', 700: '#114ea8', 800: '#0b397f', 900: '#072a61'
        }
      }
    }
  },
  plugins: [],
};
