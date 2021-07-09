<template>
  <section class="sand grayscale large">
    <section>
      <redirectButton :number-of-pages-back="-1" />
      <div>
        <header
          class="titleImage"
          :style="{
            'background-image': `url(${service.image})`,
          }"
        >
          <div class="display-middle center">
            <span class="text-white" style="font-size: 40px">{{ service.title }}</span>
          </div>
        </header>

        <!-- service's decription section -->
        <article>
          <div class="content" style="max-width: 700px">
            <div id="overview">
              <p>{{ service.overview }}</p>
            </div>
            <hr />
            <div id="details">
              <p>{{ service.details }}</p>
            </div>
            <hr />
          </div>
        </article>
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
      `${process.env.BASE_URL}/api/service/${route.params.id}`
    )
    const service = data
    return {
      service,
    }
  },
}
</script>


<style lang="scss" scoped>
hr {
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 90%;
  align-self: center;
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
.service {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
}

@media only screen and (min-width: 601px) {
  .service {
    // border: 0.1vw solid $main-border-color;
    width: 33%;
  }
}
.nav-button {
  display: inline-flex;
}
</style>
