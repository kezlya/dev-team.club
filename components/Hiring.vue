<template>
    <section class="hiring" id="job">
        <v-dialog v-model="dialog" scrollable max-width="800px">
            <v-card color="grey darken-4 pa-3" height="100%">
                <v-card-title class="display-1 font-weight-bold white--text">
                    {{ $t(viewVacancyInDialog.title) }}
                </v-card-title>
                <v-card-subtitle class="subtitle-1 mt-2 white--text">
                    {{ $t(viewVacancyInDialog.discription) }}
                </v-card-subtitle>
                <v-container>
                    <form-feedback :labelMessage="`vacancy ${viewVacancyInDialog.title} - id${viewVacancyInDialog.id}`" @sendMessage="dialog = false"></form-feedback>
                </v-container>
            </v-card>
            
        </v-dialog>
        <v-container>
            <v-row>
                <v-col class="text-left mr-auto" cols="12" md="6" lg="5">
                    <h2 class="hiring__title mb-0">{{ $t('hiringTitle') }}</h2>
                    <p class="hiring__subtitle">{{ $t('hiringSubtitle') }}</p>
                </v-col>
                <v-col class="" cols="12" md="5" lg="6">
                    <v-row>
                         <v-col
                            cols="12"
                            v-for="(vacancy, index) in vacancys"
                            :key="index + 5">
                            <v-hover v-slot:default="{ hover }">
                                <v-card @click="handlerClickVacancy(vacancy)" :color="`grey darken-${hover ? 1 : 3}`" class="hiring__card">
                                    <v-card-title class="hiring__vacancy-btn headline pa-2 pl-3 my-2">{{ $t(vacancy.title) }}</v-card-title>
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
            title: 'backEndDev',
            discription: 'backEndDevDesc'
        },
        {
            id: 2,
            title: 'frontEndDev',
            discription: 'backEndDevDesc'
        },
        {
            id: 3,
            title: 'mobileDev',
            discription: 'mobileDevDesc'
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
        cursor pointer

    &__vacancy-btn
        color rgba(255, 255, 255, 0.43)
</style>