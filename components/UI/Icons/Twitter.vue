<template>
  <a href="https://twitter.com/AbouelfarahZiad" target="_blank"
    ><Twitter class="twitter"
  /></a>
</template>

<script>
import Twitter from "~/assets/images/twitter.svg?inline";

export default {
  components: { Twitter }
};
</script>

<style lang="scss" scoped>
.twitter {
  height: $icon_size;
  width: $icon_size;
}
</style>
