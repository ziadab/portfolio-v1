<template>
  <div>
    <NavBarUwU></NavBarUwU>
    <div class="project_page">
      <h5>Projects</h5>
      <hr />
      <section>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
    </div>
  </div>
</template>

<script>
import NavBarUwU from "~/components/UI/NavBarUwU";
import Card from "~/components/UI/Card/Card";

export default {
  components: {
    NavBarUwU,
    Card,
  },
  transition: {
    //enterActiveClass: "animated fadeIn",
    leaveActiveClass: "animated fadeOut",
    mode: "out-in",
  },
};
</script>

<style src="./projects.scss" lang="scss" scoped></style>