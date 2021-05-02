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
        <button>
          <nuxt-link to="/contacts"> Contact us </nuxt-link>
        </button>
        <button>
          <nuxt-link to="/about"> About us </nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },
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
}
.logo {
  flex: 3 100%;
}
</style>
