<template>
  <a href="https://www.instagram.com/zain.abouelfarah/" target="_blank"
    ><Instagram class="instagram"
  /></a>
</template>

<script>
import Instagram from "~/assets/images/instagram.svg?inline";

export default {
  components: { Instagram }
};
</script>

<style lang="scss" scoped>
.instagram {
  height: $icon_size;
  width: $icon_size;
}
</style>
