<template>
  <div id="app">
    <navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    this.$store.dispatch("setBearer", this.$auth.bearer);
  },
  components: {
    Navbar
  }
};
</script>
<style scoped>
</style>
<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>
