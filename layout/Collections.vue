<template>
  <div class="firstContainer h-screen w-screen bg-Lime-500 overflow-hidden">
    <div>
      <TheNavbar />
    </div>
    <div
      class="
        flex flex-col
        justify-evenly
        content-center
        flex-wrap
        w-full
        h-full
      "
    >
      <div class="flex flex-col align-center justify-center">
        <h1 class="kisTattoo text-2xl">Kis kis Tattoo Collection</h1>
      </div>
      <div class="w-80 h-96 bg-goldie rounded-2xl shadow-2xl container">
        <img class="h-full" src="/slowdying.jpg" alt="" />
        <div class="absolute bottom-0 tapForInfo"><p>tap for info</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '~/layout/TheNavbar.vue'

export default {
  components: { TheNavbar },
}
</script>

<style scoped>
.kisTattoo {
  font-family: 'Miltonian', cursive;
}
</style>