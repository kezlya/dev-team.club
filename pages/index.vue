<template>
	<div class="sections-wrapper">
		<team></team>
		<contact-section></contact-section>
		<projects></projects>
	</div>
</template>

<script>
import Team from '~/components/Team.vue'
import ContactSection from '~/components/ContactSection.vue'
import Projects from '~/components/Projects.vue'


export default {
	components: {
		Team,
		ContactSection,
		Projects,
	}
}
</script>

<style lang="stylus" scoped>
.sections-wrapper
	text-align center
</style>