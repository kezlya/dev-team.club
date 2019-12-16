<template>
    <section class="team" id="team">
        <h2 class="team__title">Наша команда</h2>
        <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="12"
                md="3"
                v-for="(member, index) in members"
                v-bind:key="index">
                    <v-avatar size="178" class="team__avatar"><img :src="member.avatarUrl" :alt="member.name"></v-avatar>
                    <p class="team__member-name">{{ member.name }}</p>
                    <p class="team__member-position">{{ member.position }}</p>
                    <div class="team__member-socials" v-if="member.socials">
                        <v-btn
                        v-for="(social, index) in member.socials"
                        v-bind:key="index"
                        :href="social.link" target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon class="social-icon">{{ social.icon }}</v-icon>
                        </v-btn>
                    </div>
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
            name: 'Виталий',
            position: 'Лидер команды',
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
            name: 'Стас',
            position: 'Веб-разработчик',
            avatarUrl: '/team/stas.jpg',
        },
        {
            name: 'Кирилл',
            position: 'Веб-разработчик',
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
                {
                    link: 'https://vk.com/22pov22',
                    icon: 'mdi-vk'
                },
            ]
        },
        {
            name: 'Ирина',
            position: 'Менеджер проектов',
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
    padding 100px 0

    &__members
        display flex
        justify-content space-between
        flex-wrap wrap
        width 100%
        margin-top 20px
    
    &__avatar 
        margin-bottom 20px

    &__title
        margin-bottom 30px

    &__member-name 
        font-size 18px
        margin-top 10px
        margin-bottom 0

    &__member-position 
        font-size 14px
        margin-bottom 10px

    &__social-btn
        margin 0 3px
        color #4C5152!important
        &:hover
            background-color #00aeef
            color #00aeef!important
            .social-icon
                color white!important
        
</style>