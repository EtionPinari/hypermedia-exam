<template>
  <section class="container">
    <the-navbar />
    <redirect-button :number-of-pages-back="-1" />
    <header>
      <h1 class="w-4/5 text-xl md:text-2xl">{{ article.title }}</h1>
      <h4 class="w-4/5 text-lg font-light md:font-semibold md:text-xl">
        {{ article.summary }}
      </h4>
      <img :src="article.image" :alt="article.summary" />
    </header>
    <article class="w-4/5 text-base md:text-lg">
      <p>
        {{ article.content }}
      </p>
    </article>
    <section class="comments">
      <div class="date">
        Published the: {{ new Date(article.createdAt).getDate() }}/{{
          new Date(article.createdAt).getMonth()
        }}/{{ new Date(article.createdAt).getFullYear() }}
      </div>
    </section>
    <the-footer />
  </section>
</template>

<script>
import TheFooter from '../../components/TheFooter.vue'
import TheNavbar from '../../components/TheNavbar.vue'
import redirectButton from '~/components/redirectButton.vue'
export default {
  components: { TheFooter, TheNavbar, redirectButton },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/article/${id}`
    )
    const article = data
    return {
      article,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
.container .comments {
  text-align: left;
  margin-left: 3vh;
  font-weight: 500;
}

header > img {
  width: 100%;
  max-width: 400px;
  margin: 2vh auto;
}
h1 {
  margin: auto;
  width: 90%;
}
h4 {
  margin: auto;
  width: 85%;
}
article {
  margin: auto;
  text-align: center;
}
</style>
