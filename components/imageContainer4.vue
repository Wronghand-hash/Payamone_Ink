<template >
  <div class="w-full h-full flex justify-center">
    <img v-show="selectedImg" class="w-full object-contain" :src="img" alt="" />
    <img v-show="!selectedImg" class="object-contain" :src="img2" alt="" />
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