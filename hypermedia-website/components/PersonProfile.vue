<template>
  <div class="PersonProfile person">
    <div class="card" @click="goToArticle(`/employee/${id}`)">
      <img :src="image" class="facepreview" />
      <div class="content2">
        <h3 class="lg:text-xl sm:text-base">{{ name + ` ` + surname }}</h3>
        <h5 class="lg:text-lg sm:text-xs">{{ area.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
    goToArticle(path) {
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
  margin-bottom: 1.3vw;
}
h3 {
  text-align: center;
  margin-bottom: 0.1em;
}
.p {
  overflow: hidden;
  text-align: center;
  overflow: hidden;
  height: 2.9em;
  width: inherit;
}
@media only screen and (min-width: 601px) {
  .facepreview {
    width: 13vw;
    height: 13vw;
  }
  .PersonProfile,
  .person {
    cursor: pointer;
    width: 15vw;
  }
}
@media only screen and (max-width: 600px) {
  .facepreview {
    width: 120px;
    height: auto;
  }
  .PersonProfile,
  .person {
    cursor: pointer;
    width: 120px;
  }
}
.facepreview {
  border-radius: 15%;
  border: solid 0.3em $main-border-color;
}
</style>
