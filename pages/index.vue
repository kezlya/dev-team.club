<template>
	<div class="sections-wrapper">
		<header-background/>
		<team></team>
	</div>
</template>

<script>
import Team from '~/components/Team.vue'
import HeaderBackground from '~/components/HeaderBackground.vue'


export default {
	components: {
		Team,
		HeaderBackground
	}
}
</script>

<style lang="stylus" scoped>
.sections-wrapper
	text-align center
</style>