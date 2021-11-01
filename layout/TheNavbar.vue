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
      z-40
      flex
      align-center
      justify-start
      lg:px-9
    "
  >
    <div>
      <div class="flex justify-center">
        <button
          class="menuButton self-center p-2 text-white text-xl font-bold scale-125"
          @click="tog()"
        >
          &#9776;
        </button>
      </div>
    </div>
    <nav
      :class="open ? 'navbar-open' : 'navbar-close'"
      id="navbar"
      class="navbar w-60 absolute bg-Sky-500 top-0 -left-60 h-screen"
    >
      <div class="flex pr-2 justify-end rounded">
        <button class="p-2 text-white text-xl font-bold" @click="tog()">
          &#9747;
        </button>
      </div>
      <h1 class="text-xl text-center font-bold pt-5">Menu</h1>
      <ul class="list-none text-white text-center">
        <li class="navItems cursor-pointer my-8"><a href="#"></a>Teams</li>
        <li class="navItems cursor-pointer my-8"><a href="#"></a>Projects</li>
        <li class="navItems cursor-pointer my-8"><a href="#"></a>Favourites</li>
        <li class="navItems cursor-pointer my-8">
          <a href="#"></a>Notifications
        </li>
        <li class="navItems cursor-pointer my-8"><a href="#"></a>Members</li>
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
  watch: {
    open() {
      if (this.open) {
        this.openNav()
        this.menuItemsAnimation()
      } else {
        this.closeNav()
      }
    },
  },
  methods: {
    closeNav() {
      const gsap = this.$gsap

      gsap.to('.navbar', 0.7, {
        x: 0,
        ease: 'back.inOut(1.7)',
      })
    },
    openNav() {
      const gsap = this.$gsap

      gsap.to('.navbar', 0.7, {
        x: 230,
        ease: 'back.inOut(1.7)',
      })
    },
    menuItemsAnimation() {
      const tl = this.$gsap.timeline()

      tl.from('.navItems', 0.4, {
        opacity: 0,
        x: -50,
        stagger: 0.2,
      })
    },
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
@import url('https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap');

.navbar {
  font-family: 'Miltonian Tattoo', cursive;
}
/* 
.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
} */
</style>