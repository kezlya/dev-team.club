<template>
  <div class="sections-wrapper">
    <team />
    <projects />
    <contact />
  </div>
</template>

<script>
import Team from "~/components/Team.vue"
import Projects from "~/components/Projects.vue"
import Contact from "~/components/Contact.vue"

export default {
  components: {
    Team,
    Projects,
    Contact
  }
}
</script>

<style lang="stylus" scoped>
.sections-wrapper
	text-align center
</style>
