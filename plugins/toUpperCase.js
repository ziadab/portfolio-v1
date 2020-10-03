import Vue from "vue";

Vue.filter("toUpperCase", value => {
  return value.toUpperCase();
});
