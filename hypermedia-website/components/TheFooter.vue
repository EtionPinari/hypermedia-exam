<template>
  <div id="footer">
    <logo class="logo" />
    <div id="footer-content">
      <p>
        'COMPANY-NAME' is your Innovation Partner anywhere around the world.
        Headquartered in Milan, with business operations in more than 50 cities,
        we emphasize long-term commitment and combine global reach and local
        intimacy to provide premier professional services from consulting,
        system development to business IT outsourcing. 'COMPANY-NAME' thrives to
        play an instrumental role in establishing and advancing IT
        infrastructure in an eco-friendly manner. Our goal is to provide the
        simplest, most efficient solution to any problem our clients require.
      </p>
      <br />
      <div id="short-nav">
        <nuxt-link to="/contacts">
          <div class="nav-button" @click='resetCounter()'>Contact us</div>
        </nuxt-link>
        <nuxt-link to="/about">
          <div class="nav-button" @click='resetCounter()'>About us</div>
        </nuxt-link>
      </div>
    </div>
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
  },
}
</script>

<style lang="scss" scoped>
#footer {
  margin-top: 1vw;
  display: flex;
  justify-content: space-between;
  background-color: $footer-color-darkens;
}
p {
  color: white;
  margin: 1.5vw;
  font-size: 1vw;
}
//
#short-nav {
  display: flex;
  flex-direction: row;
  // margin: -1.5vw 1vw 1vw 1vw;
  justify-content: space-evenly;
}
#short-nav .nav-button {
  width: 10vw;
}
.logo {
  flex: 3 100%;
}
</style>
