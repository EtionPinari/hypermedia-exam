export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: 'server',
  env: {
    BASE_URL: 'https://hatgemini.herokuapp.com', // production
    configurationId: '50fd49e9-a616-49d4-8cc3-a97df3864e7d', // fill the field
  },
  serverMiddleware: [
    {
      path: '/api',
      handler: '@/server/rest/api.js',
    },
  ],
  head: {
    title: 'hypermedia-website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/colors.scss', '~assets/t-css/tailwinds.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/mmcc.js', '@/plugins/directives.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [`@nuxtjs/axios`, '@nuxtjs/style-resources'],

  styleResources: {
    scss: ['@/assets/scss/*.scss'],
  },

  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false,
        },
      },
    },
  },
}
