<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      app
    >
      <v-list dense>
        <v-list-item  @click="$vuetify.goTo('#team')" >
          <v-list-item-action>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Команда</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  @click="$vuetify.goTo('#projects')" >
          <v-list-item-action>
            <v-icon>mdi-iframe-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Работы</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  @click="$vuetify.goTo('#contact')" >
          <v-list-item-action>
            <v-icon>mdi-contact-mail-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Контакты</v-list-item-title>
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
        :class="classHeader"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="d-flex justify-center align-end">
        <h1 class="">Dev team</h1>
      </div>
      <v-spacer/>
      <div class="justify-end align-end d-none d-sm-flex mr-12">
        <v-btn class="social-btn" @click="$vuetify.goTo('#team')" :class="classHeader" text small>
          Команда
        </v-btn>
        <v-btn class="social-btn" @click="$vuetify.goTo('#projects')" :class="classHeader" text small>
          Работы
        </v-btn>
        <v-btn class="social-btn" @click="$vuetify.goTo('#contact')" :class="classHeader" text small>
          Контакты
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <header-background></header-background>
      <nuxt />
    </v-content>
    <v-footer
      class="white"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} ООО Дев-тим
      </span>
      <v-spacer></v-spacer>
      <v-btn  href="mailto:devteamclub.info@gmail.com" id="about" icon small>
        <v-icon size="20px">mdi-gmail</v-icon>
      </v-btn>
      <v-btn  target="_blank" href="https://www.facebook.com/dewteam.club.7" class="" icon small>
        <v-icon size="20px">mdi-facebook</v-icon>
      </v-btn>
      <v-btn  target="_blank" href="https://www.instagram.com/devteamclub/" class="" icon small>
        <v-icon size="20px">mdi-instagram</v-icon>
      </v-btn>
      <v-btn  target="_blank" href="https://twitter.com/devteamclub" class="" icon small>
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
		}
	},
  	components: {
		HeaderBackground
	},
	mounted() {
		this.handlerChangeHeader();
		document.addEventListener('scroll', this.handlerChangeHeader.bind(this) );
	},
	methods: {
		handlerChangeHeader() {
			this.scrolled = window.pageYOffset;
			if (this.scrolled <  50) {
				this.classHeader = 'up-page white--text';
			} else {
				this.classHeader = '';
			}
    },
  },
}
</script>
<style lang="stylus" scoped>
  .up-page 
    background transparent !important
  
</style>
