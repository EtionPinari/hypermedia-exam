<template>
  <div>
    <RedirectButton />
    <h3>All people that work in area {{ areaName }}</h3>
    <div class="all-people-container">
      <div v-for="(person, personIndex) of person" :key="'art-' + personIndex">
        <person-profile
          :id="person.id"
          :name="person.name"
          :surname="person.surname"
          :summary="person.summary"
          :image="person.image"
          :area="person.areas[0]"
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
  head() {
    return {
      title: 'Hatgemini - ' + this.areaName + `'s staff`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' Experts of: ' + this.areaName + ' can help your business grow.',
        },
      ],
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
