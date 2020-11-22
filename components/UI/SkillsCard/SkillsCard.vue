<template>
  <div>
    <div class="skill" v-if="language == 'python'">
      <Python class="icon"></Python>
      <span>Python</span>
    </div>
    <div class="skill" v-if="language == 'nodejs'">
      <NodeJs class="icon"></NodeJs>
      <span>NodeJS</span>
    </div>
    <div class="skill" v-if="language == 'vuejs'">
      <VueJs class="icon"></VueJs>
      <span>VueJs</span>
    </div>
    <div class="skill" v-if="language == 'git'">
      <Git class="icon"></Git>
      <span>Git</span>
    </div>
    <div class="skill" v-if="language == 'html'">
      <i class="devicon-html5-plain"></i>
      <span>Html</span>
    </div>
  </div>
</template>

<script>
import Python from "~/assets/images/language/python.svg?inline";
import NodeJs from "~/assets/images/language/nodejs.svg?inline";
import VueJs from "~/assets/images/language/vuejs.svg?inline";
import Git from "~/assets/images/language/git.svg?inline";

export default {
  props: ["language"],
  components: {
    Python,
    Git,
    NodeJs,
    VueJs,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  height: $icon_size;
  width: $icon_size;

  path {
    fill: black;
  }
}

.skill {
  margin-right: 1.1em;
  margin-bottom: 1.1em;
  background-color: #f3f3f4;
  padding: 0.5em 1.2em;
  border-radius: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: black;
  * {
    margin-right: 0.8em;
  }

  i {
    font-size: $icon_size;
  }

  span {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
  }
}
</style>