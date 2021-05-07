<template>
  <section id="work" class="projects">
    <!-- eslint-disable-next-line -->
    <h2 class="section-title">Our Latest / Work</h2>
    <v-container>
      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          class="project"
        >
          <a
            v-ga="$ga.commands.projects.bind($parent, project.name)"
            :href="project.link"
            target="_blank"
            class="link-row"
          >
            <!-- eslint-disable-next-line -->
            <img
              width="100%"
              :src="project.previewUrl"
              :alt="project.name"
              class="photo"
            />
            <div class="meta">
              <p class="name">{{ project.name }}</p>
              <div class="action">
                <p class="description">
                  {{ project.description }}
                </p>
                <p class="view-link text-none">
                  View site
                  <v-icon class="link-icon">mdi-arrow-right</v-icon>
                </p>
              </div>
            </div>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        name: "AntHive",
        link: "https://anthive.io/",
        previewUrl: "/projects/anthive.jpg",
        description:
          "Coding challenge for beginners and experienced developers. Test your skills in various programming languages, challenge developers around the world. Real-time rating and leaderboard."
      },
      {
        name: "BreakKonnect",
        link: "https://breakkonnect.com/",
        previewUrl: "/projects/breakkonnect.jpg",
        description:
          "A worldwide community of dancers with unique opportunities for organizing breakdance battles. Advance payment and video streaming features"
      },
      {
        name: "Aatlas",
        link: "https://www.aatlas.com/",
        previewUrl: "/projects/aatlas.jpg",
        description:
          "Aatlas is the simplest, most rewarding way to create, explore and share the story of a life"
      },
      {
        name: "Android.com",
        link: "https://android.com/",
        previewUrl: "/projects/android.jpg",
        description:
          "Participated in the development of the official website for Android OS"
      },
      {
        name: "OnDemand",
        link: "https://ondemandfitness.app/",
        previewUrl: "/projects/ondemandfitness.jpg",
        description:
          "On Demand Fitness is a Mobile app for Apple and Android devices. Helps you to generate and personalize workouts with a few clicks"
      },
      {
        name: "Chrome.com",
        link: "https://chrome.com/",
        previewUrl: "/projects/chrome.jpg",
        description:
          "Participated in the development of the official website for Chrome browser"
      }
    ]
  })
}
</script>

<style lang="stylus" scoped>
.projects
	padding 70px 0

	.section-title
		margin-bottom 30px

	.project
		position: relative;
		&:hover .photo
			transform scale(1.1)
			opacity 0.3
		&:hover .action
			opacity 1
		&:hover .meta
			top 20px
			@media (max-width: 480px)
				top 0
			@media (min-width: 1264px) and (max-width: 1900px)
				top 0

		.link-row
			color white
			text-decoration none
			background-color black
			display block
			overflow hidden
			position relative

		.photo
			transition: all ease .5s
			margin-bottom: -8px;

		.meta
			position absolute
			top 80%
			left 0
			text-align left
			padding 0 40px
			transition: all ease .5s
			max-width 65%
			min-height 203px
			@media (min-width: 1264px) and (max-width: 1900px)
				top 75%
				max-width 100%
			@media (max-width: 480px)
				max-width 100%
				padding 0 20px
				top 70%

		.name
			margin-top 20px
			margin-bottom 10px
			font-size 40px
			font-weight 700
			line-height 40px
			@media (min-width: 1264px) and (max-width: 1900px)
				font-size: 30px

		.action
			opacity 0
			transition: all ease .5s

		.view-link
			font-size 16px
			letter-spacing 0px
			font-weight 600
			color #CB2A76
			display inline
			&:hover .project__link-icon
				margin-left 12px

		.description
			@media (max-width: 480px)
				font-size 15px

		.link-icon
			color #CB2A76
			margin-left 5px
</style>
