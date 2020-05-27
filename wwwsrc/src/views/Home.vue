<template>
  <div class="home">
    <h3>Welcome Home</h3>
    <vaults />
    <keeps />
  </div>
</template>

<script>
import vaults from "../components/Vaults.vue";
import keeps from "../components/Keeps.vue";
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: { keeps, vaults },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  created() {
    return this.$store.dispatch("getPublicKeeps");
  }
};
</script>
