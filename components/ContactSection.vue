<template>
    <section class="contact">
        <v-img height="550" src="/contactBG.jpeg" class="pt-12">
            <v-container>
                <h1 class="contact__title">Contact us</h1>
                <v-row justify="center">
                    <v-col cols="11" >
                        <v-row >
                            <v-col sm="6" cols="12">
                                <v-text-field
                                    label="Your name"
                                    prepend-inner-icon="mdi-account"
                                    solo
                                    background-color="#fff"
                                    autocomplete="off"
                                ></v-text-field>
                            </v-col>
                            <v-col sm="6" cols="12">
                                <v-text-field
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
                            solo
                            prepend-inner-icon="mdi-comment"
                            label="Your message"
                            no-resize
                            rows="4"
                        ></v-textarea>
                    </v-col>
                    <v-col cols="11" align="end">
                        <v-btn x-large color="warning" width="170">
                            submit
                            <v-icon class="ml-auto">mdi-send</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </section>
</template>

<style lang="stylus" scoped>
.contact
    width 100%
    margin-top -70px
    text-align center
    &__title 
        font-size 55px
        color white
</style>