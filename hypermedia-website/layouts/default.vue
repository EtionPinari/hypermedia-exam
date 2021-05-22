<template>
  <div>
    <Nuxt />
  </div>
</template>

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

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0.5vw 8% 0.5vw 8%;
  background-color: $main-bg-color;
  text-align: center;
}
.center {
  margin: 0 auto;
  width: 80%;
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
.article-mini > .img > #img-shadow:hover,
.PersonProfile:hover {
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
