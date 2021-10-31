<template>
  <!-- <v-app> -->
  <div
    class="
      fixed
      w-screen
      h-20
      lg:h-20
      bg-transparent
      Navbar
      opacity-100
      z-50
      flex
      align-center
      justify-start
      lg:px-9
    "
  >
    <div>
      <button
        class="menuButton p-2 text-white text-xl font-bold scale-125"
        @click="tog()"
      >
        &#9776;
      </button>
    </div>
    <nav
      :class="open ? 'navbar-open' : 'navbar-close'"
      class="
        navbar
        w-64
        absolute
        overflow-x-scroll
        bg-gray-700
        top-0
        left-0
        h-screen
      "
    >
      <div class="flex pr-2 justify-end">
        <button class="p-2 text-white text-xl font-bold" @click="tog()">
          &#9747;
        </button>
      </div>
      <h1 class="text-xl text-center font-bold pt-5">Menu</h1>
      <ul class="list-none text-white text-center">
        <li class="my-8"><a href="#"></a>Teams</li>
        <li class="my-8"><a href="#"></a>Projects</li>
        <li class="my-8"><a href="#"></a>Favourites</li>
        <li class="my-8"><a href="#"></a>Notifications</li>
        <li class="my-8"><a href="#"></a>Members</li>
      </ul>
    </nav>
  </div>
  <!-- </v-app> -->
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    tog() {
      this.open = !this.open
    },
    menuColorBlack() {
      const gsap = this.$gsap

      gsap.to('.menuButton', {
        color: 'black',
      })
    },
    menuColorWhite() {
      const gsap = this.$gsap

      gsap.to('.menuButton', {
        color: 'white',
      })
    },
  },
}
</script>


<style scoped>
.navbar {
  transition: all 200ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}
</style>