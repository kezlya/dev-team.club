<template>
    <section class="hiring" id="job">
        
        <v-dialog v-model="dialog" scrollable  max-width="1000px">
            <v-card color="grey darken-4 pa-3" height="100%">
                <v-card-title class="display-1 font-weight-bold white--text">
                    {{viewVacancyInDialog.title}}
                </v-card-title>
                <v-card-subtitle class="headline mt-2  white--text">
                    {{viewVacancyInDialog.discription}}
                </v-card-subtitle>
                <v-container>
                    <form-feedback :labelMessage="`vacancy ${viewVacancyInDialog.title} - id${viewVacancyInDialog.id}`" @sendMessage="dialog = false"></form-feedback>
                </v-container>
            </v-card>
            
        </v-dialog>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <h2 class="hiring__title">Вакансии</h2>
                    <p class="hiring__subtitle">В данный момент к нам в коианду требуются следущие специалисты:</p>
                </v-col>
                <v-col cols="6">
                    <v-row>
                         <v-col
                            cols="12"
                            v-for="(vacancy, index) in vacancys"
                            :key="index + 5">
                            <v-hover v-slot:default="{ hover }">
                                <v-card @click="handlerClickVacancy(vacancy)" :color="`grey darken-${hover ? 1 : 3}`" class="hiring__card">
                                    <v-card-title class="headline pa-2 pl-3">{{vacancy.title}}</v-card-title>
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
import FormFeedback from './FormFeedback.vue'

export default {
    data: () => ({
    dialog: false,
    viewVacancyInDialog: {},
    // vacancy : ['C#/.NET разработчик', 'Angular разработчик', 'React-mobile разработчик']
    vacancys: [
        {
            id: 1,
            title: 'C#/.NET разработчик',
            discription: 'Здесь находится описание данной вакансии, которое занимает неопределенное количества места',
            linkImg: '/dotNet.jpg'
        },
        {
            id: 2,
            title: 'Angular разработчик',
            discription: 'Здесь находится описание данной вакансии',
            linkImg: '/angular.jpg'
        },
        {
            id: 3,
            title: 'React-mobile разработчик',
            discription: 'Здесь находится описание данной вакансии',
            linkImg: '/react.jpg'
        }]
    }),
    components: {
        FormFeedback
    },
    methods: {
        handlerClickVacancy(vacancy) {
            this.viewVacancyInDialog = vacancy;
            this.dialog = true;
        }
    }
}
</script>

<style lang="stylus" scoped>
.hiring
    width 100%
    padding 100px 0
    background-color #000000
    &__title
        font-weight: bold;
        font-size: 70px;
        line-height: 101px;
        color white
        margin-bottom 30px
        word-wrap break-word
    &__subtitle 
        font-weight normal
        font-size 20px
        line-height 28px
        color #CCCCCC
        margin-top 10px
        margin-bottom 50px
    &__card
        cursor pointer
</style>