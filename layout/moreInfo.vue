<template>
  <div class="moreInfoMain w-full h-96 bg-darkPurple">
    <div
      class="
        flex flex-col
        w-full
        h-full
        items-center
        justify-center
        content-end
      "
    >
      <div class="w-full h-full flex justify-end">
        <img
          class="
            object-contain
            w-full
            h-full
            transform
            scale-150
            lg:scale-125
            -translate-y-8
            lg:translate-y-8
          "
          src="/hawaii.svg"
          alt=""
        />
      </div>
      <h1
        class="
          text-3xl text-Lime-500
          transform
          translate-y-14
          lg:translate-y-28 lg:translate-x-50 lg:text-7xl
          absolute
        "
      >
        Acapulco Crew
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: false,
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fruktur&display=swap');
.moreInfoMain {
  font-family: 'Fruktur', cursive;
}
</style>
