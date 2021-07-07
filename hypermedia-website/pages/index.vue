<template>
  <div class="body">
    <div class="content place-content-center md:text-xl sm:text-base">
      <!-- here lay all the previews of articles, employess and services -->
      <!-- If you want to put content in here, delete all the text below :) -->
      <div id="ourCompany">
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
            <div class="grid-item">
              <div class="card">
                <img class="card-img" :src="person.image" />
                <div class="card-content">
                  <h1 class="card-header">
                    {{ person.name }}
                    {{ person.surname }}
                  </h1>
                  <p class="card-text">
                    {{ person.biography }}
                  </p>
                  <button
                    class="card-btn"
                    @click="goToPath(`/employee/${person.id}`)"
                  >
                    More<span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 class="gridTitle">Most famous Areas</h1>
        <div class="grid">
          <div
            v-for="(area, index) of areas.slice(0, 3)"
            :key="'area-' + index"
          >
            <div class="grid-item">
              <div class="card">
                <img class="card-img" :src="area.image" />
                <div class="card-content">
                  <h1 class="card-header">{{ area.title }}</h1>
                  <p class="card-text">{{ area.overview }}</p>
                  <button
                    class="card-btn"
                    @click="goToPath(`/area/${area.id}`)"
                  >
                    More <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="gridTitle">Most requested services</h1>
        <div class="grid">
          <div
            v-for="(service, index) of services.slice(0, 3)"
            :key="'area-' + index"
          >
            <div class="grid-item">
              <div class="card">
                <img class="card-img" :src="service.image" />
                <div class="card-content">
                  <h1 class="card-header">{{ service.title }}</h1>
                  <p class="card-text">{{ service.overview }}</p>
                  <button
                    class="card-btn"
                    @click="goToPath(`/services/${service.id}`)"
                  >
                    More <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
  methods: {
    goToPath(path) {
      this.$router.push({ path })
    },
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

.grid-item {
  width: 24rem;
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;
}

.grid-item:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
}

.card-img {
  display: block;
  width: 100%;
  height: 18rem;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}

.card-header {
  font-size: 1.5rem;
  font-weight: 500;
  color: #0d0d0d;
  margin-bottom: 1.5rem;
}

.card-text {
  letter-spacing: 0.1rem;
  line-height: 1.5;
  color: #3d3d3d;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  height: 9rem;
  text-overflow: ellipsis;
  overflow: hidden;
}

.card-btn {
  display: block;
  width: 100%;
  padding: 1.5rem;
  font-size: 2rem;
  text-align: center;
  color: #3363ff;
  background-color: #d8e0fd;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
  letter-spacing: 0.1rem;
}

.card-btn span {
  margin-left: 1rem;
  transition: 0.2s;
}

.card-btn:hover,
.card-btn:active {
  background-color: #c2cffc;
}

.card-btn:hover span,
.card-btn:active span {
  margin-left: 1.5rem;
}

@media only screen and (max-width: 60em) {
  body {
    padding: 3rem;
  }

  .grid {
    grid-gap: 1rem;
  }
  .grid-item {
    width: 20rem;
  }
}

@media only screen and (max-width: 320px) {
  body {
    padding: 3rem;
  }

  .grid {
    grid-gap: 1rem;
  }
  .grid-item {
    width: 20rem;
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
