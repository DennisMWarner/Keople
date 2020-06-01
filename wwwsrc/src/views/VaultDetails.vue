<template>
  <div class="vault-details">
    <create-keep />
    <vault-keeps />
    <div class="col-12 text-center mt-1">
      <button
        class="btn btn-light rounded border border-primary text-white shadow w-50 bg-danger"
        @click="deleteVault()"
      >Delete this vault</button>
    </div>
  </div>
</template>


<script>
import vaultKeeps from "../components/VaultKeeps";
import createKeep from "../components/CreateKeep";
export default {
  name: "vault-details",
  data() {
    return {};
  },
  computed: {
    vault() {
      return this.$store.state.activeVault;
    }
  },
  methods: {
    deleteVault() {
      console.log(
        "deleteVault called, this.vault.id:",
        this.$store.state.activeVault.id
      );
      this.$store.dispatch("deleteVault", this.vault.id);
    }
  },
  components: { vaultKeeps, createKeep },
  mounted() {
    console.log("route: ", this.$route.params);
    //clear vaultKeeps from store to prevent render before data is updated
    this.$store.state.vaultKeeps = [];
    return this.$store.dispatch("getKeepsByVaultId", this.$route.params.id);
  }
};
</script>


<style scoped>
</style>