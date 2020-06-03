<template>
  <div class="home bg-primary row px-2">
    <div class="col-md-12 mx-auto">
      <vault-select-button-group-row />
      <create-keep v-if="this.$auth.isAuthenticated" class="mx-auto" />
      <div v-else class="text-center bg-warning border border-secondary shadow rounded p-2">
        <h5 class="text-white">Please log in or register to create keeps and vaults</h5>
      </div>
    </div>
    <div class="col-12">
      <keeps />
    </div>
  </div>
</template>

<script>
import createKeep from "../components/CreateKeep.vue";
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
  components: { keeps, vaults, vaultSelectButtonGroupRow, createKeep },
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
