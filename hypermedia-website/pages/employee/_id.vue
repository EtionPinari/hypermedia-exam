<template>
  <section class="container">
    <the-navbar />
    <section>
      <div id="person-details">
        <header id="person">
          <div id="short-description">
            <h1>{{ person.name + ' ' + person.surname }}</h1>
          </div>
          <div id="face">
            <img :src="person.image" />
            <h4>{{ person.summary }}</h4>
          </div>
        </header>
        <hr />
        <article id="biography">
          <h2>{{ person.name + `'s biography` }}</h2>
          <p>
            {{ person.biography }}
          </p>
        </article>
      </div>
    </section>

    <h3>Publications</h3>
    <h4 v-if="person.articles.length === 0">
      {{ person.name + ' ' + person.surname }} has no publications.
    </h4>
    <section class="publications">
      <div
        v-for="(article, articleIndex) of person.articles"
        :key="'Article-' + articleIndex"
        class="publication"
      >
        <div class="content">
          <article-mini
            :id="article.id"
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
    // const { id } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/employee/${route.params.id}`
    )
    const person = data
    return {
      person,
    }
  },
}
</script>

<style lang="scss" scoped>
hr {
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 90%;
  align-self: center;
}
.article-mini {
  border: 0px;
  min-height: 500px;
}

.content {
  display: flex;
  flex-direction: column;
}

.container {
  text-align: center;
}

.publications {
  display: flex;
  justify-content: space-evenly;
}
.publication {
  background-color: $comment-background-color;
  border: 0.1vw solid $main-border-color;
  width: 33%;
}
// in two columns, keep the short description and image on top while the biography on the second row
#person-details {
  display: flex;
  flex-direction: column;
}
// keep the short-description on the left
// add margin on top and bottom
#person {
  display: flex;
  justify-content: space-evenly;
  margin: 3vh 0;
}
//short description with name and surname occupies 1/2 of the width
#person #short-description {
  flex: 1;
  margin: auto 0;
}
//The face occupies 1/2 of the width
#person #face {
  flex: 1;
  margin: auto 0;
  align-items: flex-end;
}
// add rounded borders to the face's image and place it on the right side (float right)
#face > img {
  border: 2px solid $main-border-color;
  border-radius: 5vw;
  float: right;
  margin: 0 4vw;
}
// face container displays the content in a flew-column. So the image is gonna be the first
// displayed and below that the summary
#face {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
// The text below the face (img) of the person is gonna be a certain width
#face > h4 {
  width: 21vw;
  text-align: center;
}
// give some space to the biography paragraph and differentiate it from other components
#biography {
  margin: 3vh 10% 3vh 10%;
}
img {
  width: 13vw;
  height: 13vw;
}
</style>
