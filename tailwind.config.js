export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FDFBF7',
          warm: '#F4EFEA',
          sand: '#D4A373',
          brown: '#5C4033',
          chocolate: '#2C221E',
          taupe: '#8C6D53',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(92, 64, 51, 0.12)',
      },
    },
  },
  plugins: [],
};
