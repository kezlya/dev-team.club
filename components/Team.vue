<template>
  <section id="team" class="team">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="4" class="relative">
          <!-- eslint-disable-next-line -->
          <h2 class="team__title">{{ $t("teamTitle") }}</h2>
        </v-col>
        <v-col cols="12" sm="8" md="8">
          <v-row>
            <v-col
              v-for="(member, index) in members"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-avatar size="178" class="team__avatar">
                <v-img :src="member.avatarUrl" :alt="$t(member.name)" />
              </v-avatar>
              <p class="team__member-name">
                {{ $t(member.name) }}
              </p>
              <p class="team__member-position">
                {{ $t(member.position) }}
              </p>
              <div v-if="member.socials" class="team__member-socials">
                <v-btn
                  v-for="(social, i) in member.socials"
                  :key="i"
                  :href="social.link"
                  target="_blank"
                  class="team__social-btn"
                  color="#878B8F"
                  icon
                >
                  <v-icon class="social-icon">{{ social.icon }}</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-avatar size="178" class="team__avatar">
                <v-img src="/team/blank.jpg" alt="hiring" />
              </v-avatar>
              <p class="team__member-name">
                {{ $t("futureEmployee") }}
              </p>
              <p class="team__member-position">
                {{ $t("engineer") }}
              </p>
              <div class="team__member-socials">
                <v-btn
                  v-ga="
                    $ga.commands.navigation.bind(this, 'Job from Team section')
                  "
                  target="_blank"
                  class="team__social-btn text-none mt-2"
                  color="#CB2A76"
                  outlined
                  rounded
                  @click="$vuetify.goTo('#job')"
                >
                  {{ $t("weAreHiring") }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    members: [
      {
        name: "vitaly",
        position: "teamLeader",
        avatarUrl: "/team/vitaly.jpg",
        socials: [
          {
            link: "https://www.linkedin.com/in/vitaly-kezlya-450192b/",
            icon: "mdi-linkedin"
          },
          {
            link: "https://www.youtube.com/channel/UCtI9EdFlDo-4m98-m5SCbcw",
            icon: "mdi-youtube"
          },
          {
            link: "https://www.twitch.tv/kezlya",
            icon: "mdi-twitch"
          }
        ]
      },
      {
        name: "kirill",
        position: "webDeveloper",
        avatarUrl: "/team/kirill.jpg",
        socials: [
          {
            link: "https://github.com/klimonov/",
            icon: "mdi-github"
          },
          {
            link: "https://www.instagram.com/kklimonov/",
            icon: "mdi-instagram"
          },
          {
            link: "https://klimonov.github.io/",
            icon: "mdi-web"
          }
        ]
      },
      {
        name: "egor",
        position: "webDeveloper",
        avatarUrl: "/team/egor.jpg",
        socials: [
          {
            link: "https://vk.com/id381660547/",
            icon: "mdi-vk"
          },
          {
            link: "https://github.com/staszigzag/",
            icon: "mdi-github"
          }
        ]
      },
      {
        name: "alexander",
        position: "webDeveloper",
        avatarUrl: "/team/alex.jpeg",
        socials: [
          {
            link: "https://github.com/Alex-D-Green/",
            icon: "mdi-github"
          },
          {
            link: "https://twitter.com/DAS_26/",
            icon: "mdi-twitter"
          }
        ]
      },
      {
        name: "irina",
        position: "projectManager",
        avatarUrl: "/team/irina.jpg",
        socials: [
          {
            link: "https://www.instagram.com/Koblovai/",
            icon: "mdi-instagram"
          },
          {
            link: "https://vk.com/id518453899",
            icon: "mdi-vk"
          }
        ]
      }
    ]
  })
}
</script>

<style lang="stylus" scoped>
.team
    width 100%
    padding 70px 0
    background-color #FAF1E7

    &__members
        display flex
        justify-content space-between
        flex-wrap wrap
        width 100%
        margin-top 20px

    &__avatar
        margin-bottom 10px

    &__title
        font-size 86px
        font-weight 700
        position absolute
        top 50%
        transform translate(0, -50%)
        @media screen and (max-width: 790px)
          position relative
          font-size 54px
        @media screen and (max-width: 600px)
          position relative
          margin-top 0

    &__member-name
        font-size 20px
        margin-bottom 0
        font-weight 600

    &__member-position
        font-size 16px
        margin-bottom 0
        color #666666
        font-weight 500

    &__social-btn
        margin 0 3px

    &__hiring-btn
        font-size 16px
        letter-spacing 0px
        font-weight 600
        color #CB2A76
</style>
