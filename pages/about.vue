<template>
  <div>
    <header class="center">
      <div>
        <span class="text-black" style="font-size: 40px"><h1> ABOUT US</h1></span>
      </div>
    </header>
    <div class="body">
      <div
        id="text"
        class="content place-content-center md:text-xl sm:text-base"
      >
        Hatgemini was established in 1996 to provide information technology
        solutions for small to medium-sized businesses. Our mission from the
        very first day has been to cultivate professional relationships with our
        clients to provide effective and reliable information technology
        solutions for their needs.
        <br />
        <br />The team at Hatgemini is equipped with a highly developed skillset
        developed over decades of experience not only in information technology
        but also in business processes across a range of industry sectors. This
        business experience makes us uniquely positioned to offer solutions
        promising greater operational efficiency, productivity gains and cost
        savings for each of our clients, regardless of their industry.
        <br />
        <br />As an established technology-intensive company, we pride ourselves
        on providing a comprehensive suite of solutions comprising of
        infrastructure consultancy, on/offsite services, custom software and web
        development, software and web application testing, and enterprise
        architecture consulting. Our team consistently delivers state-of-the-art
        solutions in various areas including, but not limited to, integrated
        business solutions, system applications, product development,
        Internet/Intranet applications and communication & network management
        services. At Hatgemini, we guarantee rapid, reliable and robust
        information technology solutions that work.
        <br />
        We thank our developers:
        <br />
        <a href="https://github.com/EtionPinari" target="_blank">
          Etion Pinari
        </a>
        <br />
        <a href="https://github.com/kummy98" target="_blank">
          Pardeep Kumar
        </a>
        <br />
        <a href="https://github.com/Lisaco97" target="_blank">
          Lisa Cosaro
        </a>
        <br />
        <a href="https://github.com/MichaelRonzulli" target="_blank">
          Michael Ronzulli
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'About Us- Hatgemini',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Hatgemini was established in 1996 to provide information technology solutions for small to medium-sized businesses. Our mission from the very first day has been to cultivate professional relationships with our clients to provide effective and reliable information technology solutions for their needs.',
      },
    ],
  },
}
</script>

<style scoped>
.content {
  margin: 4.5%;
}

#text {
  text-align: left;
  font-size: 20px;
}
</style>
