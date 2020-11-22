<template>
  <nuxt-link to="/trans" tag="div" class="neeko">
    <div class="thla">
      <div class="up">2019</div>
      <div class="down">NEEKO - THE YOUTUBE CONVERTURE</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style scoped>
.neeko {
  width: calc(50% - 70px);
  margin: 15px;
  height: 650px;
  position: relative;
}
.thla {
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0)),
    url("https://cdna.artstation.com/p/assets/images/images/027/761/124/large/dawn-ang-dawnbringer-neeko-final.jpg?1592521828")
      no-repeat;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.down {
  color: white;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 60%;
  margin: 45px 25px;
  cursor: pointer;
}

.up {
  color: white;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;
  margin: 30px;
}

@media screen and (max-width: 600px) {
  .neeko {
    width: 90%;
    height: 350px;
    margin: 15px auto;
  }
}
</style>