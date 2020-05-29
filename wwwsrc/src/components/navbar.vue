<template>
  <!-- //TODO figure out why navbar isn't functioning as expected w/responsive bootstrap class (navbar-expand-lg)-->
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-expand navbar-light bg-light row p-0">
        <router-link class="navbar-brand col-2" :to="{ name: 'home' }">
          <img
            src="../assets/Keople-logo-large.png"
            class="img-fluid border rounded border-dark bg-white shadow p-1"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse img-fluid border rounded border-dark bg-white shadow mr-3"
          id="navbarText"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" :class="{ active: $route.name == 'home' }">
              <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
            </li>
            <li
              class="nav-item"
              v-if="$auth.isAuthenticated"
              :class="{ active: $route.name == 'userKeepsPage' }"
            >
              <router-link class="nav-link" :to="{ name: 'userKeepsPage' }">My Keeps</router-link>
            </li>
          </ul>
          <span class="navbar-text py-2">
            <button
              class="btn btn-sm btn-primary border border-secondary rounded shadow p-1 mx-3"
              @click="login"
              v-if="!$auth.isAuthenticated"
            >Login</button>
            <button
              class="btn btn-sm btn-warning border-secondary rounded shadow p-1 mx-3"
              @click="logout"
              v-else
            >logout</button>
          </span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:5001",
  withCredentials: true
});
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getUserVaults", this.$auth.email);
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  }
};
</script>

<style></style>
