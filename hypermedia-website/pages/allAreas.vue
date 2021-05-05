<template>
  <div class="container">
    <the-navbar />
    <under-construction />
    <the-footer />
  </div>
</template>

<script>
import UnderConstruction from '../components/temporaryComponents/underConstruction.vue'
import TheFooter from '../components/TheFooter.vue'
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: { TheFooter, TheNavbar, UnderConstruction },
}
</script>

<style></style>
