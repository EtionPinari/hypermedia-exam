<template>
  <div class="body">
    <div class="content place-content-center md:text-xl sm:text-base">
      <!-- here lay all the previews of articles, employess and services -->
      <div id="ourCompany">
        <div class="image img">
          <br />
          <br />
          <br />
          <br />
          <h3 id="welcome">Welcome to Hatgemini!</h3>
        </div>
        Hatgemini is a global leader in consulting, digital transformation,
        technology and engineering services. <br />The Group is at the forefront
        of innovation to address the entire breadth of clients’ opportunities in
        the evolving world of cloud, digital and platforms.
      </div>
      <div class="gridContainer">
        <h4 class="gridTitle">Our employees of the month</h4>
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

        <h4 class="gridTitle">Areas in evidence</h4>
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
        <h4 class="gridTitle">Services in evidence</h4>
        <div class="grid">
          <div
            v-for="(service, serviceIndex) of services.slice(0, 3)"
            :key="'service-' + serviceIndex"
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
export default {
  components: { HomePageCard },
  async asyncData({ $axios }) {
    const [people, areas, services] = await Promise.all([
      $axios.get(`${process.env.BASE_URL}/api/people`),
      $axios.get(`${process.env.BASE_URL}/api/areas`),
      $axios.get(`${process.env.BASE_URL}/api/services`),
    ])
    return {
      people: people.data,
      areas: areas.data,
      services: services.data,
    }
  },
  head: {
    title: 'Innovation technologies - Hatgemini',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          ' Hatgemini is a global leader in consulting, digital transformation, technology and engineering services.',
      },
    ],
  },
}
</script>

<style scoped>
#welcome {
  color: white;
}

.img {
  cursor: default;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url('https://www.concentrix.com/wp-content/uploads/2017/09/Workplace-Diversity.jpg');
  text-align: center;
  margin: auto;
  background-position: center top;
  margin-top: 2vh;
  margin-bottom: 1vh;
}
@media only screen and (min-width: 601px) {
  .img {
    width: 60%;
    min-width: 350px;
    min-height: 250px;
  }
}
@media only screen and (max-width: 600px) {
  .img {
    width: 100%;
    min-width: 250px;
    min-height: 150px;
  }
}
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
  font-size: 20px;
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
  font-size: 38px;
}

.grid {
  display: grid;
  width: 90%;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  align-items: start;
  margin: 5%;
  margin-top: 40px;
  padding-top: 3px;
  /* overflow: hidden; */
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
  .gridContainer {
    width: 100%;
    margin-left: 1px;
  }

  .grid {
    margin-left: 15px;
    margin-right: 0px;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }
}

@media only screen and (max-width: 420px) {
  .gridContainer {
    width: 100%;
    margin-left: 1px;
  }
}

@media only screen and (min-width: 760px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }
}

@media only screen and (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  }
}
</style>
