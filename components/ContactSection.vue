<template>
    <section class="contact">
        <v-img height="600" src="/contactBG.jpeg" class="pt-6">
            <v-container>
                <h1 class="contact__title">Contact us</h1>
                <v-row justify="center">
                    <v-col cols="11" >
                        <v-row >
                            <v-col sm="6" cols="12">
                                <v-text-field
                                    v-model="name"
                                    label="Your name"
                                    prepend-inner-icon="mdi-account"
                                    solo
                                    background-color="#fff"
                                    autocomplete="off"
                                ></v-text-field>
                            </v-col>
                            <v-col sm="6" cols="12">
                                <v-text-field
                                    v-model="email"
                                    label="Your email"
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
                            v-model="message"
                            solo
                            prepend-inner-icon="mdi-comment"
                            label="Your message"
                            no-resize
                            rows="4"
                        ></v-textarea>
                        <span class="red--text title" v-show="error">{{error}}</span>
                    </v-col>
                    <v-col cols="11">
                        <v-row align="center" justify="end">
                            <v-col class="d-flex justify-end align-start white--text" cols="8" sm="5">
                                <div class="mt-n1">
                                    <p class="mx-3 my-0">How's Your Math?</p>
                                    <p class="mx-3 my-0">{{firstRandomNumber}} + {{secondRandomNumber}} = ?</p>
                                </div>
                                <div class="contact__wrap">
                                    <v-text-field
                                        v-model.number="amountNumber"
                                        solo
                                        class="mb-n7"
                                        background-color="#929292"
                                        autocomplete="off"
                                        type="number"
                                    ></v-text-field>
                                </div>
                            </v-col>
                             <v-col cols="4" sm="3" >
                                <v-btn @click="sendMessageSlack" :loading="isloading" dark :disabled="isDisabledBtnSubmit" x-large color="warning" width="170">
                                    submit
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
        name: null,
        email: null,
        message: null,
        firstRandomNumber: null,
        secondRandomNumber: null,
        amountNumber: null,
        masterAmountNumber: null,
        isloading: false,
        error: null
    }
  },
  methods: {
    sendMessageSlack () {
        this.isloading = true;
        const message = `name: ${this.name}, \n email: ${this.email}, \n message: ${this.message}`;
        axios.post('https://hooks.slack.com/services/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',`{"text":"${message}"}`)
            .then((response) => {
                this.isloading = false;
                this.amountNumber = null;
                this.error = null;
            }).catch((er) => this.error = er)
    }
  },
  created(){
    this.firstRandomNumber = Math.floor(Math.random() * 11);
    this.secondRandomNumber = Math.floor(Math.random() * 11);
    this.masterAmountNumber = this.firstRandomNumber + this.secondRandomNumber;
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
       width 60px
.theme--dark.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
    background-color #929292 !important
       
</style>