<template>
  <div style="width: 100%">
    <Nuxt />
  </div>
</template>


<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
