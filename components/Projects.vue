<template>
  <section id="work" class="projects">
    <h2 class="projects__title">{{ $t("workTitle") }}</h2>
    <v-container>
      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          sm="12"
          md="6"
          class="project"
        >
          <a :href="project.link" target="_blank" class="project__link-row">
            <img
              width="100%"
              :src="project.previewUrl"
              :alt="project.name"
              class="project__photo"
            />
            <div class="project__meta">
              <p class="project__name">{{ project.name }}</p>
              <div class="project__action">
                <p class="project__description">
                  {{ $t(project.description) }}
                </p>
                <p class="project__view-link text-none">
                  {{ $t("viewSite")
                  }}<v-icon class="project__link-icon">mdi-arrow-right</v-icon>
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
        description: "descAnthive"
      },
      {
        name: "BreakKonnect",
        link: "https://breakkonnect.com/",
        previewUrl: "/projects/breakkonnect.jpg",
        description: "descBreakkonnect"
      },
      {
        name: "Chrome.com",
        link: "https://chrome.com/",
        previewUrl: "/projects/chrome.jpg",
        description: "descChrome"
      },
      {
        name: "Android.com",
        link: "https://android.com/",
        previewUrl: "/projects/android.jpg",
        description: "descAndroid"
      }
    ]
  })
}
</script>

<style lang="stylus" scoped>
.projects
	padding 70px 0

	&__title
		margin-bottom 30px

	.project
		position: relative;
		&:hover .project__photo
			transform scale(1.1)
			opacity 0.3
		&:hover .project__action
			opacity 1
		&:hover .project__meta
			top 20px
			@media (max-width: 480px)
				top 0

		&__link-row
			color white
			text-decoration none
			background-color black
			display block
			overflow hidden
			position relative

		&__photo
			transition: all ease .5s
			margin-bottom: -8px;

		&__meta
			position absolute
			top 80%
			left 0
			text-align left
			padding 0 40px
			transition: all ease .5s
			max-width 65%
			min-height 203px
			@media (max-width: 480px)
				max-width 100%
				padding 0 20px
				top 70%

		&__name
			margin-top 20px
			margin-bottom 10px
			font-size 40px
			font-weight 700
			line-height 40px

		&__action
			opacity 0
			transition: all ease .5s

		&__view-link
			font-size 16px
			letter-spacing 0px
			font-weight 600
			color #CB2A76
			display inline
			&:hover .project__link-icon
				margin-left 12px

		&__description
			@media (max-width: 480px)
				font-size 15px

		&__link-icon
			color #CB2A76
			margin-left 5px
</style>
