<template>
  <nav>
    <nuxt-link to="/"><logo id="logo" @click="resetCounter()" /></nuxt-link>
    <nuxt-link to="/allAreas">
      <a>Areas</a>
    </nuxt-link>
    <nuxt-link to="/articles">
      <a>Articles</a>
    </nuxt-link>
    <nuxt-link to="/allEmployees">
      <a>Experts</a>
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
    <br /><br />
  </nav>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },
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
  display: flex;
  top: 0%;
  position: sticky;
  padding: 0.8vw 0vw;
  margin-top: 5px;
  z-index: 9;
  background-color: white;
  height: 3.5vw;
  align-content: center;
}
a {
  justify-content: center;
  align-items: center;
  color: rgb(46, 139, 201);
  font-size: 17px;
  margin-top: 5px;
}
#logo {
  height: 100%;
  width: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: rgb(46, 139, 201);
}
a:hover {
  color: rgb(44, 10, 117);
}
#logo {
  height: 140%;
  position: relative;
  bottom: 30%;
}
</style>
