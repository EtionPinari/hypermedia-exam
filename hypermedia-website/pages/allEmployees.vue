<template>
  <!-- Add navbar component here  -->
  <!-- <navbar/> -->
  <div>
    <div class="container">
      <the-navbar @click="resetMethod()" />
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
            :area="person.areas[0]"
          ></person-profile>
          <div></div>
        </div>
      </div>
      <div class="control-bar">
        <div v-if="$data.next > 0" class="nav-button" @click="getPrevious()">
          Previous 6
        </div>
        <div class="nav-button" @click="getData()">Next 6</div>
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
  async asyncData({ $axios, store, props }) {
    const peopleShown = 6
    // the state counter will keep track of which page of users we currently are
    const index = store.state.counter
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/people/${peopleShown}/${index}`
    )
    const people = data
    return {
      people,
    }
  },
  data() {
    return {
      // default is 0 even though it would be more correct to be equal to store.state.counter
      next: { type: Number, default: () => 0 },
    }
  },
  methods: {
    getData() {
      this.$store.commit('increment')
      this.$data.next = this.$store.state.counter
      this.$nuxt.refresh()
    },
    getPrevious() {
      this.$store.commit('decrement')
      this.$data.next = this.$store.state.counter
      this.$nuxt.refresh()
    },
  },
}
</script>

<style scoped>
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
.control-bar {
  justify-content: space-around;
  display: inline-flex;
}
.nav-button {
  width: 5vw;
  height: 2vw;
  text-align: center;
  padding: 0.3vw 0;
  margin: auto 1vw;
}
</style>
