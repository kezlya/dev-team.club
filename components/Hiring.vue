<template>
    <section class="hiring">
        
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
                <v-col class="text-left mr-auto" cols="12" md="6" lg="5">
                    <h2 class="hiring__title mb-0">Вакансии</h2>
                    <p class="hiring__subtitle">В данный момент к нам в коианду требуются следущие специалисты:</p>
                </v-col>
                <v-col class="" cols="12" md="5" lg="6">
                    <v-row>
                         <v-col
                            cols="12"
                            v-for="(vacancy, index) in vacancys"
                            :key="index + 5">
                            <v-hover v-slot:default="{ hover }">
                                <v-card @click="handlerClickVacancy(vacancy)" :color="`grey darken-${hover ? 1 : 3}`" class="hiring__card">
                                    <v-card-title class="headline pa-2 pl-3 my-2">{{vacancy.title}}</v-card-title>
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
            title: 'Back-end разработчик ',
            discription: 'Необходимо уверенное владение стеком технологий ASP.NET Core 2 и выше, для Вэб разработки (MVC, REST) в Visual Studio, работа в MS Visual Studio. Опыт работы в данной сфере от трёх лет. Знание ООП, паттернов проектирования, работа с БД по средством Entity Framework Core. Умение разрабатывать RESTFull API для серверной части приложения, умение использовать пользоваться Git. Плюсом будет знание инфраструктуры Azure, принципов Agile методологии разработки ПО, Azure DevOps. Организованность, умение грамотно распределять своё время, работать удалённо в команде. Оформление в соответствии с ТК РФ.'
        },
        {
            id: 2,
            title: 'Front-end разработчик',
            discription: 'Необходимо уверенное владение Angular 6 и выше, Ajax, JavaScript, CSS, HTML 5, желательно знание MS Visual Studio, работа с отладчиком, Git. Опыт в разработке/поддержании ПО на Angular от года. Умение формирования архитектуры приложения (деление на сервисы, компоненты) пригодной для больших приложений. Умение реализовывать сложный пользовательский интерфейс, выполнять отладку в браузере. Плюсом будет знание Agile методологии разработки ПО, Azure DevOps. Организованность, умение грамотно распределять своё время, работать удалённо в команде. Оформление в соответствии с ТК РФ.'
        },
        {
            id: 3,
            title: 'Mobile Developer',
            discription: 'Разработка мобильных продуктов для платформ iOS или Android с использованием React Native. Опыт работы в Linux / Mac и командной строке. Организованность, умение грамотно распределять своё время, работать удалённо в команде. Требуется опыт разработки с использованием React Native, желательно продемострировать свой код. Хорошее знание английского. Желательно иметь навыки разработки пользовательского интерфейса, взаимодействия с дизайнерами. Оформление в соответствии с ТК РФ.'
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
</style>