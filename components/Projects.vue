<template>
    <section class="projects">
        <h2 class="projects__title">Our latest projects</h2>
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
            previewUrl: '/anthive.jpg',
            description: 'Coding challenge for beginners and seasoned developers. Tests your skills in various coding languages, challenge developers across the world. Realtime Ranking and leaderboard.',
        },
        {
            name: 'BreakKonnect.com',
            link: 'https://breakkonnect.com/',
            previewUrl: '/breakkonnect.jpg',
            description: 'World wide Dancers community with unique features to organize breakdancing battles. Advance payment features and Video Streaming of live events.',
        },
        {
            name: 'CarsRespect.com',
            link: 'http://carsrespect.com/',
            previewUrl: '/carsrespect.jpg',
            description: 'Website for cars dealership. Gives the owner flexible and easy way to manage promotions and vehicles for sale.',
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