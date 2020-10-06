<template>
  <div>
    <navbar>
      <ul class="nav-links">
        <li class="nav-item">
          <nuxt-link to="/"><Logo /></nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/">MENU</nuxt-link>
        </li>
        <MenuLogo />
      </ul>
    </navbar>
  </div>
</template>

<script>
export default {};
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
