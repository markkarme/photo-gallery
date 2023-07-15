<template>
  <v-app>
    <v-row>
      <v-col cols="3" class="hidden-sm-and-down">
      <LeftSlideBar :singleGallery="true" /></v-col>
      <v-col>
        <v-row class="d-flex justify-end">
          <v-sheet
            class="bg-grey-darken-3 d-flex justify-center align-center my-searh-sheet"
            width="111"
            height="91"
            ><v-icon size="50">mdi-magnify</v-icon></v-sheet
          >
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" lg="6" md="6" xl="6" xxl="6" class="pa-10">
            <v-img
            height="500"
              class="bg-white my-img text-center align-end transition-fast-in-fast-out"
              :aspect-ratio="1"
              :src="imgLs[indecator]"
              cover
            >
              <v-row class="d-flex justify-center align-center mb-1">
                <v-sheet
                  class="d-flex justify-center align-end next-sheet"
                  width="111"
                  height="50"
                  @click="previousImg"
                  
                  ><v-icon size="50">mdi-arrow-left-thin</v-icon></v-sheet
                >
                <v-sheet
                  width="111"
                  height="50"
                  class="bg-grey-darken-3 d-flex justify-center align-center next-sheet"
                  @click="nextImg"
                >
                  <v-icon size="50">mdi-arrow-right-thin</v-icon></v-sheet
                >
              </v-row>
            </v-img>
          </v-col>
          <v-col class="ml-6">
            <v-sheet >
                <div class="text-start mt-16">
                    <p class="text-grey">PHOTOGRAPHY</p>
                    <p class="text-h3" >Puppy Eyes</p>
                    <v-row class="mt-4 mb-4">
                        <v-col cols="3">
                            <p class="font-weight-bold ">Client:</p>
                            <p class="font-weight-bold mt-4">Date:</p>
                            <p class="font-weight-bold mt-4">Categorie:</p>
                            <p class="font-weight-bold mt-4">Tags:</p>
                        </v-col>
                        <v-col >
                            <p>Company Name</p>
                            <p class="mt-4">August 25, 2018</p>
                            <p class="mt-4">Animal Photography</p>
                            <p class="mt-4">animals, dogs, photography</p>
                        </v-col>
                    </v-row>
                    <p>Ut pellentesque auctor lorem, at maximus lacus faucibus nec. Interdum et malesua-da fames 
                        ac ante ipsum primis in faucibus. Mauris auctor nunc non nulla euismod consequat. Pellentesque non mattis nulla. 
                        Fusce quis tempor risus, non elemen tum dui. Curabitur et mattis ex, a ultrices. Ut pellentesque auctor lorem,
                         at maximus lacus faucibus nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris auctor nunc 
                         non nulla euismod consequat. 
                        Pellentesque non mattis nulla. Fusce quis tempor risus, non elemen tum dui. Curabitur et mattis ex, a ultrices.
                    </p>
                    <p class="mt-4"> 
                        Ut pellentesque auctor lorem, at maximus lacus faucibus nec. Interdum et malesua-da fames ac ante ipsum primis in faucibus. 
                        Mauris auctor nunc non nulla euismod consequat. Pellentesque non mattis nulla.
                         Fusce quis tempor risus, non elemen tum dui. Curabitur et mattis ex, a ultrices.
                    </p>
                </div>
            </v-sheet>
          </v-col>
        </v-row>
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
      rightIndecatior: 0,
      leftIndecatior: 0,
      indecator:0,
      imgLs: [
        "https://preview.colorlib.com/theme/photogallery/img/gallery-single/1.jpg",
        "https://preview.colorlib.com/theme/photogallery/img/gallery-single/2.jpg",
        "https://preview.colorlib.com/theme/photogallery/img/gallery/6.jpg",
      ],
    };
  },
  methods: {
    nextImg() {
        console.log(this.rightIndecatior);
        console.log(this.leftIndecatior);
      if (this.imgLs.length == this.rightIndecatior + 1) {
        this.rightIndecatior = 0;
        this.leftIndecatior =this.rightIndecatior;
        this.indecator = this.rightIndecatior;
        console.log("full");
        console.log(this.rightIndecatior);
      } else {
        this.rightIndecatior += 1;
        console.log(this.rightIndecatior);
        this.indecator = this.rightIndecatior;
        this.leftIndecatior =this.rightIndecatior;
      }
    },
    previousImg() {
        console.log(this.leftIndecatior);
      if (this.leftIndecatior == 0) {
        this.leftIndecatior = this.imgLs.length - 1;
        console.log("full");
        this.indecator = this.leftIndecatior;
        console.log(this.leftIndecatior);
      } else {
        this.leftIndecatior -= 1;
        this.indecator = this.leftIndecatior;
        console.log(this.leftIndecatior);
      }
    }
  },
};
</script>
  
<style scoped >
.next-sheet {
  cursor: pointer;
}
</style>