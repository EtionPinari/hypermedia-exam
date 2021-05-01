<template>
    <!-- Add navbar component here  -->
    <!-- <navbar/> -->
    <div class = "center"> 
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo voluptates voluptatem quae, eveniet accusantium, reiciendis rerum hic non similique dolorum corporis et minus dicta at unde exercitationem animi inventore.
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
</template>

<script>
import PersonProfile from '../components/PersonProfile.vue'
export default {
    components:
    {
        PersonProfile,
    }, 
async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const people = data
    return {
      people,
    }
  }
}
</script>

<style scoped>
* :not(h3) {
    font-size: 1.5vw;
}
.center{
    margin: 0% 15%;
}
</style>