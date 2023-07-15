<template>
  <div>
    <v-btn @click="changeText">
      click
    </v-btn>
    <transition name="slow-fade" mode="out-in">
        <span :key="ls[i]">
          {{ ls[i] }}
        </span>
      </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ls: ['image1.jpg', 'image2.jpg', 'imaadsadsadsw22ge2.jpg', 'imagedsa2.jpg', 'imadasadsadsge2.jpg', 'imagdasadssadadse2.jpg'],
      i:0,
      buttonText: 'Click me',
    };
  },
  methods: {
    changeText() {
      this.i +=1;
      this.buttonText = this.buttonText === 'Click me' ? 'Clicked!' : 'Click me';
    },
  },
};
</script>

<style scoped>
.slow-fade-enter-active,
.slow-fade-leave-active {
  transition: opacity .5s;
}
.slow-fade-enter,
.slow-fade-leave-to {
  opacity: 0;
}
</style>