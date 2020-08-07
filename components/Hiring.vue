<template>
  <section id="job" class="hiring">
    <v-dialog v-model="dialog" scrollable max-width="800px">
      <v-card color="grey darken-4 pa-3" height="100%">
        <v-card-title class="display-1 font-weight-bold white--text">
          {{ $t(viewVacancyInDialog.title) }}
        </v-card-title>
        <v-card-subtitle class="subtitle-1 mt-2 white--text">
          {{ $t(viewVacancyInDialog.description) }}
        </v-card-subtitle>
        <v-container>
          <form-feedback
            :label-message="
              `vacancy ${viewVacancyInDialog.title} - id${viewVacancyInDialog.id}`
            "
            @sendMessage="dialog = false"
          />
        </v-container>
      </v-card>
    </v-dialog>
    <v-container>
      <v-row>
        <v-col class="text-left mr-auto" cols="12" md="6" lg="5">
          <!-- eslint-disable-next-line -->
          <h2 class="hiring__title mb-0">{{ $t("hiringTitle") }}</h2>
          <p class="hiring__subtitle">
            {{ $t("hiringSubtitle") }}
          </p>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <v-row>
            <v-col
              v-for="(vacancy, index) in vacancys"
              :key="index + 5"
              cols="12"
              sm="4"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  v-ga="$ga.commands.hiring.bind($parent, vacancy.title)"
                  :color="`grey darken-${hover ? 1 : 3}`"
                  class="hiring__card"
                  @click="handlerClickVacancy(vacancy)"
                >
                  <v-card-title
                    class="hiring__vacancy-btn headline pa-2 pl-3 my-2"
                  >
                    {{ $t(vacancy.title) }}
                  </v-card-title>
                  <v-icon class="hiring__vacancy-icon">
                    {{ vacancy.icon }}
                  </v-icon>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import FormFeedback from "./FormFeedback.vue"

export default {
  components: {
    FormFeedback
  },
  data: () => ({
    dialog: false,
    viewVacancyInDialog: {},
    vacancys: [
      {
        id: 1,
        title: "backEndDev",
        description: "backEndDevDesc",
        icon: "mdi-server"
      },
      {
        id: 2,
        title: "frontEndDev",
        description: "frontEndDevDesc",
        icon: "mdi-monitor-dashboard"
      },
      {
        id: 3,
        title: "mobileDev",
        description: "mobileDevDesc",
        icon: "mdi-cellphone-text"
      }
    ]
  }),
  methods: {
    handlerClickVacancy(vacancy) {
      this.viewVacancyInDialog = vacancy
      this.dialog = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.hiring
    width 100%
    padding 70px 0
    background-color #000000
    &__title
        color white
        margin-bottom 30px
        word-wrap break-word
        @media screen and (max-width: 790px)
            font-size 50px
    &__subtitle
        font-weight normal
        font-size 20px
        line-height 28px
        color #CCCCCC
        margin-top 10px
        margin-bottom 50px
    &__card
        height 100%
        cursor pointer
        padding 10px 0 20px
    &__vacancy-icon
        font-size: 75px!important
        margin-top 10px
        color: rgba(255,255,255,0.43)
    &__vacancy-btn
        text-align center
        display block
        font-size 27px!important
        color rgba(255, 255, 255, 0.43)
</style>
