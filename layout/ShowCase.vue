<template>
  <div
    class="
      mainDiv
      w-screen
      h-full
      bg-gray-400
      grid grid-rows-3
      gap-3
      overflow-hidden
      place-items-center
    "
  >
    <div class="showDiv1 m-2 flex justify-center w-full h-96 flex-row">
      <div class="tatStudio flex flex-col justify-center w-full">
        <h1 class="self-center font-bold text-5xl">Professional as fuck</h1>
        <h1 class="self-center font-bold text-3xl">Some</h1>
        <h1 class="self-center font-bold text-2xl">Word Porn</h1>
        <h1 class="self-center font-bold text-7xl">Smooooth</h1>
      </div>

      <div class="tatStudio flex justify-center w-full">
        <img class="object-contain" src="/tatStudio.svg" alt="" />
      </div>
    </div>
    <div
      class="
        showDiv2
        w-full
        h-80
        flex
        justify-center
        flex-row
        content-center
        align-center
        items-center
      "
    >
      <div class="tatStudio2 flex w-full justify-center h-full rounded-xl">
        <img class="rounded-xl object-contain" src="/tatStudio2.svg" alt="" />
      </div>

      <div class="tatStudio2 flex justify-center w-full h-full flex-col">
        <h1 class="self-center font-bold text-5xl">Uniqe Designs</h1>
        <h2 class="self-center font-bold text-5xl">be</h2>
        <h3 class="self-center font-bold text-5xl">The</h3>
        <h1 class="self-center font-bold text-5xl">ART</h1>
      </div>
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
      "
    >
      maybe some img
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
      gsap.from('.tatStudio', {
        x: -300,
        opacity: 0,
        scale: 0.5,
        ease: 'sine.out',
        stagger: 0.4,
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
      gsap.from('.tatStudio2', {
        x: 300,
        opacity: 0,
        scale: 0.5,
        ease: 'sine.out',
        stagger: 0.2,
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
