<template>
    <v-container>
        <section class="team flex">
            <h2 class="team__title">Meet the team</h2>
            <p class="team__subtitle">Showcase the great people behind your company.</p>
            <div class="team__members">
                <div class="team__member">
                    <v-avatar size="178" class="team__avatar"><img src="/vitaly.jpg" alt="Vitaly"></v-avatar>
                    <p class="team__member-name">Vitaly</p>
                    <p class="team__member-position">Team leader</p>
                    <div class="team__member-socials">
                        <v-btn href="https://www.linkedin.com/in/vitaly-kezlya-450192b/" target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                        <v-btn href="https://www.youtube.com/channel/UCtI9EdFlDo-4m98-m5SCbcw" target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-youtube</v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="team__member">
                    <v-avatar size="178" class="team__avatar"><img src="/stas.jpg" alt="Stas"></v-avatar>
                    <p class="team__member-name">Stas</p>
                    <p class="team__member-position">Web-developer</p>
                    <div class="team__member-socials">
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-youtube</v-icon>
                        </v-btn>
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="team__member">
                    <v-avatar size="178" class="team__avatar"><img src="/kirill.jpg" alt="Kirill"></v-avatar>
                    <p class="team__member-name">Kirill</p>
                    <p class="team__member-position">Web-developer</p>
                    <div class="team__member-socials">
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-youtube</v-icon>
                        </v-btn>
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="team__member">
                    <v-avatar size="178" class="team__avatar"><img src="/irina.jpg" alt="Irina"></v-avatar>
                    <p class="team__member-name">Irina</p>
                    <p class="team__member-position">Project manager</p>
                    <div class="team__member-socials">
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-youtube</v-icon>
                        </v-btn>
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn  target="_blank" class="team__social-btn" outlined icon fab x-small>
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </section>
    </v-container>
</template>

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

    &__subtitle 
        font-size 18px
        margin-top 10px
        margin-bottom 50px

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
</style>