<template>
  <div class="PersonProfile person">
    <div class="card" @click="goToArticle(`/employee/${id}`)">
      <img :src="image" class="facepreview" />
      <div class="content2">
        <h3>{{ name + ` ` + surname }}</h3>
        <div class="p">{{ summary }}</div>
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
    summary: { type: String, default: () => '' }, //
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
.PersonProfile,
.person {
  cursor: pointer;
  width: 15vw;
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
.facepreview {
  border-radius: 15%;
  border: solid 0.3em $main-border-color;
  width: 13vw;
  height: 13vw;
}
</style>
