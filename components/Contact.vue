<template>
  <section id="job" class="hiring">
    <!-- eslint-disable-next-line -->
    <h2 class="section-title">We’re / Hiring</h2>
    <p class="section-subtitle">
      At the moment, our team requires the following specialists:
    </p>
    <v-container>
      <v-row class="justify-center px-3">
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12">
              <v-text-field
                ref="name"
                v-model="form.name"
                dark
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
                ref="email"
                v-model="form.email"
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
          <v-textarea
            ref="message"
            v-model="form.message"
            class="mt-5"
            dense
            dark
            :rules="[rules.required]"
            no-resize
            rows="1"
          >
            <template v-slot:label>
              <span class="label">Subject</span>
            </template>
          </v-textarea>
          <span
            v-show="error"
            class="red--text text-uppercase subtitle-2 text-center d-block"
          >
            {{ error }}
          </span>
          <span v-show="message" class="warning--text title">
            {{ message }}
          </span>
          <v-row justify="end">
            <v-col
              class="d-flex justify-start align-center white--text"
              cols="12"
              sm="8"
            >
              <div class="mt-n1">
                <p class="mr-2 my-0">
                  How are you with math? {{ firstRandomNumber }} +
                  {{ secondRandomNumber }} = ?
                </p>
              </div>
              <div class="wrap">
                <v-text-field
                  v-model.number="amountNumber"
                  dark
                  dense
                  class="mb-n6 mt-n1"
                  autocomplete="off"
                />
              </div>
            </v-col>
            <v-col cols="7" sm="4" class="justify-end d-flex">
              <v-btn
                class="text-none"
                outlined
                rounded
                :loading="isloading"
                color="#CB2A76"
                width="135"
                @click="sendMessageSlack"
              >
                Contact
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      firstRandomNumber: null,
      secondRandomNumber: null,
      amountNumber: null,
      masterAmountNumber: null,
      isloading: false,
      error: null,
      message: null,
      rules: {
        required: value => value === null || value !== "" || "Required field",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return value === null || pattern.test(value) || "Wrong e-mail"
        }
      }
    }
  },
  created() {
    this.setRandomNumber()
  },
  methods: {
    sendMessageSlack() {
      this.error = this.message = null
      if (this.amountNumber !== this.masterAmountNumber) {
        this.error = "Wrong answer"
        return
      }
      let allValid = true

      Object.keys(this.form).forEach(f => {
        this.$refs[f].validate(true) // validation
        if (!this.$refs[f].valid) allValid = false
      })
      if (!allValid) return
      this.isloading = true
      const message = `label: contactus, \n name: ${this.form.name},\n email: ${
        this.form.email
      }, \n date: ${new Date().toGMTString()} \n message: ${this.form.message}`
      axios
        .post(
          `https://hooks.slack.com/services/${process.env.NUXT_ENV_SLACK_WEBHOOK}`,
          `{"text":"${message}"}`
        )
        .then(() => {
          this.message = "Message sent"
          this.form.name = this.form.email = this.form.message = null
          setTimeout(() => {
            this.message = null
          }, 3000)
          this.isloading = false
          this.setRandomNumber()
          this.amountNumber = null
          this.$emit("sendMessage")
          this.$ga.event({
            eventCategory: "Feedback form",
            eventAction: "click",
            eventLabel: "Successful sending"
          })
        })
        .catch(err => {
          this.setRandomNumber()
          this.amountNumber = null
          this.error = err
          this.isloading = false
        })
    },
    setRandomNumber() {
      this.firstRandomNumber = Math.floor(Math.random() * 11)
      this.secondRandomNumber = Math.floor(Math.random() * 11)
      this.masterAmountNumber = this.firstRandomNumber + this.secondRandomNumber
    }
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

.hiring
    width 100%
    text-align center
    background-color #000000
    padding: 70px 0
    border-top 1px solid rgba(255, 255, 255, 0.3);

    .section-title
        color white
        margin-bottom 30px
        word-wrap break-word
        padding: 0 20px
        @media screen and (max-width: 790px)
            font-size 50px
            line-height: 60px;

    .section-subtitle
        font-weight normal
        font-size 20px
        line-height 28px
        padding: 0 20px
        color #CCCCCC
        margin-bottom 50px
    label
        color red
</style>
