<template>
  <div class="vault-details">
    <create-keep />
    <vault-keeps />
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
  computed: {},
  methods: {},
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