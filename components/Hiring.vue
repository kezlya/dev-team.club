<template>
    <section class="hiring">
        <h2 class="hiring__title">Вакансии</h2>
        <p class="hiring__subtitle">В данный момент к нам в коианду требуются следущие специалисты:</p>
        <v-container>
            <v-row>
                <v-col
                cols="12"
                
                v-for="(vacancy, index) in vacancys"
                :key="index + 5">
                    <v-card>
                        <v-card-title class="headline">{{vacancy.title}}</v-card-title>

                        <v-card-subtitle>
                            {{vacancy.discription}}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn text>откликнуться</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col
                    v-for="(vacancy, index) in vacancys"
                    :key="index"
                    cols="12"
                    md="7"
                >
                <v-card
                    dark
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title
                        class="headline">
                            {{vacancy.title}}
                        </v-card-title>

                        <v-card-subtitle>
                            {{vacancy.discription}}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn large color="success">откликнуться</v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar
                        class="ma-3"
                        size="125"
                        tile
                    >
                        <v-img :src="vacancy.linkImg"></v-img>
                    </v-avatar>
                    </div>
                </v-card>
                </v-col>
                
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data: () => ({
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
</style>