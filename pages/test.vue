<template>
  <div>
    <ButtonsUwU label="Name" placeholder="Ur fking name" />
    <Github />
    <Twitter />
    <Instagram />
    <div class="skills">
      <Skill language="nodejs"></Skill>
      <Skill language="vuejs"></Skill>
      <Skill language="python"></Skill>
      <Skill language="html"></Skill>
      <Skill language="git"></Skill>
    </div>

    <div class="banner"></div>
  </div>
</template>

<script>
import Github from "~/components/UI/Icons/Github.vue";
import Twitter from "~/components/UI/Icons/Twitter.vue";
import Instagram from "~/components/UI/Icons/Instagram.vue";
import Skill from "~/components/UI/SkillsCard/SkillsCard.vue";
import anime from "animejs";

export default {
  components: {
    Github,
    Twitter,
    Instagram,
    Skill,
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

.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1em;
}
</style>
