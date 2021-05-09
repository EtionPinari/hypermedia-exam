<template>
  <div class="container">
    <the-navbar />
    <div id="center">
      <div id="logo">
        <Logo />
      </div>
    </div>
    <h1 class="title">hypermedia-website</h1>
    <div class="content">
      <!-- here lay all the previews of articles, employess and services -->
      <!-- If you want to put content in here, delete all the text below :) -->
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
      aspernatur maxime unde, itaque repudiandae voluptas esse est ullam,
      blanditiis dignissimos ex ipsum aperiam nulla! Accusantium alias officiis
      tenetur voluptas est. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quis, veritatis doloremque praesentium illo nobis at asperiores
      nihil libero exercitationem voluptate excepturi nam optio inventore eos
      explicabo fuga doloribus, quaerat eveniet. Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Adipisci aspernatur maxime unde, itaque
      repudiandae voluptas esse est ullam, blanditiis dignissimos ex ipsum
      aperiam nulla! Accusantium alias officiis tenetur voluptas est. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Quis, veritatis
      doloremque praesentium illo nobis at asperiores nihil libero
      exercitationem voluptate excepturi nam optio inventore eos explicabo fuga
      doloribus, quaerat eveniet. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Adipisci aspernatur maxime unde, itaque repudiandae
      voluptas esse est ullam, blanditiis dignissimos ex ipsum aperiam nulla!
      Accusantium alias officiis tenetur voluptas est. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Quis, veritatis doloremque praesentium
      illo nobis at asperiores nihil libero exercitationem voluptate excepturi
      nam optio inventore eos explicabo fuga doloribus, quaerat eveniet. Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Adipisci aspernatur
      maxime unde, itaque repudiandae voluptas esse est ullam, blanditiis
      dignissimos ex ipsum aperiam nulla! Accusantium alias officiis tenetur
      voluptas est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quis, veritatis doloremque praesentium illo nobis at asperiores nihil
      libero exercitationem voluptate excepturi nam optio inventore eos
      explicabo fuga doloribus, quaerat eveniet.
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue'
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: { TheFooter, TheNavbar },
}
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
}
#logo {
  width: 33%;
  margin: auto 30%;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.content {
  align-content: center;
  margin: auto 10%;
}
</style>
