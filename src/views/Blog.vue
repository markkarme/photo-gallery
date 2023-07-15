<template>
  <v-app class="no-scroll-style">
    <v-row>
      <v-col cols="4" class="hidden-sm-and-down">
      <LeftSlideBar :blog="true" /></v-col>
      <v-col class="my-bg-color">
        <v-row class="d-flex justify-end">
          <v-sheet
            class="bg-grey-darken-3 d-flex justify-center align-center my-searh-sheet"
            width="111"
            height="91"
            ><v-icon size="50">mdi-magnify</v-icon></v-sheet
          >
        </v-row>
        <v-row>
          <v-col cols="11" class="pl-16 scrollable-sheet">
            <v-sheet
              class="scrollable-sheet text-start"
              height="630"
              color="#f7f9fb"
            >
             <BlogCard :imgurl="imgLs[elemnt]" v-for="(i,elemnt) in 3" :key="elemnt"/> 
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>
    <script>
import LeftSlideBar from "../components/LeftSlideBar.vue";
import BlogCard from "../components/BlogCard.vue";

export default {
  components: { LeftSlideBar,BlogCard },
  name: "aboutView",
  data() {
    return {
      rightIndecatior: 0,
      leftIndecatior: 0,
      indecator: 0,
      imgLs: [
        "https://preview.colorlib.com/theme/photogallery/img/gallery/2.jpg",
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
        this.leftIndecatior = this.rightIndecatior;
        this.indecator = this.rightIndecatior;
        console.log("full");
        console.log(this.rightIndecatior);
      } else {
        this.rightIndecatior += 1;
        console.log(this.rightIndecatior);
        this.indecator = this.rightIndecatior;
        this.leftIndecatior = this.rightIndecatior;
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
    },
  },
};
</script>
    
  <style scoped >
.no-scroll-style {
  overflow: hidden;
}
.scrollable-sheet {
  scroll-behavior: smooth;
  overflow-y: auto;
}
.scrollable-sheet::-webkit-scrollbar {
  width: 0rem;
  background-color: #f5f5f5;
}

.scrollable-sheet::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 0.25rem;
}

.scrollable-sheet:hover::-webkit-scrollbar-thumb {
  background-color: #555;
}
.scrollable-sheet:hover::-webkit-scrollbar {
  width: 0.5rem;
}
.next-sheet {
  cursor: pointer;
}
.my-bg-color {
  background-color: #f7f9fb;
}
</style>