<template>
  <div class="navbar"> 
    <nuxt-link to="/"><logo id="logo" @click='resetCounter()' /></nuxt-link>
    <nuxt-link to="/allAreas" >
      <div class="nav-button" @click='resetCounter()'>Areas</div>
    </nuxt-link>
    <nuxt-link to="/articles">
      <div class="nav-button" @click='resetCounter()'>Articles</div>
    </nuxt-link>
    <nuxt-link to="/allEmployees" >
      <div class="nav-button" @click='resetCounter()'>Experts</div>
    </nuxt-link>
    <nuxt-link to="/allServices" >
      <div class="nav-button" @click='resetCounter()'>Services</div>
    </nuxt-link>
    <nuxt-link to="/contacts">
      <div class="nav-button" @click='resetCounter()'>Contact us</div>
    </nuxt-link>
    <nuxt-link to="/about">
      <div class="nav-button" @click='resetCounter()'>About us</div>
    </nuxt-link>
    <br /><br />
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },
  methods: {
    //This method resets the previous/next counter on every click of the navbar
    resetCounter(){
      this.$store.commit(`reset`)
    },
  }
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
