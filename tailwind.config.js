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
        '29':'29%'
      }
    },
  },
  plugins: [],
}
