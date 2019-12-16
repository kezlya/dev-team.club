<template>
    <section class="contact">
        <v-img height="690" src="/contactBG2.jpeg" class="pt-6">
            <v-container>
                <h1 class="contact__title display-2 font-weight-bold">Связаться с нами</h1>
                <form-feedback labelMessage="contactus"></form-feedback>
            </v-container>
        </v-img>
    </section>
</template>
<script>
import FormFeedback from './FormFeedback.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        FormFeedback
    }
}
</script>

<style lang="stylus" scoped>
.contact
    width 100%
    margin-top -70px
    text-align center
    &__title 
        font-size 55px
        color white
</style>