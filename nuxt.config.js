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


  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   '/api': {
  //     target: '127.0.0.1:8000/api/',
  //   }
  // },
  
  auth: {
    strategies: {
      'local': {
        // provider: 'laravel/jwt',
        // url: 'http://127.0.0.1:8000/api',
        // token: {
        //   property: 'access_token',
        //   maxAge: 1800,
        //   global: true,
        //   type: 'Bearer'
        // },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'post' }
        }
      }
    },
    redirect : {
        login: '/login',
        logout:'/login',
    },
  },

  router: {
    middleware: ['auth']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    optionsPath: "./vuetify.options.js"
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}