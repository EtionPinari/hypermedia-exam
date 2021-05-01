<template>
  <div>
    <div>
        
      <button >
        <nuxt-link to ="/">
          Go to homepage
        </nuxt-link>
      </button>
      <br>
        Lorem lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora atque ducimus enim ipsum. Temporibus minus quod asperiores. Porro inventore ullam voluptatem, architecto doloremque saepe minima dolor necessitatibus dolorem officia! Cumque.
    </div>

    <!-- Container class only adds some style properties -->
    <div class= "container">
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
export default {
  components: {
    ArticleMini,
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