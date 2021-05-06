<template>
  <div class="PersonProfile">
    <div class="card" @click="goToArticle(`/employee/${id}`)">
      <div class="content2">
        <h3>{{ name + ` ` + surname }}</h3>
        <div class="p">{{ summary }}</div>
      </div>
      <img :src="image" class="facepreview" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: () => '' },
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
  padding: 20px 10px;
  border: 1.3px solid $main-border-color;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex: 0;
}
h3 {
  margin-bottom: 10px;
}
.p {
  margin-bottom: 3vw;
  height: 60px;
}
.facepreview {
  position: relative;
  border-radius: 15%;
  border: solid 0.3em $main-border-color;
  width: 13vw;
  height: 13vw;
}
</style>
