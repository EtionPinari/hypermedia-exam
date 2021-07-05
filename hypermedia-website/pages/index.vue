<template>
  <div class="body">
    <div class="content place-content-center md:text-xl sm:text-base">
      <!-- here lay all the previews of articles, employess and services -->
      <!-- If you want to put content in here, delete all the text below :) -->
      <div id="ourCompany">
        Hatgemini was established in 1996 to provide information technology
        solutions for small to medium-sized businesses. Our mission from the
        very first day has been to cultivate professional relationships with our
        clients to provide effective and reliable information technology
        solutions for their needs. <br /><br />
        The team at Hatgemini is equipped with a highly developed skillset
        developed over decades of experience not only in information technology
        but also in business processes across a range of industry sectors. This
        business experience makes us uniquely positioned to offer solutions
        promising greater operational efficiency, productivity gains and cost
        savings for each of our clients, regardless of their industry.<br /><br />
        As an established technology-intensive company, we pride ourselves on
        providing a comprehensive suite of solutions comprising of
        infrastructure consultancy, on/offsite services, custom software and web
        development, software and web application testing, and enterprise
        architecture consulting. Our team consistently delivers state-of-the-art
        solutions in various areas including, but not limited to, integrated
        business solutions, system applications, product development,
        Internet/Intranet applications and communication & network management
        services. At Hatgemini, we guarantee rapid, reliable and robust
        information technology solutions that work.
      </div>
      <div class="ourEmployees">
        <h1 class="topEmployees">Our employess of the month</h1>
        <div class="grid">
          <div class="grid-item">
            <div class="card">
              <img
                class="card-img"
                src="https://b6x0l214gh21wkvwf1simsxr-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/kas_resouce-webinar_selling-msp-services-network-assessments-sales-tool.jpg"
                alt="Rome"
              />
              <div class="card-content">
                <h1 class="card-header">Rome</h1>
                <p class="card-text">
                  Rome is known for its stunning <strong> architecture</strong>,
                  with the Colleseum, Pantheon, and Trevi Fountain as the main
                  attractions.
                </p>
                <button class="card-btn">Visit <span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="card">
              <img
                class="card-img"
                src="https://www.bamboohr.com/blog/wp-content/uploads/Employee_Development_Plans_4_Winning_Steps_to_Engage_Employees700x525.png"
                alt="Grand Canyon"
              />
              <div class="card-content">
                <h1 class="card-header">Grand</h1>
                <p class="card-text">
                  One of the world's natural wonders, the iconic Grand Canyon
                  draws oohs and aahs from visitors perched at the edge of its
                  <strong>towering cliffs</strong>.
                </p>
                <button class="card-btn">Visit <span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="card">
              <img class="card-img" alt="Maldives" />
              <div class="card-content">
                <h1 class="card-header">Maldives</h1>
                <p class="card-text">
                  The Maldives are known for their
                  <strong>natural environment</strong> including the blue ocean,
                  white beaches, and clean air, attracting tourists.
                </p>
                <button class="card-btn">Visit <span>&rarr;</span></button>
              </div>
            </div>
          </div>
        </div>
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

.ourEmployees {
  background-color: white;
  padding-top: 5px;
  width: 111.1%;
  margin-left: -5.5%;
  padding-bottom: 1px;
}

#ourCompany {
  margin-bottom: 10px;
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
  margin: auto 5%;
}

* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: left;
}

.topEmployees {
  margin-top: 20px;
  text-align: center;
}

.grid {
  display: grid;
  width: 90%;
  grid-gap: 8rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  align-items: start;
  margin-top: 40px;
  margin: 5%;
}

.grid-item {
  width: 25rem;
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;
}

.grid-item:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
}

.card-img {
  display: block;
  width: 100%;
  height: 15rem;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
}

.card-header {
  font-size: 3rem;
  font-weight: 500;
  color: #0d0d0d;
  margin-bottom: 1.5rem;
}

.card-text {
  letter-spacing: 0.1rem;
  line-height: 1.5;
  color: #3d3d3d;
  margin-bottom: 2.5rem;
}

.card-btn {
  display: block;
  width: 100%;
  padding: 1.5rem;
  font-size: 2rem;
  text-align: center;
  color: #3363ff;
  background-color: #d8e0fd;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
  letter-spacing: 0.1rem;
}

.card-btn span {
  margin-left: 1rem;
  transition: 0.2s;
}

.card-btn:hover,
.card-btn:active {
  background-color: #c2cffc;
}

.card-btn:hover span,
.card-btn:active span {
  margin-left: 1.5rem;
}

@media only screen and (max-width: 60em) {
  body {
    padding: 3rem;
  }

  .grid {
    grid-gap: 1rem;
  }
  .grid-item {
    width: 20rem;
  }
}

@media only screen and (max-width: 320px) {
  body {
    padding: 3rem;
  }

  .grid {
    grid-gap: 1rem;
  }
  .grid-item {
    width: 20rem;
  }

  .ourEmployees {
    width: 105%;
  }

  .topEmployees {
    margin-left: 20px;
  }

  #ourCompany {
    margin-left: 4px;
  }
}
</style>
