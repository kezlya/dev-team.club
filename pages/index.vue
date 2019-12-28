<template>
  <div class="sections-wrapper">
    <team />
    <projects />
    <hiring />
    <contact-section />
  </div>
</template>

<script>
import Team from "~/components/Team.vue"
import ContactSection from "~/components/ContactSection.vue"
import Projects from "~/components/Projects.vue"
import Hiring from "~/components/Hiring.vue"

export default {
  components: {
    Team,
    ContactSection,
    Projects,
    Hiring
  }
}
</script>

<style lang="stylus" scoped>
.sections-wrapper
	text-align center
</style>
