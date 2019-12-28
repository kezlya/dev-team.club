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
				<v-list-item @click="$vuetify.goTo('#team')" >
					<v-list-item-content>
						<v-list-item-title class="mobile-menu__title">{{ $t('team') }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item  @click="$vuetify.goTo('#work')" >
					<v-list-item-content>
						<v-list-item-title class="mobile-menu__title">{{ $t('work') }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item  @click="$vuetify.goTo('#job')" >
					<v-list-item-content>
						<v-list-item-title class="mobile-menu__title">{{ $t('job') }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item  @click="$vuetify.goTo('#contact')" >
						<v-list-item-content>
						<v-list-item-title class="mobile-menu__title">{{ $t('contact') }}</v-list-item-title>
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
				@click.stop="drawer = !drawer"
				class="d-sm-none"
				:class="classHeader"
			>
				<v-icon>mdi-menu</v-icon>
			</v-btn>
			<a href="/" class="d-flex justify-center align-end logo">dev / team</a>
			<v-spacer/>
			<div class="justify-end align-end d-none d-sm-flex">
				<v-btn class="text-none nav-link" @click="$vuetify.goTo('#team')" :class="classHeader" text tile>
					{{ $t('team') }}
				</v-btn>
				<v-btn class="text-none nav-link" @click="$vuetify.goTo('#work')" :class="classHeader" text tile>
					{{ $t('work') }}
				</v-btn>
				<v-btn class="text-none nav-link" @click="$vuetify.goTo('#job')" :class="classHeader" text tile>
					{{ $t('job') }}
				</v-btn>
				<v-btn class="text-none nav-link" @click="$vuetify.goTo('#contact')" :class="classHeader" text tile>
					{{ $t('contact') }}
				</v-btn>
			</div>
			<v-btn class="text-none local-switcher" :to="switchLocalePath('en')" :class="classHeader" tile outlined>{{ $t('en') }}</v-btn>
			<v-btn class="text-none local-switcher" :to="switchLocalePath('ru')" :class="classHeader" tile outlined>{{ $t('ru') }}</v-btn>
		</v-app-bar>
		<v-content>
			<header-background></header-background>
			<nuxt></nuxt>
		</v-content>
		<v-footer
			dark
			class="black"
			
		>
			<span>&copy; {{ new Date().getFullYear() }} {{ $t('devTeam') }}</span>
			<v-spacer></v-spacer>
			<v-btn  href="mailto:devteamclub.info@gmail.com" icon small>
				<v-icon size="20px">mdi-gmail</v-icon>
			</v-btn>
			<v-btn  target="_blank" href="https://www.facebook.com/devteamclub" icon small>
				<v-icon size="20px">mdi-facebook</v-icon>
			</v-btn>
			<v-btn  target="_blank" href="https://www.instagram.com/devteamclub" icon small>
				<v-icon size="20px">mdi-instagram</v-icon>
			</v-btn>
			<v-btn  target="_blank" href="https://twitter.com/devteamclub" icon small>
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
				this.classHeader = 'up-page color-white';
			} else {
				this.classHeader = '';
			}
		},
	},
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

	.mobile-menu
		&__title
			font-size 25px!important

</style>
