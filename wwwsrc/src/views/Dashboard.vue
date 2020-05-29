<template>
  <div class="dashboard text-center">
    <h1>WELCOME TO THE DASHBOARD</h1>
    <!-- public {{ publicKeeps }} user {{ userKeeps }} -->
    <button
      class="btn btn-warning rounded shadow border border-secondary m-3 p-1 text-light"
      @click="goToUserKeeps"
    >View My Keeps</button>
    <button
      class="btn btn-warning rounded shadow border border-secondary m-3 p-1 text-light"
    >View My Vaults</button>
  </div>
</template>

<script>
export default {
  mounted() {},
  computed: {},
  methods: {
    goToUserKeeps() {
      this.$router.push("/myKeeps" + this.$auth.name);
    }
  }
};
</script>

<style></style>
