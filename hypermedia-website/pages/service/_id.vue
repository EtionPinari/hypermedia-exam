<template>
  <section class="sand grayscale large">
    <section>
      <redirectButton :number-of-pages-back="-1" />
      <div>
        <header class="titleImage">
          <img class="titleImage" :src="service.image" />

          <div class="display-middle center">
            <span class="text-black" style="font-size: 40px">{{
              service.title
            }}</span>
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

    <h4 v-if="service.areas.length === 0">
      {{ service.title }} is not provided by any areas
    </h4>
    <h3 v-if="service.areas.length !== 0">
      {{ service.title }} is provided by this area:
    </h3>
    <section class="area-of-work publications">
      <div
        v-for="(area, areaIndex) of service.areas"
        :key="'area-' + areaIndex"
        class="publication"
      >
        <div class="content">
          <area-preview
            :id="area.id"
            :title="area.title"
            :details="area.details"
            :image="area.image"
            :overview="area.overview"
          />
        </div>
      </div>
    </section>

    <br />
    <h3 v-if="service.person.id > 0">
      {{ service.title }} is provided by our employee:
    </h3>
    <section class="area-of-work publications">
      <div class="content personprofile-component">
        <person-profile
          :id="service.person.id"
          :name="service.person.name"
          :surname="service.person.surname"
          :image="service.person.image"
          :area="service.areas[0].name"
        />
      </div>
    </section>
  </section>
</template>

<script>
import redirectButton from '~/components/redirectButton.vue'
import PersonProfile from '~/components/PersonProfile.vue'
import AreaPreview from '~/components/AreaPreview.vue'
export default {
  components: { redirectButton, AreaPreview, PersonProfile },
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
  font-size: 20px;
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

.content {
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  width: 100%;
}
.service {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
}

.area-of-work > img {
  // width: 145%;
  max-width: 145%;
}
.area-of-work * {
  width: 100%;
  height: auto;
  margin: auto;
}
.publications {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  // margin-bottom: 2vh;
}
@media only screen and (min-width: 601px) {
  .publication {
    // border: 0.1vw solid $main-border-color;
    width: 33%;
  }
  .AreaPreview,
  .area {
    width: inherit;
  }
  .personprofile-component {
    width: 33%;
  }
}
@media only screen and (max-width: 600px) {
  .publication {
    // border: 3px solid $main-border-color;
    width: 90%;
    margin-bottom: 30px;
  }
  .AreaPreview,
  .area {
    width: 100%;
  }
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

img {
  opacity: 0.5;
  filter: brightness(80%);
}
</style>
