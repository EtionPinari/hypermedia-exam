<template>
  <div class="content-center">
    <div class="container">
      <the-navbar />
      <Nuxt />
      <the-footer />
    </div>
    <chat :chat-list="list" />
  </div>
</template>

<script>
import Chat from '~/components/Chat'
import MMCCMixin from '~/mixins/mmcc-mixin'
export default {
  components: {
    Chat,
  },
  mixins: [MMCCMixin],
}
</script>

<style lang="scss">
/* THIS IS THE BACKGROUND CLASS */

html {
  background-color: $secondary-bg-color;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
header > img {
  padding: 1vh;
}

.titleImage {
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 100%;
  filter: grayscale(60%);
  object-fit: cover;
  cursor: default;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
@media only screen and (min-width: 601px) {
  .container {
    background-color: $main-bg-color;
    text-align: center;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 601px) {
  .container {
    background-color: $main-bg-color;
    text-align: center;
    margin: 0 auto;
  }
}

.center {
  width: 80%;
  margin: auto;
}
/* If you want to use navigation buttons they will use this style */
.nav-button {
  background-color: $main-button-color;
  height: 100%;
  transition-duration: 0.4s;
  padding: 5%;
  cursor: pointer;
}
.nav-button:hover {
  background-color: $main-highlight-color; /* Green */
  color: white;
}

// For articles, we make the image's shadow less intense in a transition of 0.3s
.article-mini > .img > #img-shadow:hover,
.PersonProfile {
  transition: 0.3s;
}
.AreaPreview {
  transition: 0.3s;
}
.ServicePreview {
  transition: 0.3s;
}
.article-mini > .img > #img-shadow:hover,
.PersonProfile:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.AreaPreview:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.display-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.ServicePreview:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

/* TEXT SCALINGS WITH VIEW WIDTH */
a,
h5 {
  font-size: 0.87em;
}
a {
  text-decoration: none;
  color: black;
}
/* END OF TEXT SCALINGS WITH VIEW WIDTH */
</style>
