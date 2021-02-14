<template>
  <div>
    <NavBarUwU> </NavBarUwU>
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
              <li>Python</li>
              <li>HTML5/CSS3</li>
              <li>Vue.js</li>
            </div>
            <div class="skills_column">
              <li>NodeJs</li>
              <li>Git</li>
            </div>
            <div class="skills_column">
              <li>Express</li>
              <li>Flask</li>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section class="need_a_developer">
        <h1>NEED A DEVELOPER</h1>
        <nuxt-link to="/contact" tag="h3">Let's work together</nuxt-link>
        <div class="boxi"></div>
      </section>
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

