<template>
  <div class="home container-fluid bg-primary">
    <div class="row">
      <vault-select-button-group-row class="col-12" />
    </div>
    <div class="row">
      <div class="col-12">
        <create-keep v-if="this.$auth.isAuthenticated" class="mx-auto" />
        <div v-else class="text-center text-success pt-3">
          <h5 class="text-sm">Log in or register today and do more!</h5>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-12 mx-auto">
        <keeps class="border border-warning rounded p-2 no-gutters" />
      </div>
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
  async beforeCreate() {
    await this.$store.dispatch("getAllKeeps");
  }
};
</script>
