// STILL IN WORK BUT // THIS IS THE PAGE THAT FINDS THE EMPLOYEE'S THROUGH THEIR
NAMES

<template>
  <div class="container">
    <the-navbar />
    <h3>All people that work in area {{ areaName }}</h3>
    <div v-for="(person, personIndex) of person" :key="'art-' + personIndex">
      <person-profile
        :name="person.name"
        :surname="person.surname"
        :summary="person.summary"
        :image="person.image"
      />
    </div>
    <the-footer />
  </div>
</template>

<script>
import PersonProfile from '../../components/PersonProfile.vue'
import TheFooter from '../../components/TheFooter.vue'
import TheNavbar from '../../components/TheNavbar.vue'
export default {
  components: { PersonProfile, TheNavbar, TheFooter },
  async asyncData({ $axios, route }) {
    // const { id } = route.params
    const areaName = route.params.area
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/employeeName/${route.params.area}`
    )
    const person = data
    return {
      person,
      areaName,
    }
  },
}
</script>

<style></style>
