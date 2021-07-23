<template>
  <div class="grid-item" @click="navigate(`${id}`)">
    <div class="card">
      <img class="card-img" :src="image" />
      <div class="card-content">
        <h1 class="card-header">
          {{ title }}
        </h1>
        <p class="card-text">
          {{ summary }}
        </p>
        <button class="card-btn" @click="navigate(`${id}`)">
          More<span>&rarr;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RoutingMixin from '~/mixins/routing'
export default {
  mixins: [RoutingMixin],
  props: {
    id: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    summary: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.grid-item {
  width: 24rem;
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
  height: 18rem;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}

.card-header {
  font-size: 1.5rem;
  font-weight: 500;
  color: #0d0d0d;
  margin-bottom: 1.5rem;
  height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-text {
  letter-spacing: 0.1rem;
  line-height: 1.5;
  color: #3d3d3d;
  margin-bottom: 2.5rem;
  font-size: 1.2rem;
  height: 9rem;
<<<<<<< Updated upstream
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
=======
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
>>>>>>> Stashed changes
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
  .grid-item {
    width: 20rem;
  }
}
@media (max-width: 768px) and (min-width: 601px) {
  .grid-item {
    margin-left: 8rem;
  }
}

@media (max-width: 600px) and (min-width: 501px) {
  .grid-item {
    margin-left: 5rem;
  }
}

@media (max-width: 500px) and (min-width: 420px) {
  .grid-item {
    margin-left: 3rem;
  }
}

@media only screen and (max-width: 600px) {
  .grid-item {
    width: 20rem;
  }
  .card-header {
    height: 3rem;
  }
}

@media only screen and (max-width: 900px) {
  .grid-item {
    width: 19rem;
  }

  .card-header {
    margin-bottom: 0rem;
  }
  .card-img {
    height: 14rem;
  }

  .card-text {
    margin-bottom: 0.5rem;
  }
}

@media only screen and (max-width: 320px) {
  .grid-item {
    width: 17rem;
  }
}
</style>
