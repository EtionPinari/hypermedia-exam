<template>
  <!-- Add navbar component here  -->
  <!-- <navbar/> -->
  <div>
    <div class="container">
      <the-navbar />
      <h2>These are all the employees of our company:</h2>
      <div class="all-people-container">
        <div
          v-for="(person, personIndex) of people"
          :key="'person-' + personIndex"
          class="person"
        >
          <person-profile
            :id="person.id"
            :name="person.name"
            :surname="person.surname"
            :image="person.image"
            :summary="person.summary"
          ></person-profile>
        </div>
      </div>

      <the-footer />
    </div>
  </div>
</template>

<script>
import PersonProfile from '../components/PersonProfile.vue'
import TheFooter from '../components/TheFooter.vue'
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: {
    PersonProfile,
    TheNavbar,
    TheFooter,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const people = data
    return {
      people,
    }
  },
}
</script>

<style scoped>
/* .person :not(h3) {
  font-size: 1em;
} */
/* This is the child of the all-people-container */
/* All children can only take up to 50% of the total space and always stay in the center position */
.person {
  flex: 1 0 33%;
  text-align: -webkit-center;
}
/* This is the container of all people, and shows all employees in a row */
.all-people-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}
h2 {
  margin: 1vw;
}

/* .center{ */
/* margin: 0% 15%; */
/* } */
</style>
