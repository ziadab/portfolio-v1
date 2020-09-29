<template>
  <div>
    <NavBarUwU />
    <div class="container">
      <div class="background_top"></div>
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
export default {};
</script>

<style lang="scss" scoped>
.background_top {
  position: absolute;
  background: url("~assets/svgs/circle.svg");
}

.container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
  font-size: 48px;
  font-family: "Metropolis";
  font-weight: 300;
  flex-direction: column;
}

.container div {
  margin-bottom: 1rem;
}

.pro {
  height: 72px;
}

.typing {
  font-size: 64px;
  font-family: "Metropolis";
  font-weight: 700;
  line-height: 72px;
}

button {
  padding: 12px 38px;
  border-radius: 24px;
  border: none;
  font-size: 24px;
  font-family: "Metropolis";
  font-weight: 500;
  cursor: pointer;
}

.projectBtn {
  background-color: black;
  color: white;
}

.AboutMeBtn {
  border: black solid 2px;
  background-color: transparent;
}
</style>