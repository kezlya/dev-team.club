<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      app
    >
      <v-list dense>
        <v-list-item  to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item >
          <v-list-item-action>
            <v-icon>mdi-marker-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >About</v-list-item-title>
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
    >
      <v-btn
        icon
        @click.stop="drawer = !drawer"
        class="d-sm-none"
      >
        <v-icon class="white--text">mdi-menu</v-icon>
      </v-btn>
      <div class="d-flex justify-center align-end">
        <h1 class="">Dev team</h1>
      </div>
      <v-spacer/>
      <div v-if="!isUpPage" class="justify-end align-end d-none d-sm-flex mr-12">
        <v-btn class="white--text social-btn"  text  small>
          home
        </v-btn>
        <v-btn class="white--text social-btn" text  small>
          about
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <header-background></header-background>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      class="black white--text"
      app
    >
      <span>&copy; {{new Date().getFullYear()}} dev-team.club 
        <!-- (OOO dev-team) -->
      </span>
      <v-spacer></v-spacer>
      <v-btn  href="mailto:devteamclub.info@gmail.com" class="" dark icon small>
        <v-icon size="20px">mdi-gmail</v-icon>
      </v-btn>
      <v-btn  target="_blank" href="https://www.facebook.com/dewteam.club.7" class="" dark icon small>
        <v-icon size="20px">mdi-facebook</v-icon>
      </v-btn>
      <v-btn  target="_blank" href="https://www.instagram.com/devteamclub/" class="" dark icon small>
        <v-icon size="20px">mdi-instagram</v-icon>
      </v-btn>
      <v-btn  target="_blank" href="https://twitter.com/devteamclub" class="" dark icon small>
        <v-icon size="20px">mdi-twitter</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderBackground from '../components/HeaderBackground.vue'

export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      classHeader: null,
      isUpPage: null
    }
  },
  components: {
		HeaderBackground
	},
  mounted() {
    this.handlerChangeHeader()
    document.addEventListener('scroll', this.handlerChangeHeader.bind(this) );
  },
  methods: {
    handlerChangeHeader(){
      this.scrolled = window.pageYOffset;
      if (this.scrolled <  50) {
        this.classHeader = 'up-page black--text';
        this.isUpPage = true;
      } else {
        this.classHeader = 'black white--text';
        this.isUpPage = false;
      }
    },
  }
}
</script>
<style lang="stylus" scoped>
  .up-page 
    background transparent !important
    color black 
  
</style>
