<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row>
        <v-col sm="6" cols="12">
          <v-text-field
            ref="name"
            v-model="form.name"
            :rules="[rules.required]"
            label="Ваше имя"
            prepend-inner-icon="mdi-account"
            solo
            background-color="#fff"
            autocomplete="off"
          />
        </v-col>
        <v-col sm="6" cols="12">
          <v-text-field
            ref="email"
            v-model="form.email"
            :rules="[rules.required, rules.email]"
            label="Ваш email"
            prepend-inner-icon="mdi-email"
            solo
            background-color="#fff"
            autocomplete="off"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-textarea
        ref="message"
        v-model="form.message"
        solo
        dense
        :rules="[rules.required]"
        prepend-inner-icon="mdi-comment"
        label="Ваше сообщение"
        no-resize
        rows="4"
      />
      <span v-show="error" class="red--text title">{{ error }}</span>
      <span v-show="message" class="warning--text title">{{ message }}</span>
    </v-col>
    <v-col cols="12">
      <v-row justify="end">
        <v-col class="d-flex justify-end align-center white--text" cols="12" sm="8">
          <div class="mt-n1">
            <p class="mr-2 my-0">
              Как ваша математика? {{ firstRandomNumber }} + {{ secondRandomNumber }} = ?
            </p>
          </div>
          <div class="wrap">
            <v-text-field
              v-model.number="amountNumber"
              solo
              dense
              class="mb-n6"
              background-color="#fff"
              autocomplete="off"
            />
          </div>
        </v-col>
        <v-col cols="7" sm="4">
          <v-btn
            :loading="isloading"
            dark
            x-large
            color="warning"
            width="190"
            @click="sendMessageSlack"
          >
            отправить
            <v-icon class="ml-auto">
              mdi-send
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios"

export default {
  props: ["labelMessage"],
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
        required: value => !!value || "Поле обязательно для заполнения",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || "Недействителен e-mail."
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
        this.error = "не верно решена задача"
        return
      }
      let allValid = true

      Object.keys(this.form).forEach(f => {
        this.$refs[f].validate(true) // проверка на валидность полей
        if (!this.$refs[f].valid) allValid = false
      })
      if (!allValid) return
      this.isloading = true
      const message = `label: ${this.labelMessage}, \n name: ${this.form.name},\n email: ${
        this.form.email
      }, \n date: ${new Date().toGMTString()} \n message: ${this.form.message}`
      axios
        .post(
          `https://hooks.slack.com/services/${process.env.NUXT_ENV_SLACK_WEBHOOK}`,
          `{"text":"${message}"}`
        )
        .then(response => {
          this.message = "Сообщение отправленно"
          setTimeout(() => {
            this.message = null
          }, 3000)
          this.isloading = false
          this.setRandomNumber()
          this.amountNumber = null
          this.$emit("sendMessage")
        })
        .catch(er => {
          this.setRandomNumber()
          this.amountNumber = null
          this.error = er
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

<style lang="stylus" scoped>
.wrap
   width 50px
</style>
