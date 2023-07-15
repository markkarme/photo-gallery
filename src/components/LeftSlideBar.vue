<template>
  
    <v-sheet class="scrollable-sheet h-screen slide-bar-style" width="368">
      <v-col class="text-start">
        <v-img :src="imgLogo" height="200" width="200"></v-img>

        <v-img
          :src="imgLogo2"
          height="30"
          width="80"
          class="d-flex justify-end align-end"
        ></v-img>
        <div class="font-weight-bold text-subtitle-2">
          <p class="ml-7 mt-5 clickable-text" @click="this.$router.push({ name: 'HomeView' })">HOME</p>
          <hr class="underline" v-show="home" style="width: 70px;"/>
          <p class="ml-7 mt-5 clickable-text" @click="this.$router.push({ name: 'GelleryView' })">GALLERY</p>
          <hr class="underline" v-show="gallery" style="width: 95px;" />
          <p class="ml-7 mt-5 clickable-text" @click="this.$router.push({ name: 'singleGalleryView' })">SINGLE GALLERY</p>
          <hr class="underline clickable-text" style="width: 150px;" v-show="singleGallery" />
          <p class="ml-7 mt-5 clickable-text" @click="this.$router.push({ name: 'blogView' })">BLOG</p>
          <hr class="underline" style="width: 70px;" v-show="blog" />
          <p class="ml-7 mt-5 clickable-text" @click="this.$router.push({ name: 'contactView' })">CONTACT</p>
          <hr class="underline" style="width: 95px;" v-show="contact" />
        </div>
      </v-col>
    </v-sheet>

</template>

<script>
var imgLogo = require("@/assets/logo.png");
var imgLogo2 = require("@/assets/logo2.png");
export default {
  props: {
    home: {
      type: Boolean,
      required: false,
      value: false,
    },
    gallery: {
      type: Boolean,
      required: false,
      value: false,
    },
    singleGallery: {
      type: Boolean,
      required: false,
      value: false,
    },
    blog: {
      type: Boolean,
      required: false,
      value: false,
    },
    contact: {
      type: Boolean,
      required: false,
      value: false,
    },
  },
  data() {
    return {
      imgLogo,
      imgLogo2,
      showHome: false,
      showGallery: false,
    };
  },
};
</script>
<style  scoped>

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
.slide-bar-style{
    
    position: fixed;
}
.clickable-text {
  cursor: pointer;
  text-decoration: none;
}
hr.underline {
  
  border-top: 3px solid black;
}
</style>