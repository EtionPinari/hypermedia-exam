<template>
  <div class="container">
    <div>
      <the-navbar />
      <Logo />
      <h1 class="title">hypermedia-website</h1>
      <div class="content">
        <!-- here lay all the previews of articles, employess and services -->
        <!-- If you want to put content in here, delete all the text below :) -->
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        aspernatur maxime unde, itaque repudiandae voluptas esse est ullam,
        blanditiis dignissimos ex ipsum aperiam nulla! Accusantium alias
        officiis tenetur voluptas est. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis, veritatis doloremque praesentium illo nobis at
        asperiores nihil libero exercitationem voluptate excepturi nam optio
        inventore eos explicabo fuga doloribus, quaerat eveniet.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        aspernatur maxime unde, itaque repudiandae voluptas esse est ullam,
        blanditiis dignissimos ex ipsum aperiam nulla! Accusantium alias
        officiis tenetur voluptas est. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis, veritatis doloremque praesentium illo nobis at
        asperiores nihil libero exercitationem voluptate excepturi nam optio
        inventore eos explicabo fuga doloribus, quaerat eveniet.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        aspernatur maxime unde, itaque repudiandae voluptas esse est ullam,
        blanditiis dignissimos ex ipsum aperiam nulla! Accusantium alias
        officiis tenetur voluptas est. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis, veritatis doloremque praesentium illo nobis at
        asperiores nihil libero exercitationem voluptate excepturi nam optio
        inventore eos explicabo fuga doloribus, quaerat eveniet.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        aspernatur maxime unde, itaque repudiandae voluptas esse est ullam,
        blanditiis dignissimos ex ipsum aperiam nulla! Accusantium alias
        officiis tenetur voluptas est. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis, veritatis doloremque praesentium illo nobis at
        asperiores nihil libero exercitationem voluptate excepturi nam optio
        inventore eos explicabo fuga doloribus, quaerat eveniet.
        </div>
      <the-footer />
    </div>
  </div>
</template>

<script>
import ArticleMini from '../components/ArticleMini.vue'
import TheFooter from '../components/TheFooter.vue'
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: { ArticleMini, TheFooter, TheNavbar },
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
