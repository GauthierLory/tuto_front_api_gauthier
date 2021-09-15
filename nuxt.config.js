export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - tuto_front',
    title: 'tuto_front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //'./plugins/mixins/user',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  eslint: {
    fix: true
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: '',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'http://127.0.0.1:8000/api/auth/login', method: 'post'},
          logout: { url: 'http://127.0.0.1:8000/api/auth/logout', method: 'post' },
          user: { url: 'http://127.0.0.1:8000/api/me', method: 'get' }
        }
      }
    }
  },
  redirect : {
      login: '/auth/login',
      logout: '/auth/logout'
    },

  axios: {
  },

  router: {
    //middleware: ['auth']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    optionsPath: "./vuetify.options.js"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}