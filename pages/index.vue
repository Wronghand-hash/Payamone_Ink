<template>
  <div class="firstContianer bg-black h-screen overflow-hidden">
    <div>
      <Navbar ref="TheNavbar" />
    </div>

    <div class="h-screen grid gap-0 grid-cols-2 grid-rows-3">
      <div class="ImageContainer flex justify-center">
        <ImageContainer ref="ImageContainer"  />
      </div>

      <div class="ImageContainer2 flex justify-center">
        <ImageContainer2 ref="ImageContainer2" />
      </div>

      <div
        class="
          theHeader
          flex
          justify-center
          items-center
          flex-col
          col-span-2
          payamoneInk
        "
      >
        <h1 class="text-5xl text-white">Paymaone Ink</h1>
        <p class="text-white transform translate-y-5" @click="togImgs">Tap here !!</p>
      </div>

      <div class="ImageContainer3 flex justify-center">
        <ImageContainer3 ref="ImageContainer3" />
      </div>

      <div class="ImageContainer4 flex flex-col items-center justify-center">
        <ImageContainer4 ref="ImageContainer4" />
      </div>
    </div>
  </div>

  <!-- <div
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
        <div
          class="
            theHeaderDiv
            rounded
            absolute
            p-5
            m-3
            top-10
            border-2 border-Rose-600
          "
        >
          <h1 class="theHeader text-white text-7xl self-center">
            Payamone Ink
          </h1>
        </div>

        <div class="purpleContainer rounded-xl p-10">
          <div class="text-white text-5xl p-5">
            <h1
              class="titles cursor-pointer"
              @mouseover="colorChange"
              @mouseleave="colorReset"
              @click="giggle"
            >
              Your Skin is Your Canvas
            </h1>
          </div>
          <div ref="blackBackground" class="text-white text-5xl p-8">
            <h1 class="titles cursor-pointer">
              <p @mouseover="colorChange2" @mouseleave="colorReset" @click="giggle">
                Only You have
              </p>
              ,
              <p @mouseover="colorChange3" @mouseleave="colorReset" @click="giggle">
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
    </div> -->
</template>

<script>
import Navbar from '../layout/TheNavbar.vue'
import ImageContainer from '~/components/imageContainer.vue'
import ImageContainer2 from '~/components/imageContainer2.vue'
import ImageContainer3 from '~/components/imageContainer3.vue'
import ImageContainer4 from '~/components/imageContainer4.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ImageContainer,
    ImageContainer2,
    ImageContainer3,
    ImageContainer4,
  },
  mounted() {
    this.ContainerAnimation()
  },
  methods: {
    togImgs(){
      this.$refs.ImageContainer.togImg()
      this.$refs.ImageContainer2.togImg()
      this.$refs.ImageContainer3.togImg()
      this.$refs.ImageContainer4.togImg()
    },
    ContainerAnimation() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.fromTo(
        '.ImageContainer',
        1,
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4
        }
      )
      tl.fromTo(
        '.ImageContainer2',
        1,
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
         repeatDelay: 4
        }
      )
      tl.fromTo(
        '.ImageContainer3',
        1,
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4
        }
      )
      tl.fromTo(
        '.ImageContainer4',
        1,
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4
        }
      )
    },
    // colorChange() {
    //   const gsap = this.$gsap

    //   gsap.to('.firstContainer', 0.5, {
    //     backgroundColor: '#ffcaaf',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.purpleContainer', 0.5, {
    //     backgroundColor: '#000000',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.titles', 0.5, {
    //     color: '#610094',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.theHeaderDiv', 0.5, {
    //     backgroundColor: '#000000',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.ImageContainer', 0.5, {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer4', 0.5, {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer2', 0.5, {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer3', 0.5, {
    //     opacity: 1,
    //   })
    //   this.$refs.ImageContainer.togImg()
    //   this.$refs.ImageContainer2.togImg()
    //   this.$refs.ImageContainer3.togImg()
    //   this.$refs.ImageContainer4.togImg()
    //   this.$refs.TheNavbar.menuColorBlack()
    // },
    // colorChange2() {
    //   const gsap = this.$gsap

    //   gsap.to('.firstContainer', {
    //     backgroundColor: '#f1ffc4',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.purpleContainer', 0.5, {
    //     backgroundColor: '#B24080',
    //     borderColor: 'white',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.titles', {
    //     color: '#FFF9B2',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.theHeaderDiv', 0.5, {
    //     backgroundColor: '#B24080',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.ImageContainer', {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer4', {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer2', {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer3', {
    //     opacity: 1,
    //   })

    //   this.$refs.ImageContainer.togImg()
    //   this.$refs.ImageContainer2.togImg()
    //   this.$refs.ImageContainer3.togImg()
    //   this.$refs.ImageContainer4.togImg()
    //   this.$refs.TheNavbar.menuColorBlack()
    // },
    // colorChange3() {
    //   const gsap = this.$gsap

    //   gsap.to('.firstContainer', {
    //     backgroundColor: '#dab894',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.purpleContainer', 0.5, {
    //     backgroundColor: '#082032',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.titles', {
    //     color: '#F0A500',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.theHeaderDiv', 0.5, {
    //     backgroundColor: '#082032',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.ImageContainer', {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer4', {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer2', {
    //     opacity: 1,
    //   })
    //   gsap.to('.ImageContainer3', {
    //     opacity: 1,
    //   })

    //   this.$refs.ImageContainer.togImg()
    //   this.$refs.ImageContainer2.togImg()
    //   this.$refs.ImageContainer3.togImg()
    //   this.$refs.ImageContainer4.togImg()
    //   this.$refs.TheNavbar.menuColorBlack()
    // },
    // colorReset() {
    //   const gsap = this.$gsap

    //   gsap.to('.firstContainer', {
    //     backgroundColor: 'black',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.purpleContainer', 0.5, {
    //     backgroundColor: 'black',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.titles', {
    //     color: 'white',
    //     ease: 'power2.out',
    //   })
    //   gsap.to('.ImageContainer', {
    //     opacity: 0,
    //   })
    //   gsap.to('.ImageContainer2', {
    //     opacity: 0,
    //   })
    //   gsap.to('.ImageContainer3', {
    //     opacity: 0,
    //   })
    //   gsap.to('.ImageContainer4', {
    //     opacity: 0,
    //   })

    //   this.$refs.TheNavbar.menuColorWhite()
    // },
    // giggle() {
    //   const gsap = this.$gsap
    //   gsap.fromTo(
    //     '.ImageContainer',
    //     {
    //       scale: 2,
    //     },
    //     {
    //       scale: 1,
    //     }
    //   )
    //   gsap.fromTo(
    //     '.ImageContainer2',
    //     {
    //       scale: 2,
    //     },
    //     {
    //       scale: 1,
    //     }
    //   )
    //   gsap.fromTo(
    //     '.ImageContainer3',
    //     {
    //       scale: 2,
    //     },
    //     {
    //       scale: 1,
    //     }
    //   )
    //   gsap.fromTo(
    //     '.ImageContainer4',
    //     {
    //       scale: 2,
    //     },
    //     {
    //       scale: 1,
    //     }
    //   )
    // },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap');


.titles {
  font-family: 'Miltonian Tattoo', cursive;
}

.theHeader {
  font-family: 'Miltonian Tattoo', cursive;
}
</style>
