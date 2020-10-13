<template>
  <div>
    <NavBarUwU />
    <div>
      <section id="about">
        <div class="about">
          <h5>FEW WORDS ABOUT ME</h5>
          <div class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
            volutpat augue, a ullamcorper tortor. In hac habitasse platea
            dictumst. Duis feugiat porttitor tellus ut fermentum. Nullam lacinia
            sem id.
          </div>
          <div class="young">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
            volutpat augue, a ullamcorper tortor. In hac habitasse platea
            dictumst. Duis feugiat porttitor tellus ut fermentum. Nullam lacinia
            sem id.
          </div>
        </div>
        <hr />
      </section>
      <section id="skills">
        <div class="skills">
          <h5>SKILLS</h5>
          <div class="skills_container">
            <div class="skills_column">
              <li>JavaScript</li>
              <li>MongoDb</li>
              <li>React.js</li>
            </div>
            <div class="skills_column">
              <li>JavaScript</li>
              <li>MongoDb</li>
              <li>React.js</li>
            </div>
            <div class="skills_column">
              <li>JavaScript</li>
              <li>MongoDb</li>
            </div>
            <div class="skills_column">
              <li>JavaScript</li>
              <li>MongoDb</li>
            </div>
          </div>
        </div>
      </section>
      <section class="need_a_developer"></section>
    </div>
  </div>
</template>

<script>
import NavBarUwU from "~/components/UI/NavBarUwU";

export default {
  components: {
    NavBarUwU,
  },
};
</script>

<style src="./about.scss" lang="scss" scoped />

