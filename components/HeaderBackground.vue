<template>
  <section class="img-bg">
    <v-img height="650" src="/header-bg.jpg">
      <div class="img-bg__slogan slogan white--text">
        // eslint-disable-next-line to ignore the next line.
        <h1 class="slogan__big">{{ $t("slogan") }}</h1>
        <h4 class="slogan__small">
          {{ $t("subSlogan") }}
        </h4>
      </div>
    </v-img>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {}
}
</script>

<style lang="stylus" scoped>
.img-bg
    width 100%
    margin-top -80px
    position relative

    .slogan
        top: 50%;
        left 0;
        margin 0 40px;
        transform: translate(0, -50%);
        position absolute
        font-weight 700
        text-transform uppercase

        &__big
            font-size 86px
            line-height 100px
            @media screen and (max-width: 600px)
                font-size 54px
                line-height 60px

        &__small
            font-size 36px
            @media screen and (max-width: 600px)
                font-size 33px
</style>
