<template>
  <div class="mt-10">
    <v-img
      height="500"
      class="bg-white my-img text-center align-start transition-fast-in-fast-out"
      :aspect-ratio="1"
      :src="imgurl"
      cover
    >
      <v-sheet
        class="d-flex justify-center align-center next-sheet pa-4"
        width="80"
        height="90"
        color="#F7F9FB"
      >
        <div>
          <p class="text-h3">10</p>
          <p class="mb-4">Dec,'18</p>
        </div>
      </v-sheet>
    </v-img>
    <p class="text-start text-h3 mt-4">The best tips & tricks</p>
    <p class="text-grey text-caption pt-4 ml-1">
      <span>BY MICHAEL SMITH</span>
      <span> | </span>
      <span>IN PHOTOGRAPHY</span>
    </p>
    <p class="text-grey mt-10">
      Ut pellentesque auctor lorem, at maximus lacus faucibus nec. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Mauris auctor nunc non
      nulla euismod consequat. Pellentesque non mattis nulla. Fusce quis tempor
      risus, non elemen tum dui. Curabitur et mattis ex, a ultrices. Ut
      pellentesque auctor lorem, at maximus lacus faucibus nec. Interdum et
      malesuada fames ac ante ipsum primis in faucibus.
    </p>
  </div>
</template>
<script>
export default {
  name: "BlogCard",
  props: {
    imgurl: {
      type: String,
      required: false,
      value: "",
    },
  },
};
</script>
<style scoped>
</style>