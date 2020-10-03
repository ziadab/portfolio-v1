<template>
  <div>
    <NavBarUwU />
    <div class="container">
      <div class="left_side">
        <div class="mini_left_container">
          <div>
            <div class="Header">Let’s collaborate</div>
            <div class="mail">zain.fake@gmail.com</div>
          </div>
          <div class="find_me">
            <div>Find Me</div>
            <div class="icons">
              <Instagram />
              <Github />
              <Twitter />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="right_side">
        <div class="mini_right_container">
          <span class="say_hello">Say Hello</span>
          <div style="margin-top: 20px">
            <ButtonsUwU label="name" placeholder="Your name" />
            <ButtonsUwU label="email" placeholder="Email address" />
          </div>
          <div class="subject_message">
            <ButtonsUwU label="subject" placeholder="Your subject" />
            <ButtonsUwU
              style="margin-top: 15px"
              label="Message"
              placeholder="Start typing here"
            />
          </div>
          <div class="submit_button">
            Submit
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarUwU from "~/components/UI/NavBarUwU";
import ButtonsUwU from "~/components/UI/ButtonsUwU";
import Github from "~/components/UI/Icons/Github.vue";
import Twitter from "~/components/UI/Icons/Twitter.vue";
import Instagram from "~/components/UI/Icons/Instagram.vue";

export default {
  components: {
    NavBarUwU,
    ButtonsUwU,
    Github,
    Twitter,
    Instagram
  }
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
  font-size: 48px;
  font-family: "Metropolis";
  font-weight: 300;
  text-align: left;
}

.mini_left_container {
  padding: 20px 70px;
  height: 300px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
}

.mini_right_container {
  padding: 60px 0px;
}

.left_side {
  /* background-color: burlywood; */
  width: 100%;
  height: 100%;
  align-items: flex-start;
}

.right_side {
  /* background-color: red; */
  width: 100%;
  height: 100%;
  display: flex;
}

.Header {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.072em;
}

.mail {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.7);
}

.say_hello {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
}

.subject_message {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 60%;
}

.submit_button {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-top: 30 px;
}

.find_me {
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  margin-top: 15px;
}

.icons {
  display: flex;
  margin-top: 10px;
  width: 130px;
  justify-content: space-between;
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
</style>
