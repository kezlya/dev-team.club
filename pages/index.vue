<template>
	<div class="sections-wrapper">
		<team></team>
		<projects></projects>
	</div>
</template>

<script>
import Team from '~/components/Team.vue'
import Projects from '~/components/Projects.vue'

export default {
	components: {
		Team,
		Projects,
	}
}

</script>

<style lang="stylus" scoped>
.sections-wrapper
	text-align center

</style>