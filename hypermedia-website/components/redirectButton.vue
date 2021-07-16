<template>
  <div
    class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/5 w-1/2"
    @click="goBack(`${numberOfPagesBack}`)"
  >
    Go back
  </div>
</template>

<script>
export default {
  props: {
    numberOfPagesBack: { type: Number, default: () => -2 },
  },
  methods: {
    goBack(numberOfPagesBack) {
      this.$router.go(numberOfPagesBack)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  position: sticky;
  position: -webkit-sticky;
  top: 65px;
}
</style>
