<template>
  <div class="ServicePreview service">
    <div class="card" @click="navigate(`/service/${id}`)">
      <img :src="image" class="servicepreview" />
      <div class="content2">
        <h3 class="lg:text-xl sm:text-base">{{ title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import RoutingMixin from '~/mixins/routing'
export default {
  mixins: [RoutingMixin],
  props: {
    id: { type: Number, default: () => 0 },
    title: { type: String, default: () => '' }, //
    image: { type: String, default: () => '' }, //
    overview: { type: String, default: () => '' }, //
    details: { type: String, default: () => '' }, //
    areas: { type: String, default: () => '' },
  },
  methods: {
    goToService(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style lang="scss" scoped>
/* LANG = SCSS is used for global variables. check file ~assets/scss/colors.scss */
.card {
  padding: 0.3vw 0.5vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: inherit;
  margin: auto;
  margin-bottom: 1.3vw;
}
h3 {
  text-align: center;
  margin-bottom: 0.1em;
}
.p {
  overflow: hidden;
  text-align: center;
  height: 2.9em;
  width: inherit;
}

@media only screen and (min-width: 601px) {
  .ServicePreview,
  .service {
    cursor: pointer;
    width: 35vw;
  }
  .servicepreview {
    height: 13vw;
    width: 25vw;
  }
}
@media only screen and (max-width: 600px) {
  .ServicePreview,
  .service {
    cursor: pointer;
    width: 75vw;
  }
  .servicepreview {
    width: 60vw;
    height: 45vw;
  }
}
</style>
