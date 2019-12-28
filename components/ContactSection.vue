<template>
    <section class="contact" id="contact">
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" sm="5">
                        <h2 class="contact__title">{{ $t('workTitle') }}</h2>
                        <form-feedback labelMessage="contactus"></form-feedback>
                    </v-col>
                </v-row>
            </v-container>
    </section>
</template>
<script>
import FormFeedback from './FormFeedback.vue'

export default {
    data() {
        return {
        }
    },
    methods: {
        sendMessageSlack () {
            this.error = this.message = null;
            if(this.amountNumber !== this.masterAmountNumber) {
                this.error = 'wrong answer';
                return;
            }
            let allValid = true;

            Object.keys(this.form).forEach(f => {
                this.$refs[f].validate(true)  // проверка на валидность полей
                if(!this.$refs[f].valid) allValid = false
            })
            if(!allValid) return;
            this.isloading = true;
            const message = `name: ${this.form.name}, \n email: ${this.form.email}, \n date: ${new Date().toGMTString()} \n message: ${this.form.message}`;
            axios.post(`https://hooks.slack.com/services/${process.env.NUXT_ENV_SLACK_WEBHOOK}`,`{"text":"${message}"}`)
                .then((response) => {
                    this.message = 'Message sent'
                    this.isloading = false;
                    this.setRandomNumber()
                    this.amountNumber = null;
                }).catch((er) => {
                    this.setRandomNumber()
                    this.amountNumber = null;
                    this.error = er
                    this.isloading = false;
                })
        },
        setRandomNumber(){
            this.firstRandomNumber = Math.floor(Math.random() * 11);
            this.secondRandomNumber = Math.floor(Math.random() * 11);
            this.masterAmountNumber = this.firstRandomNumber + this.secondRandomNumber;
        }
    },
    created(){
        this.setRandomNumber()
    },
    computed: {
        isDisabledBtnSubmit(){
            return !(this.amountNumber === this.masterAmountNumber && this.name && this.email && this.message)
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
    text-align center
    background-color #000000
    padding: 70px 0
    border-top 1px solid rgba(255, 255, 255, 0.3);

    &__title 
        color white
        margin-bottom 30px
        word-wrap break-word
        @media screen and (max-width: 790px)
            font-size 50px
            line-height: 60px;


    label 
        color red

</style>