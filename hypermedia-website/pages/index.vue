<template>
  <div class="body">
    <div class="content place-content-center md:text-xl sm:text-base">
      <!-- here lay all the previews of articles, employess and services -->
      <!-- If you want to put content in here, delete all the text below :) -->
      <div id="ourCompany">
        <article-mini
          :id="articles[2].id"
          :title="articles[2].title"
          :summary="articles[2].summary"
          :image="articles[2].image"
        ></article-mini>
        Hatgemini was established in 1996 to provide information technology
        solutions for small to medium-sized businesses. Our mission from the
        very first day has been to cultivate professional relationships with our
        clients to provide effective and reliable information technology
        solutions for their needs. <br /><br />
        The team at Hatgemini is equipped with a highly developed skillset
        developed over decades of experience not only in information technology
        but also in business processes across a range of industry sectors. This
        business experience makes us uniquely positioned to offer solutions
        promising greater operational efficiency, productivity gains and cost
        savings for each of our clients, regardless of their industry.<br /><br />
        As an established technology-intensive company, we pride ourselves on
        providing a comprehensive suite of solutions comprising of
        infrastructure consultancy, on/offsite services, custom software and web
        development, software and web application testing, and enterprise
        architecture consulting. Our team consistently delivers state-of-the-art
        solutions in various areas including, but not limited to, integrated
        business solutions, system applications, product development,
        Internet/Intranet applications and communication & network management
        services. At Hatgemini, we guarantee rapid, reliable and robust
        information technology solutions that work.
      </div>
      <div class="gridContainer">
        <h1 class="gridTitle">Our employess of the month</h1>
        <div class="grid">
          <div
            v-for="(person, index) of people.slice(0, 3)"
            :key="'person-' + index"
          >
            <home-page-card
              :id="'/employee/' + person.id"
              :title="person.name + ' ' + person.surname"
              :summary="person.biography"
              :image="person.image"
            ></home-page-card>
          </div>
        </div>

        <h1 class="gridTitle">Most famous Areas</h1>
        <div class="grid">
          <div
            v-for="(area, index) of areas.slice(0, 3)"
            :key="'area-' + index"
          >
            <home-page-card
              :id="'/area/' + area.id"
              :title="area.title"
              :summary="area.overview"
              :image="area.image"
            ></home-page-card>
          </div>
        </div>
        <h1 class="gridTitle">Most requested services</h1>
        <div class="grid">
          <div
            v-for="(service, index) of services.slice(0, 3)"
            :key="'area-' + index"
          >
            <home-page-card
              :id="'/service/' + service.id"
              :title="service.title"
              :summary="service.overview"
              :image="service.image"
            ></home-page-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageCard from '~/components/HomePageCard.vue'
import ArticleMini from '~/components/ArticleMini.vue'
export default {
  components: { ArticleMini, HomePageCard },
  async asyncData({ $axios }) {
    const [people, areas, services, articles] = await Promise.all([
      $axios.get(`${process.env.BASE_URL}/api/people`),
      $axios.get(`${process.env.BASE_URL}/api/areas`),
      $axios.get(`${process.env.BASE_URL}/api/services`),
      $axios.get(`${process.env.BASE_URL}/api/articles`),
    ])
    return {
      people: people.data,
      areas: areas.data,
      services: services.data,
      articles: articles.data,
    }
  },
}
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
}

.gridContainer {
  padding-top: 5px;
  width: 111.1%;
  margin-left: -5.5%;
  padding-bottom: 1px;
}

#ourCompany {
  margin-bottom: 10px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}

.content {
  align-content: center;
  margin: auto 5%;
}

* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: left;
}

.gridTitle {
  margin-top: 20px;
  text-align: center;
}

.grid {
  display: grid;
  width: 90%;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  align-items: start;
  margin-top: 40px;
  margin: 5%;
  overflow: hidden;
}

@media only screen and (max-width: 60em) {
  body {
    padding: 3rem;
  }

  .grid {
    grid-gap: 1rem;
  }
}

@media only screen and (max-width: 320px) {
  body {
    padding: 3rem;
  }

  .grid {
    grid-gap: 1rem;
  }

  .ourEmployees {
    width: 105%;
  }

  .topEmployees {
    margin-left: 20px;
  }

  #ourCompany {
    margin-left: 4px;
  }
}
</style>
