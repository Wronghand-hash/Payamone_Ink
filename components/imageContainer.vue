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
      img: '/genesha.png',
      img2: '/muretos.png',
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