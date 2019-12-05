<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      app
      class="black"
    >
      <v-btn
        icon
        @click.stop="drawer = !drawer"
        class="d-sm-block"
      >
        <v-icon class="white--text">mdi-menu</v-icon>
      </v-btn>
      <div class="d-flex justify-center align-end">
        <h1 class="white--text">Dev team</h1>
        <h4 class="font-weight-regular blue--text darken-1 mx-1 d-sm-none">A One Page WordPress Theme!</h4>
      </div>
      <v-spacer/>
      <div class="d-flex justify-end align-end">
        <v-btn  target="_blank" class="white--text social-btn" outlined icon fab small>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        <v-btn  target="_blank" class="white--text social-btn" outlined icon fab small>
            <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn  target="_blank" class="white--text social-btn" outlined icon fab small>
            <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </div>  
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        }
      ],
    }
  }
}
</script>
<style lang="stylus" scoped>
  .social-btn{
    margin-right -5px
    margin-left -5px
  }
</style>
