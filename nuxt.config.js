import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - bankmonie-app',
    title: 'BankMe',
    description: ' BankMe POS (Point of Sale ) Terminal - Fast Payments in Nigeria',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ' Accept and process payments with ease. BankMe’s POS terminals provide fast and secure payment processing, with low fees and fast onboarding within 5 minutes.' },
      { hid: 'title', name: 'title', content: 'BankMe' },
      { hid: 'image', name: 'image', content: '#replacethiswithimageurl' },
      { hid: 'url', name: 'url', content: 'https://bankme.africa' },
      { hid: 'telephone', name: 'telephone', content: '+234913 400 1002' },
      { hid: 'address', name: 'address', content: '279 Herbert Macaulay Way,Yaba' },
      { hid: 'openingHoursSpecification', name: 'openingHoursSpecification', content: 'Monday - Friday,  "opens": "09:00",\n' +
          '    "closes": "21:00"' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    "@/assets/css/global.css",
    // '~/assets/transition.css'
  ],
//   pageTransition: {
//     name: "fade",
//     mode: "out-in"
// },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate",
    "~/plugins/scrollToTop.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
