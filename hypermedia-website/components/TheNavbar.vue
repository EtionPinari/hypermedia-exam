<template>
  <div class="navbar">
    
      <nuxt-link to="/"> <logo id='logo'/> </nuxt-link>
    <button>
      <nuxt-link to="/about"> About us </nuxt-link>
    </button>
    <button>
      <nuxt-link to="/allEmployees"> Watch our employees </nuxt-link>
    </button>
    <br /><br />
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },}
</script>

<style lang="scss" scoped>
.navbar {
  justify-content: space-evenly;
  display: flex;
  top: 0%;
  position: sticky;
  margin-bottom: 12px;
  z-index: 9;
  background-color: $footer-color-darkens;
  height: 3vw;
}
#logo{
  height: 3vw;
}
</style>
