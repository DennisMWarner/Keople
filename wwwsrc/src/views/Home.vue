<template>
  <div class="home bg-primary row">
    <div class="col-12">
      <vault-select-button-group-row />
      <create-keep v-if="this.$auth.isAuthenticated" class="mx-auto" />
      <div v-else class="text-center text-success">
        <h5 class="text-sm">Please log in or register to create keeps and vaults</h5>
      </div>
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
