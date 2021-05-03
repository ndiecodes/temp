export default {
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
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },

      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css',
      },
    ],

    script: [
      {
        src:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js',
        // async: true,
        defer: true,
      },
    ],
  },

  serverMiddleware: {
    '/api': '~/api',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/repository.js'],

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
        // scheme: 'refresh',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 5,
        },
        // refreshToken: {
        //   property: 'token',
        //   data: 'token',
        //   maxAge: 60 * 60 * 24 * 30,
        //   tokenRequired: true,
        // },
        endpoints: {
          login: { url: '/api/v1/auth/login', method: 'post' },
          logout: { url: '/api/v1/auth/logout', method: 'post' },
          user: { url: '/api/v1/user', method: 'get' },
          // refresh: { url: 'auth/refresh', method: 'post' },
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
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
