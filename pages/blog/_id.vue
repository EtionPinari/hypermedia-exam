<template>
  <section>
    <redirect-button :number-of-pages-back="-1" />
    <header>
      <h1 class="w-4/5 text-xl md:text-2xl">{{ article.title }}</h1>
      <h4 class="w-4/5 text-lg font-light md:font-semibold md:text-xl">
        {{ article.summary }}
      </h4>
      <img :src="article.image" :alt="article.summary" />
    </header>
    <article class="w-4/5 text-base md:text-lg">
      <p id="content" v-html="article.content">
        {{ article.content }}
      </p>
      <div id="content" class="date">
        Published on: {{ new Date(article.createdAt).getDate() }}/{{
          new Date(article.createdAt).getMonth()
        }}/{{ new Date(article.createdAt).getFullYear() }}
      </div>
    </article>
    <br />
    <h3>Get to know more about the author of this article down below:</h3>
    <section class="flex">
      <div class="flex-item">
        <person-profile
          :id="article.person.id"
          :name="article.person.name"
          :surname="article.person.surname"
          :image="article.person.image"
        />
      </div>
    </section>
  </section>
</template>

<script>
import redirectButton from '~/components/redirectButton.vue'
import PersonProfile from '~/components/PersonProfile.vue'
export default {
  components: { redirectButton, PersonProfile },
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
  head() {
    return {
      title: 'Hatgemini- ' + this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.summary,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.flex {
  display: inline-flex;
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
}

.date {
  margin-top: 10px;
}

#content {
  text-align: left;
}
</style>
