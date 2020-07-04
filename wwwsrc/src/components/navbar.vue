<template>
  <!-- //TODO figure out why navbar isn't functioning as expected w/responsive bootstrap class (navbar-expand-lg)-->
  <div class="container-fluid">
    <div class="row justify-content-between bg-primary">
      <nav class="navbar navbar-expand-sm navbar-light bg-primary col-12 p-0">
        <router-link class="navbar-brand col-sm-2 col-8" :to="{ name: 'home' }">
          <img
            src="../assets/Keople-logo-large.png"
            class="img-fluid bg-white border rounded border-warning shadow p-1"
          />
        </router-link>
        <button
          class="navbar-toggler bg-warning mt-2 mr-4 align-self-start"
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
          class="collapse navbar-collapse img-fluid bg-white rounded shadow mx-auto mt-2 col-md-9 col-11 text-center p-0 justify-content-between"
          id="navbarText"
        >
          <span>
            <ul class="navbar-nav">
              <li class="nav-item" :class="{ active: $route.name == 'home' }">
                <router-link :to="{ name: 'home' }" class="nav-link pl-1">Home</router-link>
              </li>
              <li
                class="nav-item"
                v-if="$auth.isAuthenticated"
                :class="{ active: $route.name == 'userKeepsPage' }"
              >
                <router-link class="nav-link pl-1" :to="{ name: 'userKeepsPage' }">My Keeps</router-link>
              </li>
            </ul>
          </span>
          <span class="navbar-text mr-2">
            <span
              v-if="$auth.isAuthenticated"
              class="bg-primary border border-dark text-light rounded shadow px-2 pb-1 mr-2 ml-1"
            >{{userInfo.user.name}}</span>
            <button
              class="btn btn-sm btn-primary border border-secondary rounded shadow"
              @click="login"
              v-if="!$auth.isAuthenticated"
            >Login or Register</button>
            <button
              class="btn btn-sm btn-warning border-secondary rounded shadow"
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
      this.$store.dispatch("getAllVaultKeeps");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
      this.$store.state.userVaults = [];
    }
  },
  computed: {
    userInfo() {
      return this.$auth;
    }
  },
  mounted() {
    console.log(this.$auth);
  }
};
</script>

<style>

</style>
