<template>
  <div class="PersonProfile person">
    <div class="card" @click="navigate(`/employee/${id}`)">
      <img :src="image" alt="Image of a person" class="facepreview" />
      <div class="content2">
        <h3 class="lg:text-xl sm:text-base">{{ name + ` ` + surname }}</h3>
        <h5 class="lg:text-lg sm:text-xs">{{ area.title }}</h5>
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
    name: { type: String, default: () => '' }, //
    surname: { type: String, default: () => '' }, //
    image: { type: String, default: () => '' }, //
    content: { type: String, default: () => '' },
    area: {
      type: Object,
      default: () => {
        function Object() {
          return { title: 'Hatgemini worker' }
        }
        return Object()
      },
    }, //
    summary: { type: String, default: () => '' },
    articles: { type: String, default: () => '' },
  },
}
</script>

<style lang="scss" scoped>
/* LANG = SCSS is used for global variables. check file ~assets/scss/colors.scss */
.card {
  padding: 0.3vw 0.5vw;
  align-items: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: inherit;
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
  .PersonProfile,
  .person {
    cursor: pointer;
    width: 15vw;
  }
  .facepreview {
    width: 13vw;
    height: 13vw;
  }
}
@media only screen and (max-width: 600px) {
  .facepreview {
    width: 180px;
    height: auto;
  }
  .PersonProfile,
  .person {
    cursor: pointer;
    width: 180px;
    height: auto;
  }
}
.facepreview {
  border-radius: 15%;
  border: solid 0.3em $main-border-color;
}
</style>
