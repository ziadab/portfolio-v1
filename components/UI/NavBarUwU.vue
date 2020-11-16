<template>
  <div>
    <div>
      <ul class="nav-links">
        <li class="nav-item">
          <nuxt-link @click.native="thla" to="/"><Logo /></nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/">MENU</nuxt-link>
        </li>
        <MenuLogo />
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/UI/Logos/Logo";
import MenuLogo from "~/components/UI/Logos/MenuLogo";

export default {
  name: "NavBarUwU",
  components: {
    Logo,
    MenuLogo,
  },
  transition(to, from) {
    console.log({ to });
    console.log({ from });
    // if (to.name == "about") {
    //   return {
    //     enterActiveClass: "animated fadeInUp",
    //     leaveActiveClass: "animated fadeOutUp",
    //     mode: "out-in",
    //   };
    // } else if (to.name == "projects") {
    //   return {
    //     enterActiveClass: "animated fadeInDown",
    //     leaveActiveClass: "animated fadeOutDown",
    //     mode: "out-in",
    //   };
    // }
  },
  methods: {
    thla: function () {
      console.log("thla kana hona");
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
}

.nav-links {
  margin: 0;
  padding: 1rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-item {
  list-style: none;
  margin-right: 30px;
  font-family: "Metropolis";
  font-weight: 700;
  font-size: 16px;
}
.menuLogo {
  margin-right: 2rem;
}

.nav-item a {
  text-decoration: none;
  color: black;
}

.nav-item:first-child {
  margin-right: auto;
  margin-left: 2rem;
}
</style>
