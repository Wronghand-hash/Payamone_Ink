<template >
  <div class="container w-full h-auto justify-center flex">
    <img
      v-show="selectedImg"
      class="img w-full object-contain"
      :src="img"
      alt=""
    />
    <img
      v-show="!selectedImg"
      class="img w-full object-contain"
      :src="img2"
      alt=""
    />
  </div>
</template>


<script>
export default {
  data() {
    return {
      img: '/bull.svg',
      img2: '/genesha.svg',
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

<style scoped>
.img {
  transition: all 200ms ease-out;
}
</style>