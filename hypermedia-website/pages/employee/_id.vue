<template>
  <section>
    <section>
      <redirectButton :number-of-pages-back="-1" />
      <!-- Person face, short biography and name + surname -->
      <div id="person-details">
        <header id="person">
          <div id="short-description" class="md:text-lg sm:text-base lg:text-2xl">
            <h1>{{ person.name + ' ' + person.surname }}</h1>
          </div>
          <div id="face">
            <img :src="person.image" />
            <h4>{{ person.summary }}</h4>
          </div>
        </header>
        <hr />
        <!-- person's biography section -->
        <article id="biography">
          <h2>{{ person.name + `'s biography` }}</h2>
          <p id="bio">{{ person.biography }}</p>
        </article>
      </div>
    </section>
    <hr />
    <!-- All his publications -->
    <h3 v-if="person.articles.length !== 0">All {{ person.name }}'s articles</h3>
    <h4
      v-if="person.articles.length === 0"
    >{{ person.name + ' ' + person.surname }} has no articles.</h4>
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
          Published {{ new Date(article.createdAt).getDate() }}/{{
          new Date(article.createdAt).getMonth()
          }}/{{ new Date(article.createdAt).getFullYear() }}
        </div>
      </div>
    </section>
    <hr />
    <section class="area-of-work publications">
      <h3 v-if="person.areas.length !== 0">{{ person.name }} works in this area:</h3>
      <div v-for="(area, areaIndex) of person.areas" :key="'Area-' + areaIndex" class="publication">
        <div class="content">
          <area-preview
            :id="area.id"
            :title="area.title"
            :details="area.details"
            :image="area.image"
            :overview="area.overview"
          />
        </div>
      </div>
    </section>
    <hr />
    <h4 v-if="person.services.length === 0">{{ person.name }} does not offer any services</h4>
    <h3 v-if="person.services.length !== 0">{{ person.name }} offers these services:</h3>
    <section class="services-provided area-of-work publications">
      <div
        v-for="(service, serviceIndex) of person.services"
        :key="'service-' + serviceIndex"
        class="publication"
      >
        <div class="content">
          <service-preview
            :id="service.id"
            :title="service.title"
            :details="service.details"
            :image="service.image"
            :overview="service.overview"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ArticleMini from '../../components/ArticleMini.vue'
import AreaPreview from '../../components/AreaPreview.vue'
import redirectButton from '~/components/redirectButton.vue'
export default {
  components: { ArticleMini, redirectButton, AreaPreview },
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
  margin: auto;
}
.article-mini {
  border: 0px;
  min-height: 30vh;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

h4 {
  font-size: 18px;
}

.container {
  text-align: center;
}

.area-of-work > img {
  // width: 145%;
  max-width: 145%;
}
.area-of-work * {
  width: 100%;
  height: auto;
  margin: auto;
}
.publications {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  // margin-bottom: 2vh;
}

@media only screen and (min-width: 601px) {
  .publication {
    // border: 0.1vw solid $main-border-color;
    width: 33%;
  }
  .ServicePreview,
  .service {
    width: inherit;
  }
}
@media only screen and (max-width: 600px) {
  .publication {
    // border: 3px solid $main-border-color;
    width: 90%;
    margin-bottom: 30px;
  }
  .ServicePreview,
  .service {
    width: 100%;
  }
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
#person #face {
  flex: 1;
  margin: auto 0;
}

#bio {
  text-align: left;
}

@media only screen and (min-width: 600px) {
  //The face occupies 1/2 of the width
  #person #face {
    align-items: flex-end;
  }
  #person #short-description {
    flex: 1;
    margin: auto 0;
  }
  // add rounded borders to the face's image and place it on the right side (float right)
  #face > img {
    border: 2px solid $main-border-color;
    border-radius: 5vw;
    float: right;
    margin: 0 4vw;
  }
  // The text below the face (img) of the person is gonna be a certain width
  #face > h4 {
    width: 21vw;
    text-align: center;
  }
  img {
    width: 13vw;
    height: 13vw;
  }
}
@media only screen and (max-width: 600px) {
  //The face occupies 1/2 of the width
  #person #face {
    align-items: center;
  }
  #person #short-description {
    flex: 1;
    margin: auto;
  }
  #face > h4 {
    width: 90%;
    margin: auto;
  }
  img {
    border: 2px solid $main-border-color;
    border-radius: 5vw;
    width: 150px;
    height: auto;
  }
}

// face container displays the content in a flew-column. So the image is gonna be the first
// displayed and below that the summary
#face {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

// give some space to the biography paragraph and differentiate it from other components
#biography {
  margin: 3vh 10% 3vh 10%;
  font-size: 20px;
}
</style>
