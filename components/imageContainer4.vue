<template >
  <div class="w-full h-full flex justify-center">
    <img v-show="selectedImg" class="w-full" :src="img" alt="" />
    <img v-show="!selectedImg" :src="img2" alt="" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      img: '/sunAndMoon.png',
      img2: '/comanche.png',
      selectedImg: true,
    }
  },

  methods: {
    togImg() {
      this.selectedImg = !this.selectedImg
    },
  },
}
</script>