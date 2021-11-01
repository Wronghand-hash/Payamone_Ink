<template>
  <div
    class="firstContainer bg-black h-screen overflow-hidden shadow-xl"
    :class="{
      'rounded-xl': tab === true,
    }"
  >
    <div>
      <Navbar ref="TheNavbar" />
    </div>

    <div class="h-screen grid gap-0 grid-cols-2 grid-rows-3">
      <div class="ImageContainer flex justify-center">
        <ImageContainer ref="ImageContainer" />
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
          cursor-pointer
        "
        @click="togImgs"
      >
        <h1 class="text-5xl lg:text-7xl text-white theHeader">Paymaone Ink</h1>
        <p class="tapHere text-Lime-500 transform translate-y-5">Tap here !!</p>
        <p class="text-2xl text-white p-5 m-2 vitaminC">
          You're losing your vitamin C
        </p>
      </div>

      <div class="ImageContainer3 flex justify-center">
        <ImageContainer3 ref="ImageContainer3" />
      </div>

      <div class="ImageContainer4 flex flex-col items-center justify-center">
        <ImageContainer4 ref="ImageContainer4" />
      </div>
    </div>
  </div>
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
  data() {
    return {
      tab: false,
    }
  },
  watch: {},
  mounted() {
    this.ContainerAnimation()
  },
  methods: {
    togImgs() {
      this.$refs.ImageContainer.togImg()
      this.$refs.ImageContainer2.togImg()
      this.$refs.ImageContainer3.togImg()
      this.$refs.ImageContainer4.togImg()

      const gsap = this.$gsap

      gsap.to('.firstContainer', {
        backgroundColor: () => {
          const m = []
          for (let i = 0; i < 80; i++) {
            m.push(
              '#' +
                Math.floor(Math.random() * 10) +
                Math.floor(Math.random() * 10) +
                Math.floor(Math.random() * 10)
            ) // to construct a color arrary.
          }
          return m
        },
      })
    },
    ContainerAnimation() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.fromTo(
        '.ImageContainer',
        1,
        {
          opacity: 0,
          scale: 1.5,
        },
        {
          opacity: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4,
        }
      )
      tl.fromTo(
        '.ImageContainer2',
        1,
        {
          opacity: 0,
          scale: 1.5,
        },
        {
          opacity: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4,
        }
      )
      tl.fromTo(
        '.ImageContainer3',
        1,
        {
          opacity: 0,
          scale: 1.5,
        },
        {
          opacity: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4,
        }
      )
      tl.fromTo(
        '.ImageContainer4',
        1,
        {
          opacity: 0,
          scale: 1.5,
        },
        {
          opacity: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 4,
        }
      )
      tl.fromTo(
        '.tapHere',
        0.3,
        {
          scale: 1.3,
        },
        {
          scale: 1,
          yoyo: true,
          repeat: -1,
        }
      )
    },
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
  text-shadow: 0 0 0.05em rgb(72, 255, 0), 0 0 0.2em #e7f708, 0 0 0.3em #00ff22fb;
}

.tabMenu {
  font-family: 'Miltonian Tattoo', cursive;
}

.tapHere {
  font-size: 1.5em;
  margin-top: -0.6em;
  text-shadow: 0 0 0.05em rgb(255, 238, 0), 0 0 0.2em #33ff00, 0 0 0.3em #1eff00;
  transform: rotate(-7deg);
  stroke: #ffffff;
  stroke-width: 8px;
}
.doEr {
  background-color: #1eff00;
}

.vitaminC {
  text-shadow: 0 0 0.05em rgb(255, 238, 0), 0 0 0.2em #33ff00, 0 0 0.3em #1eff00;
  transform: rotate(2deg);
  stroke: #0bfd03;
  stroke-width: 8px;
}
</style>
