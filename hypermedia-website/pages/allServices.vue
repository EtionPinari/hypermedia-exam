<template>
  <div>
    <header class="titleImage">
      <img
        class="titleImage"
        src="https://it.agictech.com/media/1455/services4.png"
      />
      <div class="display-middle center">
        <span class="text-black" style="font-size: 40px">All our Services</span>
      </div>
    </header>

    <div class="servicesContainer">
      <h2>These are all the services of our company:</h2>
      <div class="all-services-container">
        <div
          v-for="(service, serviceIndex) of services"
          :key="serviceIndex"
          class="service"
        >
          <div>
            <service-preview
              :id="service.id"
              :title="service.title"
              :details="service.details"
              :image="service.image"
              :overview="service.overview"
            ></service-preview>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicePreview from '../components/ServicePreview.vue'

export default {
  components: {
    ServicePreview,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/services`)
    const services = data
    return {
      services,
    }
  },
  data() {
    return {
      // default is 0 even though it would be more correct to be equal to store.state.counter
      next: { type: Number, default: () => 0 },
    }
  },
  methods: {
    canShow(serviceIndex) {
      if (serviceIndex < (this.$store.state.counter + 1) * 6) {
        if (serviceIndex >= this.$store.state.counter * 6) {
          return true
        }
      }
      return false
    },
    showNextButton() {
      if ((this.$store.state.counter + 1) * 6 >= this.services.length) {
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
  .service {
    flex: 1 0 90%;
    text-align: -webkit-center;
  }
}
@media only screen and (min-width: 601px) {
  .service {
    flex: 1 0 50%;
    width: 70%;
    height: 265px;
    text-align: -webkit-center;
  }
  .nav-button {
    width: 5vw;
    height: 2vw;
    text-align: center;
    padding: 0.3vw 0;
    margin: auto 1vw;
  }
}

/* This is the container of all people, and shows all employees in a row */
.all-services-container {
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
</style>
