<template>
  <nav>
    <div class="max-w-6xl">
      <div class="flex justify-between">
        <div class="flex">
          <nuxt-link to="/"><logo id="logo" /></nuxt-link>
          <div>
            <a href="#" class="flex items-center py-5">
              <span class="font-bold">Hatgemini</span>
            </a>
          </div>

          <div class="hidden md:flex items-center">
            <div class="flex xl:space-x-12">
              <nuxt-link to="/allAreas">
                <a>Areas</a>
              </nuxt-link>
              <nuxt-link to="/articles">
                <a>Articles</a>
              </nuxt-link>
              <nuxt-link to="/allEmployees">
                <a @click="resetCounter()">Experts</a>
              </nuxt-link>
              <nuxt-link to="/allServices">
                <a>Services</a>
              </nuxt-link>
              <nuxt-link to="/contacts">
                <a>Contact us</a>
              </nuxt-link>
              <nuxt-link to="/about">
                <a>About us</a>
              </nuxt-link>
            </div>
          </div>
        </div>

        <!-- drawer -->
        <div class="md:hidden flex items-center mr-5">
          <button class="mobile-menu-button" @click="showMenu = !showMenu">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div v-if="showMenu" class="mobile-menu md:hidden">
      <nuxt-link to="/allAreas" class="block py-2 px-4 text-sm">
        <a>Areas</a>
      </nuxt-link>
      <nuxt-link to="/articles" class="block py-2 px-4 text-sm">
        <a>Articles</a>
      </nuxt-link>
      <nuxt-link to="/allEmployees" class="block py-2 px-4 text-sm">
        <a @click="resetCounter()">Experts</a>
      </nuxt-link>
      <nuxt-link to="/allServices" class="block py-2 px-4 text-sm">
        <a>Services</a>
      </nuxt-link>
      <nuxt-link to="/contacts" class="block py-2 px-4 text-sm">
        <a>Contact us</a>
      </nuxt-link>
      <nuxt-link to="/about" class="block py-2 px-4 text-sm">
        <a>About us</a>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },
  data: () => {
    return {
      showMenu: false,
    }
  },
  methods: {
    // This method resets the previous/next counter on every click of the navbar
    resetCounter() {
      this.$store.commit(`reset`)
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  justify-content: space-around;
  top: 0%;
  position: sticky;
  margin-top: 5px;
  z-index: 9;
  background-color: white;
  height: 65px;
  align-content: center;
}
a {
  color: rgb(46, 139, 201);
  font-size: 17px;
  padding-left: 1.5vw;
  background: white;
}
#logo {
  background-color: white;
  height: 75%;
  margin-top: 5px;
}
a:hover {
  color: rgb(44, 10, 117);
}
</style>
