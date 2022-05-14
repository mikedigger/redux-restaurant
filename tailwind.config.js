module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mob': '480px',
      'sm': '640px',
      'tab': '768px',
      'des': '1024px',
      'des-m': '1200px',
      'des-l': '1920px'
    },
    borderRadius: {
      '10': '10px',
      'circle': '50%'
    },
    fontFamily: {
      'deco': ['ZingRustDemo']
    },
    extend: {
      colors: {
        'accent': '#618967',
        'base-fill': '#504b4a',
        'base-light': '#cfcfcf'
      },
      backgroundImage: {
        'hero': "linear-gradient(90deg, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%), url('/src/assets/images/hero.png')",
        'hero-tab': 'linear-gradient(90deg, rgba(33, 31, 32, 1), rgba(33, 31, 32, 0.9) 50%, rgba(68, 64, 63, 0) 100%), url(/src/assets/images/hero-d.png)',
        'foo-grad': 'linear-gradient(270.7deg, #44403F 0.4%, #211F20 100%)',
        'contact-grad': 'linear-gradient(90deg, rgba(225, 225, 225, 0) 0, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.25) 75%, rgba(255, 255, 255, 0) 100%)',
        'cafe-bg': 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%), url(/src/assets/images/cafe-bg.png)',
        'section-grad': 'linear-gradient(90deg, rgba(225, 225, 225, .25) 0, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, 0) 100%)',
        'cart-grad': 'linear-gradient(90deg, rgba(225, 225, 225, 0.25) 0, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0) 100%)',
      }
    }
  },
  plugins: [],
}
