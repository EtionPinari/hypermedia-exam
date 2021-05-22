<template>
  <!-- Container class only adds some style properties such as centering text and putting the right margin to containers  -->
  <div class="container">
    <the-navbar />
    <header id="header">
      <h1>All our employee's articles</h1>
      <div v-if="adUrl" class="ad">
        <img :src="adUrl" alt="Advertisement" />
      </div>
    </header>
    <section class="article-grid">
      <div
        v-for="(article, articleIndex) of articles"
        :key="'art-' + articleIndex"
        class="article"
      >
        <article-mini
          :id="article.id"
          :title="article.title"
          :summary="article.summary"
          :image="article.image"
        ></article-mini>
      </div>
    </section>
    <the-footer />
  </div>
</template>

<script>
import axios from 'axios'
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
import ArticleMini from '~/components/ArticleMini.vue'
export default {
  components: {
    ArticleMini,
    TheNavbar,
    TheFooter,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/articles`)
    const articles = data
    return {
      articles,
    }
  },
  data() {
    return {
      adUrl: '',
    }
  },
  mounted() {
    setTimeout(async () => {
      const { data } = await axios.get('/api/ad')
      this.adUrl = data.url
    }, 1000)
  },
  methods: {
    goToArticle(path) {
      this.$router.push({ path })
    },
  },
}
</script>

<style scoped>
.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
}
.ad > img {
  margin: 0 auto;
}
#header {
  margin: 0% 10%;
}
</style>
