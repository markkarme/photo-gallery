<template>
  <v-app class="no-scroll-style">
    <v-row>
      <v-col cols="4" class="hidden-sm-and-down ignor-padding">
      <LeftSlideBar :contact="true" /></v-col>
      <v-col class="my-bg-color">
        <v-row class="d-flex justify-end">
          <v-sheet
            class="bg-grey-darken-3 d-flex justify-center align-center my-searh-sheet"
            width="111"
            height="91"
            ><v-icon size="50">mdi-magnify</v-icon></v-sheet
          >
        </v-row>
        <v-row class="mt-16 flex">
          <v-col class="pl-16 text-start " >
            <p class="text-grey">SAY HELLO</p>
            <p class="text-h3">Get in touch</p>
            <v-text-field placeholder="Your name" variant="underlined"></v-text-field>
            <v-text-field placeholder="Your email" variant="underlined"></v-text-field>
            <v-text-field placeholder="subject" variant="underlined"></v-text-field>
            <v-textarea placeholder="Message" variant="underlined"></v-textarea>
            <v-btn variant="outlined" height="50" width="200" :append-icon="mdi-magnify">
                Send messege
                <v-icon size="40">mdi-arrow-right-thin</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6" sm="6">
            <v-img :src="img1"> </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import LeftSlideBar from "../components/LeftSlideBar.vue";
var img1 = require("@/assets/contact3.gif");
export default {
  components: { LeftSlideBar },
  name: "aboutView",
  data() {
    return { img1 };
  },
  methods: {},
};
</script>
      
<style scoped >
.my-bg-color {
  background-color: #f7f9fb;
}
</style>