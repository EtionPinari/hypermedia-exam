<template>
  <div class="container">
    <the-navbar />
    <div id="center">
      <div id="logo">
        <Logo />
      </div>
    </div>
    <h1 class="title">Hatgemini-website</h1>
    <div class="content">
      <!-- here lay all the previews of articles, employess and services -->
      <!-- If you want to put content in here, delete all the text below :) -->
      <div id="our-company">
        Hatgemini was established in 1996 to provide information technology
        solutions for small to medium-sized businesses. Our mission from the
        very first day has been to cultivate professional relationships with our
        clients to provide effective and reliable information technology
        solutions for their needs. The team at Hatgemini is equipped with a
        highly developed skillset developed over decades of experience not only
        in information technology but also in business processes across a range
        of industry sectors. This business experience makes us uniquely
        positioned to offer solutions promising greater operational efficiency,
        productivity gains and cost savings for each of our clients, regardless
        of their industry. As an established technology-intensive company, we
        pride ourselves on providing a comprehensive suite of solutions
        comprising of infrastructure consultancy, on/offsite services, custom
        software and web development, software and web application testing, and
        enterprise architecture consulting. Our team consistently delivers
        state-of-the-art solutions in various areas including, but not limited
        to, integrated business solutions, system applications, product
        development, Internet/Intranet applications and communication & network
        management services. At Hatgemini, we guarantee rapid, reliable and
        robust information technology solutions that work.
      </div>
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
