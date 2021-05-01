<template>
  <section class="container">
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit laborum non excepturi ipsum sed magni eligendi, autem debitis quas! Culpa molestiae repellendus assumenda quasi nostrum quia corrupti rerum animi praesentium.</p>
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
  </section>
</template>
<script>
export default {
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

