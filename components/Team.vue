<template>
  <section id="team" class="team">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="4" class="title-row">
          <h2 class="section-title">
            The / team
          </h2>
        </v-col>
        <v-col cols="12" sm="8" md="8">
          <v-row>
            <v-col
              v-for="(member, index) in members"
              :key="index"
              cols="12"
              sm="6"
              md="3"
            >
              <v-avatar size="175" class="avatar">
                <v-img :src="member.avatarUrl" :alt="member.name" />
              </v-avatar>
              <p class="member-name">
                {{ member.name }}
              </p>
              <p class="member-position">
                {{ member.position }}
              </p>
              <div v-if="member.socials" class="member-socials">
                <v-btn
                  v-for="(social, i) in member.socials"
                  :key="i"
                  :href="social.link"
                  target="_blank"
                  class="social-btn"
                  color="#878B8F"
                  icon
                >
                  <v-icon class="social-icon">
                    {{ social.icon }}
                  </v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-avatar size="178" class="avatar">
                <v-img src="/team/blank.jpg" alt="hiring" />
              </v-avatar>
              <p class="member-name">
                Future employee
              </p>
              <p class="member-position">
                Engineer
              </p>
              <div class="member-socials">
                <v-btn
                  v-ga="
                    $ga.commands.navigation.bind(this, 'Job from Team section')
                  "
                  target="_blank"
                  class="social-btn text-none mt-2"
                  color="#CB2A76"
                  outlined
                  rounded
                  @click="$vuetify.goTo('#job')"
                >
                  We`re Hiring
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
        name: "Vitaly",
        position: "Team leader",
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
        name: "Kirill",
        position: "Web developer",
        avatarUrl: "/team/kirill.jpg",
        socials: [
          {
            link: "https://www.linkedin.com/in/klimonov/",
            icon: "mdi-linkedin"
          },
          {
            link: "https://github.com/klimonov/",
            icon: "mdi-github"
          },
          {
            link: "https://www.instagram.com/kklimonov/",
            icon: "mdi-instagram"
          }
        ]
      },
      {
        name: "Egor",
        position: "Web developer",
        avatarUrl: "/team/egor.jpg",
        socials: [
          {
            link: "https://github.com/egoriusRus/",
            icon: "mdi-github"
          },
          {
            link: "https://vk.com/kagorius",
            icon: "mdi-vk"
          },
          {
            link: "https://www.youtube.com/channel/UC5UES3woETjQDqt6pnXCSRQ",
            icon: "mdi-youtube"
          }
        ]
      },
      {
        name: "Alexander",
        position: "Web developer",
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
        name: "Andrey",
        position: "Web developer",
        avatarUrl: "/team/andrey.jpg",
        socials: [
          {
            link: "https://github.com/1tu",
            icon: "mdi-github"
          },
          {
            link: "https://vk.com/f_awesome_guy",
            icon: "mdi-vk"
          }
        ]
      },
      {
        name: "Denis",
        position: "Web developer",
        avatarUrl: "/team/denis.jpg",
        socials: [
          {
            link: "https://github.com/the1stpc",
            icon: "mdi-github"
          },
          {
            link: "https://vk.com/id560665386",
            icon: "mdi-vk"
          }
        ]
      },
      {
        name: "Nastya",
        position: "Web designer",
        avatarUrl: "/team/nastya.jpg",
        socials: [
          {
            link: "https://www.instagram.com/Milavskaya_fm/",
            icon: "mdi-instagram"
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

    .members
        display flex
        justify-content space-between
        flex-wrap wrap
        width 100%
        margin-top 20px

    .avatar
        margin-bottom 10px

    .title-row
        position relative

    .section-title
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

    .member-name
        font-size 20px
        margin-bottom 0
        font-weight 600

    .member-position
        font-size 16px
        margin-bottom 0
        color #666666
        font-weight 500

    .social-btn
        margin 0 3px

    .hiring-btn
        font-size 16px
        letter-spacing 0px
        font-weight 600
        color #CB2A76
</style>
