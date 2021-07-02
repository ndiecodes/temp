require('dotenv').config()
export default {
  env: {
    VIMEO_CLIENT_ID: process.env.VIMEO_CLIENT_ID,
    VIMEO_CLIENT_SECRET: process.env.VIMEO_CLIENT_SECRET,
    VIMEO_ACCESS_TOKEN: process.env.VIMEO_ACCESS_TOKEN,
  },

  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blockvilla',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },

      { rel: 'stylesheet', href: '/adminlte.css' },

      {
        rel: 'stylesheet',
        href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },

      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css',
      },
    ],

    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js',
        // async: true,
        defer: true,
      },

      {
        src: 'https://player.vimeo.com/api/player.js',
      },

      {
        src: '/plugins/jquery/jquery.min.js',
      },

      {
        src: '/plugins/bootstrap/js/bootstrap.bundle.min.js',
      },

      {
        src: '/adminlte.js',
      },
    ],
  },

  serverMiddleware: {
    '/api': '~/api',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/repository.js' },
    // { src: '~/plugins/vuex-persist.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', { path: '~/components/form', prefix: '' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  auth: {
    redirect: {
      login: '/login',
      // logout: "/logout",
      home: '/dashboard',
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 5,
        },
        // logout: false,
        refreshToken: {
          property: 'token',
          data: 'token',
          maxAge: 60 * 60 * 24 * 30,
          tokenRequired: true,
        },
        endpoints: {
          login: { url: '/api/v1/auth/login', method: 'post' },
          logout: { url: '/api/v1/auth/logout', method: 'post' },
          user: { url: '/api/v1/secure/user', method: 'get' },
          refresh: { url: '/api/v1/auth/refresh', method: 'post' },
        },

        user: {
          property: 'user',
          autoFetch: true,
        },
        autoLogout: false,
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    // port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    // timing: false,
  },
}
