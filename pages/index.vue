<template>
	<div class="sections-wrapper">
		<team></team>
		<contact-section></contact-section>
	</div>
</template>

<script>
import Team from '~/components/Team.vue'
import ContactSection from '~/components/ContactSection.vue'


export default {
	components: {
		Team,
		ContactSection
	}
}
</script>

<style lang="stylus" scoped>
.sections-wrapper
	text-align center
</style>