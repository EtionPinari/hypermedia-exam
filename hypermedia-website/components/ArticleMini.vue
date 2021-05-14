<template>
  <div class="article-mini" @click="goToArticle(`/blog/${id}`)">
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
    id: { type: Number, default: () => 0 },
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

<style lang="scss" scoped>
/* article-mini is the whole area the div covers (highlighted with the border) */
.article-mini {
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
  flex: 1;
  margin-bottom: 2vw;
  /* Allow for 3 lines before container requires more space */
  min-height: 4em;
}
p {
  flex: 2;
  height: 60px;
  margin-bottom: 1.3vw;
  /* Display the paragraph of the summary as */
  /* at maximum 4 lines of text and after those 4 lines  */
  /* overflow the content, hide it and add an ellipsis ('...' <= three dots) */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
