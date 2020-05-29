<template>
  <div class="home mt-2">
    <vault-select-button-group-row />
    <keeps />
  </div>
</template>

<script>
import vaults from "../components/Vaults.vue";
import keeps from "../components/Keeps.vue";
import vaultSelectButtonGroupRow from "../components/VaultSelectButtonGroupRow";
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: { keeps, vaults, vaultSelectButtonGroupRow },
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
