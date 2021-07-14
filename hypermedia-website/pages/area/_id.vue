<template>
  <section class="sand grayscale large">
    <section>
      <redirectButton :number-of-pages-back="-1" />
      <div>
        <header class="titleImage">
          <img class="titleImage" :src="area.image" />

          <div class="display-middle center">
            <div class="title">
              <span style="font-size: 40px">{{ area.title }}</span>
            </div>
          </div>
        </header>

        <!-- area's decription section -->
        <article>
          <div class="content" style="max-width: 700px">
            <div id="overview">
              <p>{{ area.overview }}</p>
            </div>
            <hr />
            <div id="details">
              <p>{{ area.details }}</p>
            </div>
            <hr />
          </div>
        </article>
      </div>
    </section>
    <section>
      <!-- All its services -->
      <div class="servicesContainer">
        <h2>These are all the Services in this Area:</h2>
        <br />
        <h4 v-if="area.services.length === 0">
          {{ area.title }} has no services.
        </h4>
        <div class="all-services-container">
          <div
            v-for="(service, serviceIndex) of area.services"
            :key="'Service-' + serviceIndex"
            class="service"
          >
            <div>
              <service-preview
                :id="service.id"
                :title="service.title"
                :summary="service.overview"
                :image="service.image"
              ></service-preview>
            </div>
          </div>
        </div>
      </div>
      <div class="button-container">
        <div
          class="nav-button"
          @click="goToExperts(`/employeeName/${area.title}`)"
        >
          <h3 class="lg: text-xl sm:text-base">
            Go to all Experts in this area
          </h3>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ServicePreview from '../../components/ServicePreview.vue'
import redirectButton from '~/components/redirectButton.vue'
export default {
  components: { ServicePreview, redirectButton },
  async asyncData({ $axios, route }) {
    // const { id } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/area/${route.params.id}`
    )
    const area = data
    return {
      area,
    }
  },
  methods: {
    goToExperts(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style lang="scss" scoped>
.service-container {
  width: 30%;
}
.service-container > .content {
  width: auto;
}
hr {
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 95%;
  align-self: center;
}

.text-white {
  color: rgb(255, 255, 255) !important;
}
.text-black {
  color: #000 !important;
}
.center {
  text-align: center !important;
}
.content {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.sand {
  color: #000 !important;
}
.greyscale {
  filter: grayscale(70%);
}
.large {
  font-size: 18px !important;
}

#overview,
#details {
  padding: 20px;
}
.button-container {
  display: flex;
  justify-content: center;
  display: inline-flex;
}
.content {
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  max-width: 980px;
}
.services {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
@media only screen and (max-width: 600px) {
  .service {
    flex: 1 0 90%;
    text-align: -webkit-center;
  }
}
@media only screen and (min-width: 601px) {
  .service {
    flex: 1 0 50%;
    text-align: -webkit-center;
  }
.service {
  margin: auto;
}
.servicePreview {
  width: auto;
}

/* This is the container of all areas, and shows all areas in a row */
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

.nav-button {
  white-space: nowrap;
  display: inline-flex;
  padding: 2.1%;
}
* > .card {
  margin: auto;
  width: auto;
}
img {
  opacity: 0.5;
  filter: brightness(80%);
}
</style>
