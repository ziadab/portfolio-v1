<template>
  <div>
    <ButtonsUwU label="Name" placeholder="Ur fking name" />
    <Github />
    <Twitter />
    <Instagram />
    <div class="banner"></div>
  </div>
</template>

<script>
import Github from "~/components/UI/Icons/Github.vue";
import Twitter from "~/components/UI/Icons/Twitter.vue";
import Instagram from "~/components/UI/Icons/Instagram.vue";
import anime from "animejs";

export default {
  components: {
    Github,
    Twitter,
    Instagram,
  },
  methods: {
    animatesircles() {
      anime({
        targets: ".banner",
        backgroundColor: "#6c6c6c",
        easing: "linear",
        delay: 1000,
        duration: 1000,
      });
    },
  },
  mounted() {
    this.animatesircles();
  },
};
</script>

<style scoped>
.banner {
  height: 50px;
  width: 50px;
  background-color: aqua;
}
</style>
