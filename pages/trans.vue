<template>
  <div>
    <nuxt-link tag="button" to="/about"> GO lhih</nuxt-link>
    <h5>shkqhqskqhqksh</h5>
  </div>
</template>

<script>
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>