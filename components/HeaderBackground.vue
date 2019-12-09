<template>
    <section class="img-bg">
        <v-img src="/background2.JPG">
            <h2 ref="headerTitle" class="img-bg__title white--text"></h2>
        </v-img>
       
    </section>
</template>
<script>
import { TxtType } from"../plugins/utilities.js"

export default {
    data() {
        return {
            titleForAnimation: ['Dev Team Club', 'Code', 'Learn', 'Enjoy'],
        }
  },
    mounted() {
       console.log(new TxtType(this.$refs.headerTitle, this.titleForAnimation));
    }
}
</script>
<style lang="stylus" scoped>
.img-bg
    width 100%
    margin-top -70px
    text-align center

    &__title 
        margin-top 150px
        margin-bottom 50px

</style>