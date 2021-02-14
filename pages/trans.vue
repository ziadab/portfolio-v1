<template>
  <div class="trans_humain">
    <div class="img animated fadeIn">
      <div class="weirdo">
        <RightArrow @click="goBack" class="left_arrow animated fadeI" />
      </div>
    </div>
    <div class="text animated fadeInUp">
      <div class="top_side">
        <div class="title">NEEKO</div>
        <div class="year">2019</div>
      </div>
      <div class="skills">
        <Skill language="react" />
        <Skill language="python" />
      </div>

      <div class="description">
        <h2 class="descriptionTitle">Description</h2>
        <p class="content">
          Nam et erat fringilla, vulputate nisi quis, viverra nibh. Pellentesque
          dolor sem, pulvinar ut varius ut, hendrerit sed lorem. Nulla a sem sed
          urna tempus dapibus. Integer gravida, metus eget facilisis congue,
          orci tortor ornare lectus, non malesuada velit tellus vitae arcu.
          Quisque consectetur diam velit, at sodales odio venenatis id. Aenean
          in auctor lorem. Quisque eu maximus nunc, sit amet ultricies ante.
          Fusce sollicitudin, lectus vel congue rutrum, ex quam congue arcu, at
          ullamcorper eros
        </p>
      </div>

      <div class="whatDidILearn">
        <h2 class="whatDidILearnTitle">What Did I Learn ?</h2>
        <p class="content">
          Nam et erat fringilla, vulputate nisi quis, viverra nibh. Pellentesque
          dolor sem, pulvinar ut varius ut, hendrerit sed lorem. Nulla a sem sed
          urna tempus dapibus. Integer gravida, metus eget facilisis congue,
          orci tortor ornare lectus, non malesuada velit tellus vitae arcu.
          Quisque consectetur diam velit, at sodales odio venenatis id. Aenean
          in auctor lorem. Quisque eu maximus nunc, sit amet ultricies ante.
          Fusce sollicitudin, lectus vel congue rutrum, ex quam congue arcu, at
          ullamcorper eros
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from "~/components/UI/SkillsCard/SkillsCard.vue";
import RightArrow from "~/assets/images/right_arrow.svg?inline";

export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  components: {
    Skill,
    RightArrow,
  },

  // async asyncData({ route, store, params, $axios }) {
  //   const data = await $axios.get(
  //     "https://camille-portfolio.herokuapp.com/projects"
  //   );
  //   console.log(data.data);
  // },
};
</script> 

<style src="./trans.scss" lang="scss" scoped></style>

