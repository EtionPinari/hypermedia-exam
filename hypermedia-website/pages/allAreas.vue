<template>
  <div>
    <header class="titleImage">
      <img
        class="titleImage"
        src="https://b6x0l214gh21wkvwf1simsxr-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/kas_resouce-webinar_selling-msp-services-network-assessments-sales-tool.jpg"
      />
      <div class="display-middle center">
        <span class="text-black" style="font-size: 40px">All our Areas</span>
      </div>
    </header>

    <div class="areasContainer">
      <h2>These are all the areas of our company:</h2>
      <div class="all-areas-container">
        <div v-for="(area, areaIndex) of areas" :key="areaIndex" class="area">
          <div>
            <area-preview
              :id="area.id"
              :title="area.title"
              :details="area.details"
              :image="area.image"
              :overview="area.overview"
            ></area-preview>
          </div>

          <div></div>
        </div>
      </div>
      <div class="control-bar">
        <div v-if="$data.next > 0" class="nav-button sm:w-32" @click="getPrevious()">Previous 6</div>
        <div v-if="showNextButton()" class="nav-button sm:w-32" @click="getNewData()">Next 6</div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaPreview from '../components/AreaPreview.vue'

export default {
  components: {
    AreaPreview,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas`)
    const areas = data
    return {
      areas,
    }
  },
  data() {
    return {
      // default is 0 even though it would be more correct to be equal to store.state.counter
      next: { type: Number, default: () => 0 },
    }
  },
  methods: {
    canShow(areaIndex) {
      if (areaIndex < (this.$store.state.counter + 1) * 6) {
        if (areaIndex >= this.$store.state.counter * 6) {
          return true
        }
      }
      return false
    },
    showNextButton() {
      if ((this.$store.state.counter + 1) * 6 >= this.areas.length) {
        return false
      }
      return true
    },
    getNewData() {
      this.$store.commit('increment')
      this.$data.next = this.$store.state.counter
      // this.$nuxt.refresh()
    },
    getPrevious() {
      this.$store.commit('decrement')
      this.$data.next = this.$store.state.counter
      // this.$nuxt.refresh()
    },
  },
}
</script>

<style scoped>
/* This is the child of the all-people-container */
/* All children can only take up to 50% of the total space and always stay in the center position */
@media only screen and (max-width: 600px) {
  .area {
    flex: 1 0 90%;
    text-align: -webkit-center;
  }
}
@media only screen and (min-width: 601px) {
  .area {
    flex: 1 0 50%;
    text-align: -webkit-center;
  }
  .nav-button {
    width: 5vw;
    height: 2vw;
    text-align: center;
    padding: 0.3vw 0;
    margin: auto 1vw;
  }
}

/* This is the container of all areas, and shows all areas in a row */
.all-areas-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}

.display-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.center {
  text-align: center !important;
}
h2 {
  margin: 1vw;
}
.control-bar {
  justify-content: space-around;
  display: inline-flex;
  margin-top: 2vw;
}
</style>
