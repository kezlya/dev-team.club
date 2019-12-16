<template>
    <section class="img-bg">
        <v-img height="600" src="/background2.JPG">
            <h2 ref="headerTitle" class="img-bg__title white--text"></h2>
        </v-img>
       
    </section>
</template>

<script>
import { TxtType } from"../plugins/txt_type.js"

export default {
    data() {
        return {
            titleForAnimation: ['Команда разработчиков', 'Кодируй', 'Учись', 'Наслаждайся'],
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
    position relative

    &__title 
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        position absolute

</style>