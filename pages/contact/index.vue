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
          <div class="say_hello">Say Hello</div>
          <div class="name_email">
            <InputsUwU label="name" placeholder="Your name" />
            <InputsUwU label="email" placeholder="Email address" />
          </div>
          <div class="subject_message">
            <InputsUwU label="subject" placeholder="Your subject" />
            <InputsUwU
              style="margin-top: 40px"
              label="Message"
              placeholder="Start typing here"
            />
          </div>
          <div class="submit_button">
            <div class="submit_text">Submit</div>
            <RightArrow class="submit_arrow" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_side">
      <div class="icons">
        <Instagram />
        <Github />
        <Twitter />
      </div>
    </div>
  </div>
</template>

<script>
import NavBarUwU from "~/components/UI/NavBarUwU";
import InputsUwU from "~/components/UI/InputsUwU.vue";
import Github from "~/components/UI/Icons/Github.vue";
import Twitter from "~/components/UI/Icons/Twitter.vue";
import Instagram from "~/components/UI/Icons/Instagram.vue";
import RightArrow from "~/assets/images/right_arrow.svg?inline";

export default {
  components: {
    NavBarUwU,
    InputsUwU,
    Github,
    Twitter,
    Instagram,
    RightArrow,
  },
};
</script>

<style src="./contact.scss" lang="scss" scoped></style>
