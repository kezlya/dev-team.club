import colors from "vuetify/es5/util/colors"

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  generate: {
    dir: "docs"
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "*",
        component: resolve(__dirname, "pages/index.vue")
      })
    }
  },
  head: {
    htmlAttrs: {
      lang: "en"
    },
    titleTemplate: "Dev-team",
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Dev-team creates tomorrow with you." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dev Team" },
      {
        name: "twitter:description",
        content: "Dev-team creates tomorrow with you."
      },
      { name: "twitter:image", content: "/devteammeta.jpg" },
      { itemprop: "name", content: "Dev-team site" },
      {
        itemprop: "description",
        content: "Dev-team creates tomorrow with you."
      },
      { itemprop: "image", content: "/devteammeta.jpg" },
      { property: "og:url", content: "https://dev-team.club" },
      { property: "og:type", content: "Dev-team site" },
      { property: "og:title", content: "Dev-Team" },
      {
        property: "og:description",
        content: "Dev-team creates tomorrow with you."
      },
      { property: "og:image", content: "/devteammeta.jpg" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700&display=swap"
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
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/vuetify"],

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: {
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
    },
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }
  },
  buildModules: [
    "@nuxtjs/dotenv",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-153553466-1",
        commands: {
          navigation(label) {
            this.$ga.event("Navigation", "click", label)
          },
          footerLinks(label) {
            this.$ga.event("Footer link", "click", label)
          },
          switchLang(label) {
            this.$ga.event("Switch Language", "click", label)
          },
          hiring(label) {
            this.$ga.event("Click to profession", "click", label)
          },
          projects(label) {
            this.$ga.event("Click to our work", "click", label)
          }
        }
      }
    ]
  ]
}
