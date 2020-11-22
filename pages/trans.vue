<template>
  <div class="trans_humain">
    <div class="img"></div>
    <div class="text">
      <div class="top_side">
        <div class="title">NEEKO - The Youtube Converture</div>
        <div class="year">2019</div>
      </div>
      <div class="skills">
        <Skill language="nodejs" />
        <Skill language="python" />
      </div>
    </div>
  </div>
</template>

<script>
import Skill from "~/components/UI/SkillsCard/SkillsCard.vue";
export default {
  components: {
    Skill,
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

.text {
  width: 60%;
  overflow: auto;
  padding: 30px 30px 30px 60px;
  // position: absolute;
  // left: 40%;
}

.title {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
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
  margin-top: 1em;
}
</style>
