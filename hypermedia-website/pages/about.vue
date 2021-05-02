<template>
  <div>
    <!-- Container class only adds some style properties such as centering text and putting the right margin to containers  -->
    <div class= "container">
      <the-navbar/>
      <header id = "header">
      <h1>Blog of the WebSite</h1>
      <h4>And it's made with Nuxt</h4>
      <div v-if="adUrl" class="ad">
        <img :src="adUrl" alt="Advertisement" />
      </div>
    </header>
    <section class="article-grid">
      <div
        v-for="(article, articleIndex) of articles"
        :key="'art-' + articleIndex"
        class="article"
        @click="goToArticle(`/blog/${article.id}`)"
      >
        <article-mini
          :title="article.title"
          :summary="article.summary"
          :image="article.image"
        ></article-mini>
      </div>
    </section>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import ArticleMini from '~/components/ArticleMini.vue'
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: {
    ArticleMini,
    TheNavbar
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




<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
}

#header{
  margin: 0% 10%;
}

</style>