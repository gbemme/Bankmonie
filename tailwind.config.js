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
    textColor: theme => theme('colors'),
    textColor: {
      'primary-bankme': '#009CDE',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    },
    boxShadow: {
      sm: '0px 12px 50px rgba(150, 150, 150, 0.05)'
    },
    extend: {
      width:{
        '2.3':'2.313rem',
        '5.5':'1.375rem',
        '15.5':'15.5rem',
        '15.9':'15.938rem',
        '18.5':'18.563rem',
        '20.6':'20.625rem',
        '21':'21.625rem',
        '24.5':'24.5rem',
        '22':'22rem',
        '22.7':'5.688rem',
        '23.3':'23.313rem',
        '23.5':'23.5rem',
        '25':'25rem',
        '29':'29%',
        '30':'30rem',
        '17':'17rem',
        '34': '8.5rem',
        '37.75':'9.438rem',
        '44.5':'11.125rem',
        '44.75':'11.188rem',
        '50':'12.5rem',
        '53.25':'13.313rem',
        '64.3':'16.313rem',
        '65.25':'16.314rem',
        '67':'16.75rem',
        '94':'23.063rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '118':'29.5rem',
        '120':'30rem',
        '150':'37.5rem',
        '98': '18rem',
        '44.25':'11.063rem',
        '237':'59.25rem'
      },
      margin: {
       '100': '25rem',
      },
      fontSize:{
        '4': '2.5rem',
        '5': '2.8rem'
      },
      backgroundImage: {
        'talk-to-us': "url('/static/talk-to-us.png')",
        'talk-to-us-mobile': "url('/static/talk-to-us-mobile.png')",
      },
    },
  },
  plugins: [],
}
