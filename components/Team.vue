<template>
    <section class="team" id="team">
        <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="4"
                md="4">
                    <h2 class="team__title">The / team</h2>
                </v-col>
                <v-col
                cols="12"
                sm="8"
                md="8">
                    <v-row>
                        <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        v-for="(member, index) in members"
                        v-bind:key="index">
                            <v-avatar size="178" class="team__avatar"><v-img :src="member.avatarUrl" :alt="member.name"></v-img></v-avatar>
                            <p class="team__member-name">{{ member.name }}</p>
                            <p class="team__member-position">{{ member.position }}</p>
                            <div class="team__member-socials" v-if="member.socials">
                                <v-btn
                                v-for="(social, index) in member.socials"
                                v-bind:key="index"
                                :href="social.link" target="_blank" class="team__social-btn" color="#878B8F" icon>
                                    <v-icon class="social-icon">{{ social.icon }}</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="4">
                            <v-avatar size="178" class="team__avatar"><v-img src="/team/blank.jpg" alt="hiring"></v-img></v-avatar>
                            <p class="team__member-name">Future employee</p>
                            <p class="team__member-position">Engineer</p>
                            <div class="team__member-socials">
                                <v-btn target="_blank" class="team__social-btn text-none mt-2"  @click="$vuetify.goTo('#job')" color="#CB2A76" outlined rounded>
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
            name: 'Vitaly',
            position: 'Team leader',
            avatarUrl: '/team/vitaly.jpg',
            socials: [
                {
                    link: 'https://www.linkedin.com/in/vitaly-kezlya-450192b/',
                    icon: 'mdi-linkedin'
                },
                {
                    link: 'https://www.youtube.com/channel/UCtI9EdFlDo-4m98-m5SCbcw',
                    icon: 'mdi-youtube'
                },
            ]
        },
        {
            name: 'Stanislav',
            position: 'Web developer',
            avatarUrl: '/team/stas.jpg',
             socials: [
                {
                    link: 'https://vk.com/id381660547/',
                    icon: 'mdi-vk'
                },
                 {
                    link: 'https://github.com/staszigzag/',
                    icon: 'mdi-github-circle'
                },
            ]
        },
        {
            name: 'Kirill',
            position: 'Web developer',
            avatarUrl: '/team/kirill.jpg',
            socials: [
                {
                    link: 'https://github.com/klimonov/',
                    icon: 'mdi-github-circle'
                },
                {
                    link: 'https://www.instagram.com/kklimonov/',
                    icon: 'mdi-instagram'
                },
            ]
        },
        {
            name: 'Alexander',
            position: 'Web developer',
            avatarUrl: '/team/alex.jpeg',
            socials: [
                {
                    link: 'https://github.com/Alex-D-Green/',
                    icon: 'mdi-github-circle'
                },
                {
                    link: 'https://twitter.com/DAS_26/',
                    icon: 'mdi-twitter'
                },
            ]
        },
        {
            name: 'Irina',
            position: 'Project manager',
            avatarUrl: '/team/irina.jpg',
            socials: [
                {
                    link: 'https://www.instagram.com/Koblovai/',
                    icon: 'mdi-instagram'
                },
                {
                    link: 'https://vk.com/id518453899',
                    icon: 'mdi-vk'
                },
            ]
        },
    ]
  }),
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
        margin-top 123px
        @media screen and (max-width: 790px)
            font-size 54px
        @media screen and (max-width: 600px)
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
        
</style>