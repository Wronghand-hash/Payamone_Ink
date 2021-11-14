<template>
  <div
    class="
      mainDiv
      w-screen
      h-full
      bg-gray-400
      grid grid-rows-4
      gap-2
      overflow-hidden
      place-items-center
    "
  >
    <div
      class="
        showDiv1
        m-2
        flex
        justify-center
        w-full
        h-80
        flex-col-reverse
        lg:flex-row
      "
    >
      <div class="flex flex-col justify-center w-full">
        <h1 class="self-center font-bold text-2xl lg:text-5xl">
          Professional as fuck
        </h1>
        <h1 class="self-center font-bold text-lg lg:text-3xl">Some</h1>
        <h1 class="self-center font-bold text-md lg:text-2xl">Word Porn</h1>
        <h1 class="self-center font-bold text-4xl lg:text-7xl">Smooooth</h1>
      </div>
    </div>

    <div v-show="!tab" class="showDiv2 w-full h-96 flex justify-center">
      <div class="tatStudio flex justify-center w-full h-full">
        <img class="object-contain" src="/tatStudio.svg" alt="" />
      </div>
    </div>

    <div
      class="
        showDiv3
        w-full
        h-68
        p-5
        m-5
        flex
        justify-center
        flex-col
        lg:flex-row
        content-center
        align-center
        items-center
      "
    >
      <div class="flex justify-center w-full h-full flex-col">
        <h1 class="self-center font-bold text-3xl lg:text-5xl">Uniqe Designs</h1>
        <h2 class="self-center font-bold text-3xl lg:text-3xl">be</h2>
        <h3 class="self-center font-bold text-3xl lg:text-2xl">The</h3>
        <h1 class="self-center font-bold text-3xl lg:text-7xl">ART</h1>
      </div>
    </div>

    <div class="showDiv4 w-full flex justify-center h-96 m-4">
      <div class="tatStudio2 flex w-full justify-center h-full rounded-xl">
        <img class="rounded-xl object-contain" src="/tatStudio2.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    tab(){
      return this.$store.state.tab
    }
  },
  mounted() {
    if (!this.tab) {
      this.scrollAnimation()
    }
  },
  methods: {
    scrollAnimation() {
      const gsap = this.$gsap

      //   gsap.to('.mainDiv', {
      //     backgroundColor: 'blue',
      //     ease: 'sine.out',
      //     scrollTrigger: {
      //       trigger: '.showDiv1',
      //       start: 'top bottom',
      //       end: 'bottom center',
      //       scrub: 2,

      //       toggleActions: 'restart none resume pause',
      //     },
      //   })

      gsap.from('.tatStudio', {
        x: -300,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.showDiv2',
          start: 'top bottom',
          end: 'bottom center',

          toggleActions: 'restart none resume pause',
        },
      })
      gsap.from('.showDiv1', {
        scale: 0.5,
        opacity: 0,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: '.showDiv1',
          start: 'top bottom',
          end: 'bottom center',

          toggleActions: 'restart none resume pause',
        },
      })
      gsap.from('.showDiv3', {
        scale: 2,
        opacity: 0,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: '.showDiv3',
          start: 'top bottom',
          end: 'bottom center',

          toggleActions: 'restart none resume pause',
        },
      })

      gsap.from('.tatStudio2', {
        x: 300,
        opacity: 0,
        ease: 'sine.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.showDiv4',
          start: 'top bottom',
          end: 'bottom center',

          toggleActions: 'restart none resume pause',
        },
      })

      //   gsap.to('.mainDiv', {
      //     backgroundColor: 'green',
      //     ease: 'sine.out',
      //     scrollTrigger: {
      //       trigger: '.showDiv3',
      //       start: 'top center',
      //       end: 'bottom center',
      //       scrub: 2,

      //       toggleActions: 'restart none resume pause',
      //     },
      //   })
      gsap.from('.tatStudio3', {
        x: -300,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: '.showDiv3',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 2,

          toggleActions: 'restart none resume pause',
        },
      })
    },
  },
}
</script>

<style scoped>
.mainDiv {
  font-family: 'Miltonian Tattoo', cursive;
}
</style>
