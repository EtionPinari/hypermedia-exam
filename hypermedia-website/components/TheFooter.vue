<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section about">
        <h1>Hatgemini</h1>
        <logo class="logo" />
        <p>
          Hatgemini is your Innovation Partner anywhere around the world.
          Headquartered in Milan, with business operations in more than 50
          cities, we emphasize long-term commitment and combine global reach and
          local intimacy to provide premier professional services from
          consulting, system development to business IT outsourcing. Our goal is
          to provide simplest, most efficient solution to any problem our
          clients require.
        </p>
      </div>
      <div class="footer-section links">
        <h2>Quick links</h2>
        <br />
        <ul>
          <nuxt-link to="/about">
            <a>About Us</a>
          </nuxt-link>
          <nuxt-link to="/contacts">
            <a>Contact Us</a>
          </nuxt-link>
        </ul>
      </div>
    </div>
    <hr />
    <div class="footer-bottom">
      All rights reserved by Hatgemini. Copyright © 2021
    </div>
  </footer>
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
footer {
  background-color: white;
  height: 300px;
  position: relative;
  margin-top: 5vh;
  height: fit-content;
}
footer .footer-content {
  display: flex;
  height: fit-content;
}

footer .footer-content .footer-section {
  flex: 1;
  padding: 25px;
}

footer .footer-bottom {
  height: 50px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-top: 20px;
}

footer .footer-content .links ul a {
  display: block;
  margin-bottom: 10px;
  font-size: 1.1em;
  color: rgb(46, 139, 201);
  text-align: left;
  margin-left: 4vw;
}
footer .footer-content .links ul a:hover {
  color: rgb(44, 10, 117);
}

p {
  margin: 30px;
  font-size: 18px;
  text-align: left;
}

.logo {
  height: 60px;
  float: left;
  margin-top: -5.5vh;
  margin-left: 30px;
}

h2 {
  margin-top: 8px;
  text-align: left;
  margin-left: 8vw;
}

h1 {
  text-align: left;
  margin-left: 120px;
}

hr {
  width: 90%;
  height: 1px;
  margin-left: 5%;
  padding-bottom: 35px;
}
</style>
