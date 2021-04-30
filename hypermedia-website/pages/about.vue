<template>
  <article-mini/>
</template>

<script>
import ArticleMini from '../components/ArticleMini.vue'
import axios from 'axios'
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
//   methods: {
//     goToArticle(path) {
//       this.$router.push({ path })
//     },
//   },
}
</script>

<style>

</style>