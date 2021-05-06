<template>
  <section class="header-background">
    <v-img height="650" src="/header-bg.jpg">
      <div class="title-wrap">
        <h1 ref="headerTitle" class="section-title" />
      </div>
    </v-img>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sloganWords: ["Dev-Team Club", "Code", "Learn", "Enjoy"],
      text: "",
      isDeleting: false,
      loopIndex: 0
    }
  },
  mounted() {
    this.sloganAnimate()
  },
  methods: {
    sloganAnimate() {
      const typingSpeed = 200
      let word = this.sloganWords[this.loopIndex]
      let interval = typingSpeed
      const deletingSpeed = typingSpeed / 2
      const showingWordTimeout = 2000
      const typingNewWordTimeout = 500
      if (this.isDeleting) {
        this.text = word.substring(0, this.text.length - 1)
        interval = deletingSpeed
      } else {
        this.text = word.substring(0, this.text.length + 1)
      }

      this.$refs.headerTitle.innerText = this.text

      if (!this.isDeleting && this.text === word) {
        interval = showingWordTimeout
        this.isDeleting = true
      } else if (this.isDeleting && this.text === "") {
        this.isDeleting = false
        this.loopIndex =
          this.loopIndex + 1 >= this.sloganWords.length ? 0 : this.loopIndex + 1
        interval = typingNewWordTimeout
      }

      setTimeout(() => {
        this.sloganAnimate()
      }, interval)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-background
    width 100%
    margin-top -80px
    position relative

    .title-wrap
        top: 50%;
        left 0;
        width: 100%
        text-align center
        transform: translate(0, -50%);
        position absolute
        font-weight 700
        text-transform uppercase
        color: white

        .section-title
            font-size 86px
            line-height 100px
            @media screen and (max-width: 600px)
                font-size 54px
                line-height 60px
</style>
