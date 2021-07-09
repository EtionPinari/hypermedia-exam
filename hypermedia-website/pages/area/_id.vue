<template>
  <section class="sand grayscale large">
    <section>
      <redirectButton :number-of-pages-back="-1" />
      <div>
        <header
          class="titleImage"
          :style="{
            'background-image': `url(${area.image})`,
          }"
        >
          <div class="display-middle center">
            <span class="text-white" style="font-size: 40px">{{
              area.title
            }}</span>
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
      <h3>Services in this Area</h3>
      <h4 v-if="area.services.length === 0">
        {{ area.title }} has no services.
      </h4>
      <section class="services">
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
        <h3 class="lg: text-xl sm:text-base">Go to all Experts in this area</h3>
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
  width: 50%;
}
.service-container > .content {
  width: auto;
}
hr {
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 90%;
  align-self: center;
}
.article-mini {
  border: 0px;
  min-height: 30vh;
}

.text-white {
  color: #fff !important;
}
.center {
  text-align: center !important;
}
.content {
  display: flex;
  flex-direction: column;
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

.content {
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
}
.services {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
}
.service {
  margin: auto;
}
.servicePreview {
  width: auto;
}
.nav-button {
  display: inline-flex;
}
* > .card {
  margin: auto;
  width: auto;
}
</style>
