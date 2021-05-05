<template>
  <div class="article-mini" @click="goToArticle(`/blog/${id}`)"
                            >
    <div class="card">
      <h3>{{ title }}</h3>
      <div class="img" :style="{ 'background-image': `url(${image})` }"></div>
      <p>{{ summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {type: Number, default: () => ''},
    title: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    summary: { type: String, default: () => '' },
  }, 
  methods: {
    goToArticle(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style lang = "scss" scoped>
/* article-mini is the whole area the div covers (highlighted with the border) */
.article-mini{
  border: 1px solid $main-border-color;
  border-radius: 4px;
}

/* card is where the content is displayed */
.card {
  padding: 20px 10px;
  margin: auto 10%;
  display: flex;
  flex-direction: column;
}
h3 {
  flex:1;
  margin-bottom: 2vw;
}
p {
  flex: 2;
  height: 60px;
  margin-bottom: 1.3vw;
  font-size: 1vw
}

.img {
  /* flex: 2; */
  width: 100%;
  height: 200px;
  max-width: 600px;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 40px;
}
</style>
