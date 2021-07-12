<template>
  <div class="article-mini">
    <div
      class="img"
      :style="{ 'background-image': `url(${image})` }"
      @click="goToArticle(`/blog/${id}`)"
    >
      <div id="img-shadow">
        <div class="card">
          <h3 class="lg: text-xl sm:text-base">{{ title }}</h3>

          <p class="lg:text-lg smaller-text">{{ summary }}</p>
        </div>
      </div>
    </div>
    <hr />
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
p,
h3 {
  color: rgba(250, 250, 250, 1);
}

hr {
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 90%;
  align-self: center;
  margin: auto;
}
@media only screen and (max-width: 600px) {
  .smaller-text {
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 5px;
  }
}
/* card is where the content is displayed */
.card {
  padding: 20px 10px;
  margin: auto 10%;
  display: flex;
  flex-direction: column;
}
h3 {
  margin: auto;
  /* Allow for 3 lines before container requires more space */
  min-height: 3em;
}
p {
  margin-bottom: 1.3vw;
  font-size: 20px;
  align-self: bottom;
  font-family: Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* Display the paragraph of the summary as */
  /* at maximum 4 lines of text and after those 4 lines  */
  /* overflow the content, hide it and add an ellipsis ('...' <= three dots) */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
#img-shadow {
  background-color: rgba(0, 0, 0, 0.73);
  width: inherit;
  height: inherit;
  min-height: 25vh;
}
.img {
  cursor: pointer;
  /* flex: 2; */
  width: 100%;
  height: 234px;
  max-width: 80%;
  min-height: 25vh;
  margin: 2.3vh auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // margin-bottom: 40px;
}
</style>
