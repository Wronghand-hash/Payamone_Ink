<template>
  <!-- <v-app> -->
  <div
    class="
      mt-5
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
          class="
            menuButton
            self-center
            p-2
            text-white text-xl
            font-bold
            transform
            scale-125
          "
          @click="tog()"
        >
          &#9776;
        </button>
      </div>
    </div>
    <nav
      id="navbar"
      :class="open ? 'navbar-open' : 'navbar-close'"
      class="navbar w-60 absolute bg-yellow-400 top-0 -left-60 h-screen"
    >
      <div class="flex pr-2 justify-end rounded">
        <button class="p-2 text-black text-xl font-bold" @click="tog()">
          <img
            src="~/assets/images/close.png"
            class="object-contain w-7"
            alt=""
          />
        </button>
      </div>
      <ul class="list-none text-center text-xl lg:text-2xl">
        <Button>Teams</Button>
        <Button>Projects</Button>
        <Button>Favorites</Button>
        <Button>Contact US</Button>
        <Button>Members</Button>
      </ul>
    </nav>
  </div>
  <!-- </v-app> -->
</template>

<script>
import Button from '../components/DefaultButton.vue'
export default {
  components: {
    Button,
  },
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
.navbar {
  font-family: 'Patua One', cursive;
}

/* 
.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
} */
/* CSS */
</style>
