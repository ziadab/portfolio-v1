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
            <div class="submit_text">Submit</div>
            <RightArrow class="submit_arrow" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_side">
      <hr class="line" />
      <div>
        <div class="find_me_mobile">Find Me</div>
        <div class="icons">
          <Instagram />
          <Github />
          <Twitter />
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
import RightArrow from "~/assets/images/right_arrow.svg?inline";

export default {
  components: {
    NavBarUwU,
    ButtonsUwU,
    Github,
    Twitter,
    Instagram,
    RightArrow
  }
};
</script>

<style src="./contact.scss" lang="scss" scoped></style>
