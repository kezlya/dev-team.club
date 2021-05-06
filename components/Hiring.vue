<template>
  <section id="job" class="hiring">
    <v-container>
      <v-row>
        <v-col class="text-left mr-auto" cols="12" md="6" lg="5">
          <!-- eslint-disable-next-line -->
          <h2 class="hiring__title mb-0">We’re \n Hiring</h2>
          <p class="hiring__subtitle">
            At the moment, our team requires the following specialists:
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

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
</style>
