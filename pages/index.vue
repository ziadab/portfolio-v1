<template>
  <div class="page">
    <img src="~@/assets/images/down.svg" alt="Hmm" id="down" />
    <NavBarUwU> </NavBarUwU>
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
    NavBarUwU,
  },
  // transition: {
  //   enterActiveClass: "animated fadeInUp",
  //   leaveActiveClass: "animated fadeInUp",
  //   mode: "out-in",
  // },
  transition(to, from) {
    // console.log({ to });
    // console.log({ from });
    if (to.name == "about") {
      return {
        enterActiveClass: "animated fadeInUp",
        leaveActiveClass: "animated fadeOutUp",
        mode: "out-in",
      };
    } else if (to.name == "projects") {
      return {
        enterActiveClass: "animated fadeInDown",
        leaveActiveClass: "animated fadeOutDown",
        mode: "out-in",
      };
    } else if (from && from.name == "about") {
      return {
        leaveActiveClass: "animated fadeOutUp",
        enterActiveClass: "animated fadeInDown",
        mode: "out-in",
      };
    } else if (from && from.name == "projects") {
      return {
        leaveActiveClass: "animated fadeOutDown",
        enterActiveClass: "animated fadeInDown",
        mode: "out-in",
      };
    }
  },
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
