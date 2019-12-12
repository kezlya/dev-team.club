<template>
    <section class="contact">
        <v-img height="690" src="/contactBG2.jpeg" class="pt-6">
            <v-container>
                <h1 class="contact__title display-2 font-weight-bold">Связаться с нами</h1>
                <v-row justify="center">
                    <v-col cols="11" >
                        <v-row >
                            <v-col sm="6" cols="12">
                                <v-text-field
                                    v-model="form.name"
                                    ref="name"
                                    :rules="[rules.required]"
                                    label="Ваше имя"
                                    prepend-inner-icon="mdi-account"
                                    solo
                                    background-color="#fff"
                                    autocomplete="off"
                                ></v-text-field>
                            </v-col>
                            <v-col sm="6" cols="12">
                                <v-text-field
                                    v-model="form.email"
                                    ref="email"
                                    :rules="[rules.required, rules.email]"
                                    label="Ваш email"
                                    prepend-inner-icon="mdi-email"
                                    solo
                                    background-color="#fff"
                                    autocomplete="off"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="11">
                        <v-textarea
                            v-model="form.message"
                            ref="message"
                            solo
                            dense
                            :rules="[rules.required]"
                            prepend-inner-icon="mdi-comment"
                            label="Ваше сообщение"
                            no-resize
                            rows="4"
                        ></v-textarea>
                        <span class="red--text title" v-show="error">{{error}}</span>
                        <span class="warning--text title" v-show="message">{{message}}</span>
                    </v-col>
                    <v-col cols="11">
                        <v-row justify="end">
                            <v-col class="d-flex justify-end align-center white--text" cols="12" sm="8" >
                                <div class="mt-n1">
                                    <p class="mr-2 my-0">
                                        Как ваша математика? {{firstRandomNumber}} + {{secondRandomNumber}} = ?
                                    </p>
                                </div>
                                <div class="contact__wrap">
                                    <v-text-field
                                        v-model.number="amountNumber"
                                        solo
                                        dense
                                        class="mb-n6"
                                        background-color="#fff"
                                        autocomplete="off"
                                    ></v-text-field>
                                </div>
                            </v-col>
                             <v-col cols="7" sm="4" >
                                <v-btn @click="sendMessageSlack" :loading="isloading" dark x-large color="warning" width="190">
                                    отправить
                                    <v-icon class="ml-auto">mdi-send</v-icon>
                                </v-btn>
                             </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </section>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            form: {
                name: null,
                email: null,
                message: null
            },
            firstRandomNumber: null,
            secondRandomNumber: null,
            amountNumber: null,
            masterAmountNumber: null,
            isloading: false,
            error: null,
            message: null,
            rules: {
                required: value => !!value || 'Поле обязательно для заполнения',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Недействителен e-mail.'
                }
            }    
        }
    },
  methods: {
    sendMessageSlack () {
        this.error = this.message = null;
        if(this.amountNumber !== this.masterAmountNumber) {
            this.error = 'не верно решена задача';
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
                this.message = 'Сообщение отправленно'
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
    &__wrap
       width 50px
</style>