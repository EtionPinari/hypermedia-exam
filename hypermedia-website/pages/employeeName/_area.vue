// STILL IN WORK BUT // THIS IS THE PAGE THAT FINDS THE EMPLOYEE'S THROUGH THEIR
NAMES

<template>
  <div>
    <RedirectButton />
    <h3>All people that work in area {{ areaName }}</h3>
    <div class="all-people-container">
      <div v-for="(person, personIndex) of person" :key="'art-' + personIndex">
        <person-profile
          :name="person.name"
          :surname="person.surname"
          :summary="person.summary"
          :image="person.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PersonProfile from '../../components/PersonProfile.vue'
import RedirectButton from '~/components/redirectButton.vue'
export default {
  components: { PersonProfile, RedirectButton },
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

<style scoped>
.all-people-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}
</style>
