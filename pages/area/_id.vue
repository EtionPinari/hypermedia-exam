<template>
  <section>
    <redirectButton :number-of-pages-back="-1" />

    <section class="main-section">
      <section>
        <div>
          <header class="titleImage">
            <img class="titleImage" :src="area.image" />

            <div class="display-middle center">
              <span class="text-black" style="font-size: 40px">{{
                area.title
              }}</span>
            </div>
          </header>

          <!-- area's decription section -->
          <article>
            <div class="text-content content">
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
      <section class="service-section">
        <!-- All its services -->
        <br />
        <h2 class="lg:text-2xl sm:text-base">Services in {{ area.title }}</h2>
        <br />
        <h4 v-if="area.services.length === 0">
          {{ area.title }} has no services.
        </h4>
        <section class="services-container">
          <div
            v-for="(service, serviceIndex) of area.services"
            :key="'Service-' + serviceIndex"
            class="service-container"
          >
            <div class="content">
              <service-preview
                :id="service.id"
                :title="service.title"
                :summary="service.overview"
                :image="service.image"
              ></service-preview>
            </div>
          </div>
        </section>
        <div
          class="nav-button"
          @click="goToExperts(`/employeeName/${area.title}`)"
        >
          <h3 class="lg: text-xl sm:text-base">
            Go to all experts in {{ area.title }}
          </h3>
        </div>
      </section>
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
  head() {
    return {
      title: 'Hatgemini - ' + this.area.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.area.overview,
        },
      ],
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
@media only screen and (max-width: 600px) {
  .service-container {
    flex: 1 0 100%;
    text-align: -webkit-center;
  }
}
@media only screen and (min-width: 601px) {
  .service-container {
    flex: 1 0 50%;
    text-align: -webkit-center;
  }
}
.main-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.services-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.service-section {
  max-width: 85%;
}
.content {
  width: auto;
}
hr {
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 95%;
  align-self: center;
}
#overview,
#details {
  padding: 2vw;
}
.text-black {
  color: #000 !important;
}
article {
  display: flex;
  justify-content: center;
}
.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  max-width: 75%;
}

.nav-button {
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
