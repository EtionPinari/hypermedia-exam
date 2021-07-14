<template>
  <div>
    <div>
      <header class="titleImage">
        <img
          class="titleImage"
          src="https://www.bamboohr.com/blog/wp-content/uploads/Employee_Development_Plans_4_Winning_Steps_to_Engage_Employees700x525.png"
        />
        <div class="display-middle center">
          <span class="text-black" style="font-size: 40px; margin: auto">All our Employees</span>
        </div>
      </header>
      <div class="all-people-container">
        <div v-for="(person, personIndex) of people" :key="'person-' + personIndex" class="person">
          <div v-if="canShow(personIndex)">
            <person-profile
              :id="person.id"
              :name="person.name"
              :surname="person.surname"
              :image="person.image"
              :area="person.areas[0]"
            ></person-profile>
          </div>

          <div></div>
        </div>
      </div>
      <div class="control-bar">
        <div
          v-if="showPreviousButton()"
          class="nav-button sm:w-32"
          @click="getPrevious()"
        >Previous 6</div>
        <div v-if="showNextButton()" class="nav-button sm:w-32" @click="getNewData()">Next 6</div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonProfile from '../components/PersonProfile.vue'
export default {
  components: {
    PersonProfile,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
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
    canShow(personIndex) {
      if (personIndex < (this.$store.state.counter + 1) * 6) {
        if (personIndex >= this.$store.state.counter * 6) {
          return true
        }
      }
      return false
    },
    showPreviousButton() {
      if (this.$store.state.counter > 0) {
        return true
      }
      return false
    },
    showNextButton() {
      if ((this.$store.state.counter + 1) * 6 >= this.people.length) {
        return false
      }
      return true
    },
    getNewData() {
      this.$store.commit('increment')
      this.$data.next = this.$store.state.counter
      // this.$nuxt.refresh()
    },
    getPrevious() {
      this.$store.commit('decrement')
      this.$data.next = this.$store.state.counter
      // this.$nuxt.refresh()
    },
  },
}
</script>

<style scoped>
/* This is the child of the all-people-container */
/* All children can only take up to 50% of the total space and always stay in the center position */
@media only screen and (max-width: 600px) {
  .person {
    flex: 1 0 90%;
    text-align: -webkit-center;
  }
}
@media only screen and (min-width: 601px) {
  .person {
    flex: 1 0 30%;
    text-align: -webkit-center;
  }
  .nav-button {
    width: 8vw;
    height: 4vh;
    text-align: center;
    margin: auto;
  }
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

.display-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.center {
  text-align: center !important;
}
h2 {
  margin: 1vw;
}
.control-bar {
  justify-content: space-around;
  display: inline-flex;
  margin-top: 2vw;
}
img {
  opacity: 0.5;
  filter: brightness(80%);
}
</style>
