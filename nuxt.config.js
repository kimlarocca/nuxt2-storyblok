export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt 3 / Storyblok Boilerplate Starter Project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt 3 / Storyblok Boilerplate Starter Project'
      }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/bfb61e7d57.js',
        crossorigin: true,
        async: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      lang: 'scss',
      src: '~/assets/main'
    }
  ],

  styleResources: { scss: './assets/*.scss' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/animations'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://google-fonts.nuxtjs.org
    '@nuxtjs/google-fonts',
    // https://github.com/storyblok/storyblok-nuxt
    [
      "@storyblok/nuxt",
      {
        accessToken: "4j2KkxhOXfEyKfiliNSVMgtt",
        cacheProvider: "memory",
      },
    ],
    // https://github.com/daliborgogic/nuxt-interpolation
    'nuxt-interpolation'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // https://google-fonts.nuxtjs.org/options
  googleFonts: {
    display: 'swap',
    preconnect: true,
    families: {
      Hind: {
        wght: [300, 400]
      },
      Prompt: {
        wght: [200, 400]
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    // this is needed to transpile es6 modules imported from radial
    transpile: [
      'vue-evolve'
    ]
  }
}
