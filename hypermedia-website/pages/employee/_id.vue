<template>
  <section class="container">
    <the-navbar />
    <header>
      <h1>{{ person.name + " "+ person.surname }}</h1>
      <h4>{{ person.summary }}</h4>
      <img :src="person.image" />
    </header>
    <article>
      <p>
        {{ person.biography }}
      </p>
    </article>
    <h3>Publications</h3>
    <h4 v-if="person.articles.length === 0">There are no publications</h4>
    <section class="publications">
      <div
        v-for="(article, articleIndex) of person.articles"
        :key="'Article-' + articleIndex"
        class="publication"
      >
        <div class="content">
          <article-mini
            :title="article.title"
            :summary="article.summary"
            :image="article.image"
          ></article-mini>
        </div>
        <div class="date">
          Published the: {{ new Date(article.createdAt).getDate() }}/{{
            new Date(article.createdAt).getMonth()
          }}/{{ new Date(article.createdAt).getFullYear() }}
        </div>
      </div>
    </section>
    <the-footer />
  </section>
</template>

<script>
import ArticleMini from '../../components/ArticleMini.vue'
import TheFooter from '../../components/TheFooter.vue'
import TheNavbar from '../../components/TheNavbar.vue'
export default {
  components: { TheFooter, TheNavbar, ArticleMini },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/employee/${id}`
    )
    console.log('This data is ' + data)
    const person = data
    return {
      person,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

.content{
    font-size: 0.8vw;
}
.publications {
  display: flex;
  justify-content: space-evenly;
}
.publication {
  background-color: $comment-background-color;
  border: 0.1vw solid $main-border-color;
  width: 33%;
  align-items: bottom;
}
img {
  width: 100%;
  max-width: 200px;
}

</style>
