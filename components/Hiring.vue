<template>
    <section class="hiring">
        <h2 class="hiring__title">Вакансии</h2>
        <p class="hiring__subtitle">В данный момент к нам в коианду требуются следущие специалисты:</p>
        <v-dialog v-model="dialog" scrollable  max-width="1000px">
            <v-card color="blue-grey lighten-3" height="100%">
                <v-card-title class="display-1 font-weight-bold">
                    {{viewVacancyInDialog.title}}
                </v-card-title>
                <v-card-subtitle class="headline mt-2">
                    {{viewVacancyInDialog.discription}}
                </v-card-subtitle>
                <v-container>
                    <form-feedback :labelMessage="`vacancy ${viewVacancyInDialog.title} - id${viewVacancyInDialog.id}`" @sendMessage="dialog = false"></form-feedback>
                </v-container>
            </v-card>
            
        </v-dialog>
        <v-container>
            <v-row>
                <v-col
                cols="12"
                v-for="(vacancy, index) in vacancys"
                :key="index + 5">
                    <v-hover v-slot:default="{ hover }">
                        <v-card @click="handlerClickVacancy(vacancy)" :elevation="hover ? 12 : 2"  class="hiring__card">
                            <v-card-title class="headline">{{vacancy.title}}</v-card-title>
                        </v-card>
                    </v-hover>
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
    &__subtitle 
        font-size 18px
        margin-top 10px
        margin-bottom 50px
    &__card
        cursor pointer
</style>