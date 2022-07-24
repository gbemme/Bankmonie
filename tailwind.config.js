module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  prefix:'tw-',
  theme: {
    boxShadow: {
      sm: '0px 12px 50px rgba(150, 150, 150, 0.05)'
    },
    extend: {
      width:{
        '2.3':'2.313rem',
        '15.5':'15.5rem',
        '15.9':'15.938rem',
        '18.5':'18.563rem',
        '20.6':'20.625rem',
        '21':'21.625rem',
        '24.5':'24.5rem',
        '22':'22rem',
        '23.5':'23.5rem',
        '25':'25rem',
        '29':'29%',
        '30':'30rem',
        '17':'17rem'
      }
    },
  },
  plugins: [],
}
