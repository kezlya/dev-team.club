import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  generate: {
    dir: 'docs'
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Dev-team shaping tomorrow with you.' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Dev Team' },
      { name: 'twitter:description', content: 'Dev-team shaping tomorrow with you.' },
      { name: 'twitter:image', content: '/devteammeta.jpg' },
      { itemprop: 'name', content: 'Developer platform.' },
      { itemprop: 'description', content: 'Dev-team shaping tomorrow with you.' },
      { itemprop: 'image', content: '/devteammeta.jpg' },
      { property: 'og:url', content: 'https://dev-team.club' },
      { property: 'og:type', content: 'Developer platform' },
      { property: 'og:title', content: 'Dev Team' },
      { property: 'og:description', content: 'Dev-team shaping tomorrow with you.' },
      { property: 'og:image', content: '/devteammeta.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Oswald&display=swap'
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ["~/assets/style/app.styl"],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    defaultAssets: {
      font: true,
      icons: 'mdi'
    },
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4, 
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  buildModules: ['@nuxtjs/dotenv']

}
