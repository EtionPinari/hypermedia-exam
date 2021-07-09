<template>
  <div>
    <h1
      class="title lg:text-6xl place-content-center lg:my-12 md:text-xl md:my-8 sm:text-lg sm:my-6"
    >Hatgemini</h1>
    <div class="content place-content-center md:text-xl sm:text-base">
      <!-- here lay all the previews of articles, employess and services -->
      <!-- If you want to put content in here, delete all the text below :) -->
      <div id="our-company">
        Hatgemini is a global leader in consulting, digital transformation, technology and engineering services.
        <br />The Group is at the forefront of innovation to address the entire breadth of clients’ opportunities in the evolving world of cloud,
        digital and platforms.
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style scoped>
.container {
  justify-content: center;
  align-items: center;
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
  margin: auto 10%;
}
</style>
