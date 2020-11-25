<template>
  <div class="trans_humain">
    <div class="img animated fadeIn">
      <RightArrow @click="goBack" class="left_arrow animated fadeI" />
    </div>
    <div class="text animated fadeInUp">
      <div class="top_side">
        <div class="title">NEEKO - The Youtube Converture</div>
        <div class="year">2019</div>
      </div>
      <div class="skills">
        <Skill language="nodejs" />
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
};
</script> 

<style lang="scss" scoped>
.trans_humain {
  display: flex;
  width: 100%;
  height: 100vh;
}
.img {
  width: 40%;
  //position: fixed;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0)),
    url("https://cdna.artstation.com/p/assets/images/images/027/761/124/large/dawn-ang-dawnbringer-neeko-final.jpg?1592521828")
      no-repeat;
  height: 100%;
  background-size: cover;
  background-position: 65%;
}

.left_arrow {
  transform: rotate(180deg);
  margin: 15px;
  cursor: pointer;
  path {
    fill: #fff;
  }
}

.text {
  width: 60%;
  overflow: auto;
  padding: 30px 30px 30px 60px;
  animation-duration: 1s;
  animation-delay: 1s;
  // position: absolute;
  // left: 40%;
}

.title {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  padding-top: 50px;
}

.year {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  margin-top: 5px;
}

.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
}

.description {
  margin-top: 50px;

  .content {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }
}

.descriptionTitle {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  margin-top: 0px;
}

.whatDidILearn {
  margin: 50px 0 70px 0;

  .content {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }
}

.whatDidILearnTitle {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  margin-top: 0px;
}
</style>
