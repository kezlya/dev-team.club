<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      app
      dark
      color="black"
      class="mobile-menu"
    >
      <v-list dense>
        <v-list-item
          v-ga="$ga.commands.navigation.bind(this, 'Team')"
          @click="$vuetify.goTo('#team')"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-item-name">
              Team
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-ga="$ga.commands.navigation.bind(this, 'Work')"
          @click="$vuetify.goTo('#work')"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-item-name">
              Work
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-ga="$ga.commands.navigation.bind(this, 'Job')"
          @click="$vuetify.goTo('#job')"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-item-name">
              Job
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-ga="$ga.commands.footerLinks.bind(this, 'Instagram')"
          target="_blank"
          href="https://www.instagram.com/devteamclub"
        >
          <v-list-item-content>
            <v-list-item-title class="menu-item-name">
              Instagram
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      elevation="0"
      app
      hide-on-scroll
      :class="classHeader"
      class="menu"
      height="80"
    >
      <v-btn
        icon
        class="d-sm-none"
        :class="classHeader"
        @click.stop="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <a
        v-ga="$ga.commands.navigation.bind(this, 'Logo')"
        href="/"
        class="d-flex
        justify-center
        align-end
        logo"
      >
        dev / team
      </a>
      <v-spacer />
      <div class="justify-end align-end d-none d-sm-flex">
        <v-btn
          v-ga="$ga.commands.navigation.bind(this, 'Team')"
          class="text-none nav-link"
          :class="classHeader"
          text
          tile
          @click="$vuetify.goTo('#team')"
        >
          Team
        </v-btn>
        <v-btn
          v-ga="$ga.commands.navigation.bind(this, 'Work')"
          class="text-none nav-link"
          :class="classHeader"
          text
          tile
          @click="$vuetify.goTo('#work')"
        >
          Work
        </v-btn>
        <v-btn
          v-ga="$ga.commands.navigation.bind(this, 'Job')"
          class="text-none nav-link"
          :class="classHeader"
          text
          tile
          @click="$vuetify.goTo('#job')"
        >
          Job
        </v-btn>
        <v-btn
          v-ga="$ga.commands.navigation.bind(this, 'Instagram')"
          target="_blank"
          href="https://www.instagram.com/devteamclub"
          class="text-none nav-link"
          :class="classHeader"
          text
          tile
        >
          Instagram
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <header-background />
      <nuxt />
    </v-content>
    <v-footer dark class="black">
      <span class="mx-auto">
        &copy; {{ new Date().getFullYear() }} Dev-team
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderBackground from "../components/HeaderBackground.vue"

export default {
  components: {
    HeaderBackground
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      classHeader: null
    }
  },
  mounted() {
    this.handlerChangeHeader()
    document.addEventListener("scroll", this.handlerChangeHeader.bind(this))
  },
  methods: {
    handlerChangeHeader() {
      this.scrolled = window.pageYOffset
      if (this.scrolled < 50) {
        this.classHeader = "up-page color-white"
      } else {
        this.classHeader = ""
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.color-white
	color white!important

	.logo
		color white
		border-color white

.up-page
	background transparent !important

.logo
	border 2px solid black
	padding 10px 18px
	font-weight 600
	font-size 16px
	color black
	text-decoration none

	.local-switcher, .nav-link
		margin 10px 5px
		font-size 16px

	.menu
		padding 0 24px
		@media (max-width: 400px)
			padding 0

	.menu-item-name
		font-size 25px!important
</style>
