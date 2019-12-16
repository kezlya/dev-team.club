<template>
    <section class="projects" id="projects">
        <h2 class="projects__title">Наши последние работы</h2>
        <v-container>
            <v-row>
                <v-col
                cols="12"
                sm="12"
                md="6"
                v-for="(project, index) in projects"
                v-bind:key="index">
                    <v-card 
                    tile
                    outlined
                    class="projects__card">
                        <v-img width="100%" :src="project.previewUrl" :alt="project.name"></v-img>
                        <a :href="project.link" target="_blank" class="projects__name">{{ project.name }}</a>
                        <p class="projects__description">{{ project.description }}</p>
                    </v-card>
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
            name: 'AntHive.IO',
            link: 'https://anthive.io/',
            previewUrl: '/projects/anthive.jpg',
            description: 'Kодирование для начинающих и опытных разработчиков. Проверьте свои навыки в различных языках программирования, бросьте вызов разработчикам по всему миру. Рейтинг в реальном времени и таблица лидеров.',
        },
        {
            name: 'BreakKonnect.com',
            link: 'https://breakkonnect.com/',
            previewUrl: '/projects/breakkonnect.jpg',
            description: 'Всемирное сообщество танцоров с уникальными возможностями для организации брейкданс-битв. Возможности авансовых платежей и видео трансляций.',
        },
        {
            name: 'Chrome.com',
            link: 'https://chrome.com/',
            previewUrl: '/projects/chrome.png',
            description: 'Принимали участие в разработке официального веб-сайта для браузера Chrome',
        },
        {
            name: 'Android.com',
            link: 'https://android.com/',
            previewUrl: '/projects/android.png',
            description: 'Принимали участие в разработке официального веб-сайта для Android OS',
        },
    ]
  }),
}
</script>

<style lang="stylus" scoped>
.projects
    width 100%
    padding 100px 0
    background-color #e8eaea

    &__title
        margin-bottom 30px

    &__card
        padding 25px
        text-align left

    &__description
        font-family "Source Sans Pro", "Helvetica Neue", Arial, sans-serif

    &__name
        margin-top 20px
        margin-bottom 10px
        font-size 24px
        display inline-block
        color black
        text-decoration none
        &:hover
            text-decoration underline
            
</style>