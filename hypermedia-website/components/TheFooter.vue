<template>
  <footer>
    <ul class="flex-row">
      <li><logo class="logo" /></li>
    </ul>
    <ul class="flex-row">
      <li href="#">
        <i class="fab fa-facebook">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </i>
      </li>

      <li href="#">
        <i class="fab fa-twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </i>
      </li>
      <li href="#">
        <i class="fab fa-instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </i>
      </li>

      <li href="#">
        <i class="fab fa-instagram">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </i>
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
  color: black;
  background-color: $footer-color-darkens;
  align-items: center;
  padding-bottom: 10px;
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
}

p {
  text-align: center;
}
</style>
