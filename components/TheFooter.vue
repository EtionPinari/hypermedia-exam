<template>
  <footer>
    <ul class="flex-row">
      <li><logo class="logo" /></li>
    </ul>
    <ul class="flex-row">
      <li href="#">
        <a href="https://www.facebook.com/hatgeminixyz" target="_blank">
          <i id="facebook" class="fab fa-facebook">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </i>
        </a>
      </li>

      <li href="#">
        <a href="https://www.twitter.com/hatgemini" target="_blank">
          <i id="twitter" class="fab fa-twitter">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </i>
        </a>
      </li>
      <li href="#">
        <a href="https://www.instagram.com/hatgemini" target="_blank">
          <i id="instagram" class="fab fa-instagram">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </i>
        </a>
      </li>

      <li href="#">
        <a href="https://www.linkedin.com/hatgemini" target="_blank">
          <i id="linkedin" class="fab fa-linkedin">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </i>
        </a>
      </li>
    </ul>
    <p>All rights reserved by Hatgemini. Copyright © 2021</p>
  </footer>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Logo from './Logo.vue'
library.add(fas, fab)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

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
  color: white;
  background-color: $footer-color-darkens;
  align-items: center;
  padding-bottom: 10px;
  margin-top: 4vh;
  margin-bottom: 40vh;
}

.logo {
  margin-top: 20px;
}

ul {
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  display: inline-block;
  padding: 0 15px;
  margin-bottom: 16px;
}

a {
  font-size: 14px;
  font-weight: 500;
}

i {
  cursor: pointer;
  font-size: 30px;
  color: white;
}

#facebook:hover {
  color: rgb(72, 103, 170);
}

#twitter:hover {
  color: rgb(0, 182, 241);
}

#instagram:hover {
  color: #e1306c;
}

#linkedin:hover {
  color: rgb(0, 116, 180);
}

p {
  text-align: center;
}
</style>
