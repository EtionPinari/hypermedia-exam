<template>
  <!-- Add navbar component here  -->
  <!-- <navbar/> -->
  <div>
    <div class="container">
    <the-navbar />
      <div class="center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo
          voluptates voluptatem quae, eveniet accusantium, reiciendis rerum hic
          non similique dolorum corporis et minus dicta at unde exercitationem
          animi inventore.
        </p>
        <div
          v-for="(person, personIndex) of people"
          :key="'art-' + personIndex"
          class="article"
        >
          <person-profile
            :name="person.name"
            :surname="person.surname"
            :image="person.image"
            :summary="person.summary"
          ></person-profile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonProfile from '../components/PersonProfile.vue'
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: {
    PersonProfile,
    TheNavbar,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const people = data
    return {
      people,
    }
  },
}
</script>

<style scoped>
.center :not(h3) {
  font-size: 1.5vw;
}

.container{
  text-align: left;
}

/* .center{ */
/* margin: 0% 15%; */
/* } */
</style>
