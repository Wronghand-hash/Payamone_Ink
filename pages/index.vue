<template>
  <div class="w-full h-screen overflow-x-hidden">
    <div>
      <Navbar ref="TheNavbar" />
    </div>
    <div
      class="
        firstContainer
        bg-black
        grid grid-cols-3 grid-rows-2
        h-screen
        w-screen
      "
    >
      <div class="container">
        <ImageContainer2
          ref="ImageContainer2"
          class="ImageContainer2 opacity-0"
        />
      </div>

      <div
        class="
          w-full
          h-full
          flex
          items-start
          flex-col
          justify-center
          align-center
          row-span-2
        "
      >
        <div class="theHeaderDiv rounded absolute p-5 m-3 top-10 border-2 border-Rose-600">
          <h1 class="theHeader text-white text-7xl self-center">
            Payamone Ink
          </h1>
        </div>

        <div class="purpleContainer rounded-xl p-10">
          <div class="text-white text-5xl p-5">
            <h1
              class="titles"
              @mouseover="colorChange"
              @mouseleave="colorReset"
            >
              Your Skin is Your Canvas
            </h1>
          </div>
          <div ref="blackBackground" class="text-white text-5xl p-8">
            <h1 class="titles">
              <p @mouseover="colorChange2" @mouseleave="colorReset">
                Only You have
              </p>
              ,
              <p @mouseover="colorChange3" @mouseleave="colorReset">
                your tattoos
              </p>
            </h1>
          </div>
        </div>
      </div>

      <div class="">
        <ImageContainer4
          ref="ImageContainer4"
          class="ImageContainer4 opacity-0"
        />
      </div>

      <div class="">
        <ImageContainer3
          ref="ImageContainer3"
          class="ImageContainer3 opacity-0"
        />
      </div>

      <div class="w-full h-full">
        <ImageContiner ref="ImageContainer" class="ImageContainer opacity-0" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../layout/TheNavbar.vue'
import ImageContiner from '~/components/imageContainer.vue'
import ImageContainer2 from '~/components/imageContainer2.vue'
import ImageContainer3 from '~/components/imageContainer3.vue'
import ImageContainer4 from '~/components/imageContainer4.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ImageContiner,
    ImageContainer2,
    ImageContainer3,
    ImageContainer4,
  },
  methods: {
    colorChange() {
      const gsap = this.$gsap

      gsap.to('.firstContainer', 0.5, {
        backgroundColor: '#ffcaaf',
        ease: 'power2.out',
      })
      gsap.to('.purpleContainer', 0.5, {
        backgroundColor: '#000000',
        ease: 'power2.out',
      })
      gsap.to('.titles', 0.5, {
        color: '#610094',
        ease: 'power2.out',
      })
      gsap.to('.theHeaderDiv', 0.5, {
        backgroundColor: '#000000',
        ease: 'power2.out',
      })
      gsap.to('.ImageContainer', 0.5, {
        opacity: 1,
      })
      gsap.to('.ImageContainer4', 0.5, {
        opacity: 1,
      })
      gsap.to('.ImageContainer2', 0.5, {
        opacity: 1,
      })
      gsap.to('.ImageContainer3', 0.5, {
        opacity: 1,
      })
      this.$refs.ImageContainer.togImg()
      this.$refs.ImageContainer2.togImg()
      this.$refs.ImageContainer3.togImg()
      this.$refs.ImageContainer4.togImg()
      this.$refs.TheNavbar.menuColorBlack()
    },
    colorChange2() {
      const gsap = this.$gsap

      gsap.to('.firstContainer', {
        backgroundColor: '#f1ffc4',
        ease: 'power2.out',
      })
      gsap.to('.purpleContainer', 0.5, {
        backgroundColor: '#B24080',
        borderColor: 'white',
        ease: 'power2.out',
      })
      gsap.to('.titles', {
        color: '#FFF9B2',
        ease: 'power2.out',
      })
       gsap.to('.theHeaderDiv', 0.5, {
        backgroundColor: '#B24080',
        ease: 'power2.out',
      })
      gsap.to('.ImageContainer', {
        opacity: 1,
      })
      gsap.to('.ImageContainer4', {
        opacity: 1,
      })
      gsap.to('.ImageContainer2', {
        opacity: 1,
      })
      gsap.to('.ImageContainer3', {
        opacity: 1,
      })

      this.$refs.ImageContainer.togImg()
      this.$refs.ImageContainer2.togImg()
      this.$refs.ImageContainer3.togImg()
      this.$refs.ImageContainer4.togImg()
      this.$refs.TheNavbar.menuColorBlack()
    },
    colorChange3() {
      const gsap = this.$gsap

      gsap.to('.firstContainer', {
        backgroundColor: '#dab894',
        ease: 'power2.out',
      })
      gsap.to('.purpleContainer', 0.5, {
        backgroundColor: '#082032',
        ease: 'power2.out',
      })
      gsap.to('.titles', {
        color: '#F0A500',
        ease: 'power2.out',
      })
       gsap.to('.theHeaderDiv', 0.5, {
        backgroundColor: '#082032',
        ease: 'power2.out',
      })
      gsap.to('.ImageContainer', {
        opacity: 1,
      })
      gsap.to('.ImageContainer4', {
        opacity: 1,
      })
      gsap.to('.ImageContainer2', {
        opacity: 1,
      })
      gsap.to('.ImageContainer3', {
        opacity: 1,
      })

      this.$refs.ImageContainer.togImg()
      this.$refs.ImageContainer2.togImg()
      this.$refs.ImageContainer3.togImg()
      this.$refs.ImageContainer4.togImg()
      this.$refs.TheNavbar.menuColorBlack()
    },
    colorReset() {
      const gsap = this.$gsap

      gsap.to('.firstContainer', {
        backgroundColor: 'black',
        ease: 'power2.out',
      })
      gsap.to('.purpleContainer' , 0.5 , {
        backgroundColor: 'black', 
        ease: 'power2.out'
      })
      gsap.to('.titles', {
        color: 'white',
        ease: 'power2.out',
      })
      gsap.to('.ImageContainer', {
        opacity: 0,
      })
      gsap.to('.ImageContainer2', {
        opacity: 0,
      })
      gsap.to('.ImageContainer3', {
        opacity: 0,
      })
      gsap.to('.ImageContainer4', {
        opacity: 0,
      })

      this.$refs.TheNavbar.menuColorWhite()
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap');

.navbar {
  transition: all 200ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}

.titles {
  font-family: 'Miltonian Tattoo', cursive;
}

.theHeader {
  font-family: 'Miltonian Tattoo', cursive;
}
</style>
