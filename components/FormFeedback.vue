<template>
    <v-row class="justify-center px-3">
        <v-col cols="12" >
            <v-row >
                <v-col cols="12">
                    <v-text-field
                        v-model="form.name"
                        dark
                        ref="name"
                        :rules="[rules.required]"
                        autocomplete="off"
                    >
                        <template v-slot:label>
                            <span class="label">Your name</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        v-model="form.email"
                        ref="email"
                        :rules="[rules.required, rules.email]"
                        dark
                        autocomplete="off"
                    >
                        <template v-slot:label>
                            <span class="label">Email</span>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12">
            <v-textarea
                v-model="form.message"
                ref="message"
                dense
                dark
                :rules="[rules.required]"
                no-resize
                rows="2"
            >
                <template v-slot:label>
                    <span class="label">Subject</span>
                </template>
            </v-textarea>
            <span class="red--text text-uppercase subtitle-2 text-center d-block" v-show="error">{{error}}</span>
            <span class="warning--text title" v-show="message">{{message}}</span>
        </v-col>
        <v-col cols="12">
            <v-row justify="end">
                <v-col class="d-flex justify-start align-center white--text" cols="12" sm="8" >
                    <div class="mt-n1">
                        <p class="mr-2 my-0">
                            How are you with math? {{firstRandomNumber}} + {{secondRandomNumber}} = ?
                        </p>
                    </div>
                    <div class="wrap">
                        <v-text-field
                            v-model.number="amountNumber"
                            dark
                            dense
                            class="mb-n6 mt-n1"
                            autocomplete="off"
                        ></v-text-field>
                    </div>
                </v-col>
                 <v-col cols="7" sm="4" class="justify-end d-flex">
                    <v-btn  class="font-weight-bold text-none" @click="sendMessageSlack" outlined rounded :loading="isloading"  x-large color="#CB2A76" width="190">
                        Contact
                    </v-btn>
                 </v-col>
            </v-row>
        </v-col>
    </v-row>
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
                required: value => !!value || 'Required field',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Wrong e-mail.'
                }
            }    
        }
    },
    props:['labelMessage'],
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
            const message = `label: ${this.labelMessage}, \n name: ${this.form.name},\n email: ${this.form.email}, \n date: ${new Date().toGMTString()} \n message: ${this.form.message}`;
            axios.post(`https://hooks.slack.com/services/${process.env.NUXT_ENV_SLACK_WEBHOOK}`,`{"text":"${message}"}`)
                .then((response) => {
                    this.message = 'Message sent'
                    setTimeout(() => {
                        this.message = null;
                    }, 3000);
                    this.isloading = false;
                    this.setRandomNumber()
                    this.amountNumber = null;
                    this.$emit('sendMessage')
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
    }
}
</script>
<style lang="stylus">
    .v-label
        overflow visible !important
</style>
<style lang="stylus" scoped>
    .label
        display block
        margin-top -10px
        font-style normal
        font-weight 600
        font-size 36px
        color #FFFFFF
        opacity 0.4
        @media screen and (max-width: 790px)
            font-size 25px

    .v-label--active .label
        opacity 1
        font-size 22px!important
        font inherit
        font-family 'Work Sans', sans-serif
    
    .wrap
       width 40px
</style>