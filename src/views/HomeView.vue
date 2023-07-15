<template>
  <v-app>
    <div>
      <v-row no-gutters class="flex-nowrap hidden-sm-and-down">
        <v-col cols="4" class="hidden-sm-and-down">
          <LeftSlideBar :home="true" />
        </v-col>

        <transition name="slow-fade" mode="out-in">
          <v-col
            :key="nextImgIndecator + 1"
            cols="1"
            style="min-width: 100px; max-width: 100%; height: 721px"
            class="flex-grow-1 flex-shrink-0 bg-img"
            :style="{ backgroundImage: `url(${imgLs[nextImgIndecator]})` }"
          >
            <v-row >
              <v-col class="ignor-padding">
                <v-row>
                  <v-col cols="12">
                    <v-sheet
                      class="mt-16 text-start pt-4"
                      width="400"
                      style="padding: 90px 50px 100px 0"
                    >
                      <p class="text-grey text-caption mt-16">PHOTOGRAPHY</p>
                      <p class="text-black text-h3">
                        <span>Project No.</span>
                        <transition name="slow-fade" mode="out-in">
                          <span :key="nextImgIndecator + 1">{{
                            nextImgIndecator + 1
                          }}</span>
                        </transition>
                      </p>
                      <p class="pt-4 text-grey">
                        Ut pellentesque auctor lorem, at maximus lacus faucibus
                        nec. Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Mauris auctor nunc non nulla euismod
                        consequat. Pellentesque non mattis nulla. Fusce quis
                        tempor risus, non elemen tum dui. Curabitur et mattis
                        ex, a ultrices.
                      </p>
                      <v-btn class="mt-4 mb-16" variant="outlined">
                        read more
                        <v-icon size="30">mdi-arrow-right-thin</v-icon>
                      </v-btn>
                    </v-sheet>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-center align-center">
                    <v-sheet height="19px"></v-sheet>
                  </v-col>
                  <v-col cols="12" class="ignor-padding">
                    <v-sheet
                      class="bg-white-darken-3 pt-6"
                      width="111"
                      height="88"
                      ><v-icon size="60">mdi-arrow-right-thin</v-icon></v-sheet
                    >
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="ignor-padding">
                <v-row>
                  <v-col
                    class="d-flex justify-end align-center ignor-padding mt-4 mr-16"
                    cols="12"
                  >
                    <v-sheet
                      class="bg-grey-darken-3 d-flex justify-center align-center"
                      width="111"
                      height="91"
                      ><v-icon size="50">mdi-magnify</v-icon></v-sheet
                    >
                  </v-col>
                  <v-col
                    cols="12"
                    class="d-flex justify-center align-center ignor-padding"
                  >
                    <v-sheet height="120px"></v-sheet>
                  </v-col>
                  <v-col
                    cols="12"
                    class="d-flex justify-end align-end ignor-padding"
                  >
                    <v-sheet
                      class="text-start pa-2 mr-16"
                      height="191"
                      width="191"
                    >
                      <transition name="slow-fade" mode="out-in">
                        <v-img
                          :key="imgLs[nextImgIndecator]"
                          class="bg-white my-img text-center align-end transition-fast-in-fast-out"
                          height="300"
                          width="300"
                          :aspect-ratio="1"
                          :src="imgLs[nextImgIndecator]"
                          cover
                        >
                        </v-img>
                      </transition>
                      <v-btn
                        height="52"
                        width="95"
                        style="
                          position: absolute;
                          left: calc(95% - 30px);
                          top: calc(50% - 80px);
                        "
                        @click="nextImg"
                      >
                        <div class="mt-4">
                          <p>next</p>
                          <v-icon>mdi-arrow-right-thin</v-icon>
                        </div>
                      </v-btn>
                    </v-sheet>
                  </v-col>
                  <v-col
                    cols="12"
                    class="d-flex justify-center align-center ignor-padding"
                  >
                    <v-sheet height="207px"></v-sheet>
                  </v-col>
                  <v-col
                    class="d-flex justify-end align-end ignor-padding mt-4 mr-16"
                    cols="12"
                  >
                    <v-sheet
                      class="text-center pt-4 mt-4 mr-4"
                      width="111"
                      height="88"
                    >
                      <p>
                        <span class="text-h3 text-black">03</span
                        ><span>/03</span>
                      </p>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </transition>
      </v-row>
    </div>
    <div
      :key="nextImgIndecator + 1"
      cols="1"
      style="min-width: 100px; max-width: 100%"
      class="flex-grow-1 flex-shrink-0 bg-img hidden-sm-and-up"
      :style="{ backgroundImage: `url(${imgLs[nextImgIndecator]})` }"
    >
      <v-row class="d-flex justify-end">
        <v-sheet class="bg-white-darken-3 pt-6" width="111" height="88"
          ><v-icon size="60">mdi-arrow-right-thin</v-icon></v-sheet
        >
        <v-sheet class="bg-white-3 pt-6" width="111" height="88">
          <v-icon size="60">mdi-arrow-right-thin</v-icon></v-sheet
        >
      </v-row>
      <v-sheet
        class="mt-4 text-center pt-4 ml-10"
        width="400"
        style="padding: 90px 50px 100px 0"
      >
        <p class="text-grey text-caption mt-16">PHOTOGRAPHY</p>
        <p class="text-black text-h3">
          <span>Project No.</span>
          <transition name="slow-fade" mode="out-in">
            <span :key="nextImgIndecator + 1">{{ nextImgIndecator + 1 }}</span>
          </transition>
        </p>
        <p class="pt-4 text-grey">
          Ut pellentesque auctor lorem, at maximus lacus faucibus nec. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor
          nunc non nulla euismod consequat. Pellentesque non mattis nulla. Fusce
          quis tempor risus, non elemen tum dui. Curabitur et mattis ex, a
          ultrices.
        </p>
        <v-btn class="mt-4 mb-4" variant="outlined">
          read more
          <v-icon size="30">mdi-arrow-right-thin</v-icon>
        </v-btn>
      </v-sheet>
      <v-row class="d-flex mt-4 justify-end align-end">
        <v-sheet class="bg-white-3" width="111" height="50">
          <v-icon size="60">mdi-arrow-left-thin</v-icon></v-sheet
        >
        <v-sheet class="bg-white-3 me-auto" width="111" height="50">
          <v-icon size="60">mdi-arrow-right-thin</v-icon></v-sheet
        >
        <v-sheet class="text-center pt-4 mt-4" width="111" height="88">
          <p><span class="text-h3 text-black">03</span><span>/03</span></p>
        </v-sheet>
      </v-row>
    </div>
  </v-app>
</template>
  
<script>
import LeftSlideBar from "./../components/LeftSlideBar.vue";
// @ is an alias to /src
var imgLogo = require("@/assets/logo.png");
var imgLogo2 = require("@/assets/logo2.png");
export default {
  name: "HomeView",
  components: { LeftSlideBar },
  data() {
    return {
      imgLogo,
      imgLogo2,
      nextImgIndecator: 0,
      imgLs: [
        "https://c4.wallpaperflare.com/wallpaper/440/12/60/nature-hd-for-pc-download-1920x1080-wallpaper-preview.jpg",
        "https://4kwallpapers.com/images/walls/thumbs_3t/11903.jpg",
      ],
    };
  },
  mounted() {},
  methods: {
    addLine() {
      const text = document.querySelector(".clickable-text");
      text.classList.add("clicked");
    },
    nextImg() {
      if (this.imgLs.length == this.nextImgIndecator + 1) {
        this.nextImgIndecator = 0;
        console.log("full");
        console.log(this.nextImgIndecator);
      } else {
        this.nextImgIndecator += 1;
        console.log(this.nextImgIndecator);
      }
    },
  },
};
</script>
  
  <style scoped>
.bg-img {
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-img::-webkit-scrollbar {
  width: 0rem;
  background-color: #f5f5f5;
}

.my-img {
  -webkit-transition: all 3s ease;
  transition: all 3s ease;
}

.slow-fade-enter-active,
.slow-fade-leave-active {
  transition: opacity 2s;
}
.slow-fade-enter,
.slow-fade-leave-to {
  opacity: 0;
}
.ignor-padding {
  padding: 0px !important;
}
</style>
  