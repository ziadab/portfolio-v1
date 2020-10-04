<template>
  <div class="page">
    <img src="~@/assets/images/down.svg" alt="Hmm" id="down" />
    <NavBarUwU />
    <!-- <img class="CircleUp" src="~@/assets/images/CircleUp.png" alt="Hmm" />
    <img class="CircleDown" src="~@/assets/images/CircleDown.png" alt="Hmm" /> -->
    <div class="container">
      <div class="mini_container">
        <div>
          <div class="myName">Hi! I'm Ziad Abouelfarah</div>
          <div>And I'm a</div>
          <div class="pro">
            <vue-typed-js
              style="justify-content: center"
              :strings="['Developer', 'Designer', 'League Lover']"
              :loop="true"
              :smartBackspace="false"
            >
              <div class="typing"></div>
            </vue-typed-js>
          </div>
        </div>
        <div class="button_section">
          <nuxt-link to="/projects" tag="button" class="projectBtn"
            >View Projects</nuxt-link
          >
          <nuxt-link to="/about" tag="button" class="AboutMeBtn"
            >Read About Me</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarUwU from "~/components/UI/NavBarUwU";
export default {
  components: {
    NavBarUwU
  }
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
