<template>
	<div class="sections-wrapper">
		<team></team>
		<projects></projects>
		<hiring></hiring>
	</div>
</template>

<script>
import Team from '~/components/Team.vue'
import Projects from '~/components/Projects.vue'
import Hiring from '~/components/Hiring.vue'

export default {
	components: {
		Team,
		Projects,
		Hiring
	}
}
</script>

<style lang="stylus" scoped>
.sections-wrapper
	text-align center
</style>