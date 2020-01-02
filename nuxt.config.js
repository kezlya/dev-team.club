import colors from "vuetify/es5/util/colors"

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  generate: {
    dir: "docs"
  },
  head: {
    //titleTemplate: '%s - ' + process.env.npm_package_name,
    titleTemplate: "Dev-team",
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Dev-team creates tomorrow with you." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dev Team" },
      { name: "twitter:description", content: "Dev-team creates tomorrow with you." },
      { name: "twitter:image", content: "/devteammeta.jpg" },
      { itemprop: "name", content: "Dev team site" },
      { itemprop: "description", content: "Dev-team creates tomorrow with you." },
      { itemprop: "image", content: "/devteammeta.jpg" },
      { property: "og:url", content: "https://dev-team.club" },
      { property: "og:type", content: "Dev team site" },
      { property: "og:title", content: "Dev Team" },
      { property: "og:description", content: "Dev-team creates tomorrow with you." },
      { property: "og:image", content: "/devteammeta.jpg" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/style/app.styl"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~plugins/ga.js', mode: 'client' }, 
    // { src: '~plugins/i18n.js'},    
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/vuetify",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            file: "en.js"
          },
          {
            code: "ru",
            file: "ru.js"
          }
        ],
        defaultLocale: "en",
        lazy: true,
        langDir: "lang/"
      }
    ]
  ],

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: {
      font: true,
      icons: "mdi"
    },
    icons: {
      iconfont: "mdi"
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
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  buildModules: [
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: 'UA-153553466-1',
      commands: {
        navigation(label) {
          console.log(`Analytic sent: Navigation - ${label}`);
          this.$ga.event('Navigation', 'click', label);
        },
        footerLinks(label) {
          console.log(`Analytic sent: Footer link - ${label}`);
          this.$ga.event('Footer link', 'click', label);
        },
        switchLang(label) {
          console.log(`Analytic sent: Switch Language to ${label}`);
          this.$ga.event('Switch Language', 'click', label);
        },
        hiring(label) {
          console.log(`Analytic sent: Hiring, click to ${label} profession`);
          this.$ga.event('Click to profession', 'click', label);
        },
        projects(label) {
          console.log(`Analytic sent: Latest work, click to ${label}`);
          this.$ga.event('Click to our work', 'click', label);
        },
     }
    }]
]
  buildModules: ["@nuxtjs/dotenv"]
}
