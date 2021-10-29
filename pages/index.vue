<template>
  <div>
    <div>
      <Navbar ref="TheNavbar" />
    </div>
    <div class="firstContainer bg-black h-screen w-screen">
      <div
        class="
          w-full
          h-full
          flex
          items-start
          flex-col
          justify-center
          align-center
        "
      >
        <div
          class="text-5xl text-white p-5"
          @mouseover="colorChange"
          @mouseleave="colorReset"
        >
          <h1 class="titles">Your Skin is Your Canvas</h1>
        </div>
        <div ref="blackBackground" class="text-white text-6xl p-8">
          <h1 class="titles">Only You have , your tattoos</h1>
        </div>
      </div>



      <div>
          <ImageContiner /> 
      </div>



    </div>
  </div>
</template>

<script>
import Navbar from '../layout/TheNavbar.vue'
import ImageContiner from '~/components/imageContainer.vue'

export default {
  name: 'App',
  components: { Navbar , ImageContiner },
  methods: {
    colorChange() {
      const gsap = this.$gsap

      gsap.to('.firstContainer', {
        backgroundColor: 'white',
        ease: 'power2.out',
      })
      gsap.to('.titles', {
        color: 'black',
        ease: 'power2.out',
      })

      this.$refs.TheNavbar.menuColorBlack()
    },
    colorReset() {
      const gsap = this.$gsap

      gsap.to('.firstContainer', {
        backgroundColor: 'black',
        ease: 'power2.out',
      })
        gsap.to('.titles', {
        color: 'white',
        ease: 'power2.out',
      })
       this.$refs.TheNavbar.menuColorWhite()
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap');


.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}

.titles{
  font-family: 'Miltonian Tattoo', cursive;
}
</style>
