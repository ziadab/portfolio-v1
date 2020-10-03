<template>
  <a href="https://github.com/ziadab" target="_blank"
    ><Github class="github"
  /></a>
</template>

<script>
import Github from "~/assets/images/github.svg?inline";

export default {
  components: { Github }
};
</script>

<style lang="scss" scoped>
.github {
  height: $icon_size;
  width: $icon_size;
}
</style>
