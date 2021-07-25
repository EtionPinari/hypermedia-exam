<template>
  <div>
    <header class="titleImage">
      <img
        class="titleImage"
        src="https://it.agictech.com/media/1455/services4.png"
        alt="Multiple gear containing the services provided by Hatgemini"
      />
      <div class="display-middle center">
        <span class="text-black" style="margin: auto"><h1> All our Services </h1></span>
      </div>
    </header>

    <div>
      <h2 class="lg:text-2xl sm:text-base">
        These are all the services of our company:
      </h2>
      <div class="all-services-container">
        <div
          v-for="(service, serviceIndex) of services"
          :key="serviceIndex"
          class="service-container"
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
  head: {
    title: 'Services - Hatgemini',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          ' Find out which services we provide in the fields of expertise: Information, Communication and Telecommunications.',
      },
    ],
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
/* This is the child of the all-service-container */
/* All children can only take up to 50% of the total space and always stay in the center position */
@media only screen and (max-width: 600px) {
  .service-container {
    flex: 1 0 90%;
  }
}
@media only screen and (min-width: 601px) {
  .service-container {
    flex: 1 0 50%;
    width: 70%;
  }
}
.service-container {
  text-align: -webkit-center;
  margin-bottom: 2vh;
}

/* This is the container of all services, and shows all services in a row */
.all-services-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.display-middle {
  position: absolute;
  top: 50%;
  left: 50%;
}

.center {
  text-align: center !important;
}
h2 {
  margin: 1vw;
}

img {
  opacity: 0.5;
  filter: brightness(80%);
}
</style>
