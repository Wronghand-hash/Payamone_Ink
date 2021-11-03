<template>
  <div class="bg-blueGray-700 overflow-hidden">
    <button
      class="
        z-50
        doEr
        self-center
        absolute
        cursor-pointer
        right-0
        p-3
        rounded
        m-2
        text-xl text-white
        font-bold
      "
      @click="togTab"
    >
      Do
    </button>
    <div
      class="
        tabMenu
        text-white
        w-full
        p-10
        absolute
        flex flex-row flex-wrap
        justify-evenly
        top-0
        z-0
      "
      :class="{
        hidden: tab === false,
      }"
    >
      <button
        class="
          bg-goldie
          p-3
          m-2
          rounded
          shadow-xl
          tabItems
          p-2
          text-md
          cursor-pointer
        "
        @click="switchComponent('LandingPage')"
      >
        Home
      </button>
      <button
        class="
          bg-goldie
          p-3
          m-2
          rounded
          shadow-xl
          tabItems
          p-2
          text-md
          cursor-pointer
        "
        @click="switchComponent('Collections')"
      >
        Collections
      </button>
      <button
        class="
          bg-goldie
          p-3
          m-2
          rounded
          shadow-xl
          tabItems
          p-2
          text-md
          cursor-pointer
        "
      >
        ContactUs
      </button>
      <button
        class="
          bg-goldie
          p-3
          m-2
          rounded
          shadow-xl
          tabItems
          p-2
          text-md
          cursor-pointer
        "
      >
        Acapulco Design
      </button>
      <button
        class="
          bg-goldie
          p-3
          m-2
          rounded
          shadow-xl
          tabItems
          p-2
          text-md
          cursor-pointer
        "
      >
        Comanche
      </button>
    </div>
    <div class="firstDiv">
      <keep-alive>
        <conponent
          :is="component"
          v-gsap.from="{
            opacity: 0,
          }"
          :class="{ 'rounded-xl z-10': tab === true }"
        />
      </keep-alive>
    </div>
    <div class="secondDiv">
      <ShowCase :class="{ 'rounded-xl': tab === true }" />
    </div>
    <div class="thirdDiv">
      <MoreInfo :class="{ 'rounded-xl': tab === true }" />
    </div>
  </div>
</template>

<script>
import LandingPage from '~/layout/LandingPage.vue'
import Collections from '~/layout/Collections.vue'
import ShowCase from '~/layout/ShowCase.vue'
import MoreInfo from '~/layout/moreInfo.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    ShowCase,
    Collections,
    MoreInfo,
  },
  data() {
    return {
      tab: false,
      component: 'LandingPage',
    }
  },
  watch: {
    component() {
      this.deactivateTab()
    },
    tab() {
      if (this.tab) {
        this.tabActivator()
        this.tabItemsAnimation()
      } else {
        this.deactivateTab()
      }
    },
  },
  mounted() {},
  methods: {
    switchComponent(comp) {
      this.component = comp
      this.togTab()
    },
    togTab() {
      this.tab = !this.tab
    },
    tabActivator() {
      const gsap = this.$gsap

      gsap.to('.firstContainer', {
        y: 300,
        scale: 0.9,
        ease: 'expo.inOut',
      })

      gsap.to('.mainDiv', {
        y: -320,
        x: 30,
        scale: 0.9,
        ease: 'expo.inOut',
      })
      gsap.to('.moreInfoMain', {
        y: -930,
        x: 50,
        scale: 0.9,
        ease: 'expo.inOut',
      })
    },
    deactivateTab() {
      const gsap = this.$gsap

      gsap.to('.firstContainer', {
        y: 0,
        scale: 1,
        ease: 'expo.inOut',
      })
      gsap.to('.mainDiv', {
        y: 0,
        x: 0,
        scale: 1,
        ease: 'expo.inOut',
      })
      gsap.to('.moreInfoMain', {
        y: 0,
        x: 0,
        scale: 1,
        ease: 'expo.inOut',
      })
    },
    tabItemsAnimation() {
      const gsap = this.$gsap

      gsap.from('.tabItems', 0.5, {
        x: 90,
        opacity: 0,
        stagger: 0.2,
      })
    },
    collectionsTabAnimation() {
      const gsap = this.$gsap

      gsap.to('.secondContainer', {
        y: 0,
        scale: 1,
      })
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
  text-shadow: 0 0 0.05em rgb(255, 251, 0), 0 0 0.2em #ff0095, 0 0 0.3em #ff00c8;
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
  background-color: #ff0095;
}

.vitaminC {
  text-shadow: 0 0 0.05em rgb(255, 238, 0), 0 0 0.2em #33ff00, 0 0 0.3em #1eff00;
  transform: rotate(2deg);
  stroke: #0bfd03;
  stroke-width: 8px;
}
</style>
