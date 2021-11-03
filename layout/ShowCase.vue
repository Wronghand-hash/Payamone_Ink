<template>
  <div
    class="
      mainDiv
      w-screen
      h-screen
      bg-pink-500
      grid grid-rows-3
      overflow-hidden
      place-items-center
    "
  >
    <div
      class="
        showDiv1
        w-32
        h-32
        rounded-full
        flex
        justify-center
        flex-col
        content-center
        bg-Amber-600
      "
    >
      maybe some img
    </div>
    <div
      class="
        showDiv2
        w-32
        h-32
        rounded-full
        flex
        justify-center
        flex-col
        content-center
        bg-Sky-600
      "
    >
      maybe some img
    </div>
    <div
      class="
        showDiv3
        w-32
        h-32
        rounded-full
        flex
        justify-center
        flex-col
        content-center
        bg-red-600
      "
    >
      maybe some img
    </div>
    <div class="h-52">
      <h2>some div to make space for the animatinos motherfucker</h2>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.scrollAnimation()
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
      gsap.from('.showDiv1', {
        x: -300,
        scale: 0.3,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: '.showDiv1',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 2,

          toggleActions: 'restart none resume pause',
        },
      })
      //   gsap.to('.mainDiv', {
      //     backgroundColor: 'red',
      //     ease: 'sine.out',
      //     scrollTrigger: {
      //       trigger: '.showDiv2',
      //       start: 'top center',
      //       end: 'bottom center',
      //       scrub: 2,

      //       toggleActions: 'restart none resume pause',
      //     },
      //   })
      gsap.from('.showDiv2', {
        x: 300,
        scale: 0.5,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: '.showDiv2',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 2,

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
      gsap.from('.showDiv3', {
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