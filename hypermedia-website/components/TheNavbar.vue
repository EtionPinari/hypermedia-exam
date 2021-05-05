<template>
  <div class="navbar"> 
    <nuxt-link to="/"><logo id="logo" /></nuxt-link>
    <nuxt-link to="/allAreas">
      <div class="nav-button">Areas</div>
    </nuxt-link>
    <nuxt-link to="/articles">
      <div class="nav-button">Articles</div>
    </nuxt-link>
    <nuxt-link to="/allEmployees">
      <div class="nav-button">Experts</div>
    </nuxt-link>
    <nuxt-link to="/allServices">
      <div class="nav-button">Services</div>
    </nuxt-link>
    <nuxt-link to="/contacts">
      <div class="nav-button">Contact us</div>
    </nuxt-link>
    <nuxt-link to="/about">
      <div class="nav-button">About us</div>
    </nuxt-link>
    <br /><br />
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },
}
</script>

<style lang="scss" scoped>
.navbar {
  justify-content: space-around;
  display: flex;
  top: 0%;
  position: sticky;
  padding: 0.8vw 0vw;
  margin-top: 5px;
  z-index: 9;
  background-color: $footer-color-darkens;
  height: 3.5vw;
  // justify-content: center;
  align-content: center;
}
.nav-button, #logo {
  height: 90%;
  width: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo {
  height: 140%;
  position: relative;
  bottom: 30%;  
}
</style>
