<template>
  <v-app>
    <v-row>
      <v-col cols="3" class="hidden-sm-and-down ignor-padding">
        <LeftSlideBar :gallery="true"
      /></v-col>
      <v-col>
        <v-sheet>
          <v-row>
            <v-col>
              <v-tabs v-model="tab" align-tabs="start" class="mt-7 ml-7">
                <v-tab :value="1">ALL</v-tab>
                <v-tab :value="2">PHOTOGRAPHY</v-tab>
                <v-tab :value="3">NATURE</v-tab>
                <v-tab :value="4">LOVE</v-tab>
                <v-tab :value="5">ANIMALS</v-tab>
              </v-tabs>
            </v-col>

            <v-col class="d-flex justify-end">
              <v-sheet
                class="bg-grey-darken-3 d-flex justify-center align-center"
                width="111"
                height="91"
                ><v-icon size="50">mdi-magnify</v-icon></v-sheet
              >
            </v-col>
          </v-row>

          <v-window v-model="tab">
            <v-window-item v-for="n in 5" :key="n" :value="n">
              <v-container fluid>
                <v-row class=" ">
                  <v-col
                    v-for="i in 16"
                    :key="i"
                    cols="12"
                    md="4"
                    class="ignor-padding  "
                  >
                    <v-hover v-slot="{ isHovering, props }">
                      <v-img
                        class=""
                        v-bind="props"
                        :src="`https://picsum.photos/500/300?image=${
                          i * n * 5 + 10
                        }`"
                      >
                        <transition name="fade-slide" appear>
                          <div
                            v-if="isHovering"
                            class="d-flex transition-fast-in-fast-out bg-grey-darken-3 align-center justify-center text-h2"
                            style="height: 100%"
                          >
                            <v-btn variant="outlined"
                              >NEXT
                              <v-icon size="20"
                                >mdi-arrow-right-thin</v-icon
                              ></v-btn
                            >
                          </div>
                        </transition>
                      </v-img>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
          </v-window>
        </v-sheet>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import LeftSlideBar from "../components/LeftSlideBar.vue";

export default {
  components: { LeftSlideBar },
  name: "aboutView",
  computed: { LeftSlideBar },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style scoped>
.ignor-padding {
  padding: 0px !important;
}
.my-searh-sheet {
  display: block;
  position: fixed;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 2s ease, transform 1s ease-in-out;
  transform: translateY(0px);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>