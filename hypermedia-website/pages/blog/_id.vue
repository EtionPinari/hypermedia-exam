<template>
  <section class="container">
     <header>
      <h1>{{ article.title }}</h1>
      <h4>{{ article.summary }}</h4>
      <img :src="article.image" :alt="article.summary" />
    </header>
    <article>
      <p>
        {{ article.content }}
      </p>
    </article>
    <section class="comments">
      <h3>Comments</h3>
      <h4 v-if="article.comments.length === 0">There are no comments</h4>
      <div
        v-for="(comment, commentIndex) of article.comments"
        :key="'comments-' + commentIndex"
        class="comment"
      >
        <div class="content">
          {{ comment.content }}
        </div>
        <div class="date">
          Posted on: {{ new Date(comment.createdAt).getDate() }}/{{
            new Date(comment.createdAt).getMonth()
          }}/{{ new Date(comment.createdAt).getFullYear() }}
        </div>
      </div>
    </section>
    <the-footer/>
  </section>
</template>


<script>
import TheFooter from '../../components/TheFooter.vue'
export default {
  components: { TheFooter },
  async asyncData({ $axios, route }) {
    const { id } = route.params
    console.log('this url', process.env.BASE_URL)
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

<style lang = "scss" scoped>
.container{
  text-align: center;
}
.container .comments{
  text-align: left;
}
.comment{
  background-color: $comment-background-color;
  border: 0.1vw solid $main-border-color;
}
img {
  width: 100%;
  max-width: 400px;
}
</style>
