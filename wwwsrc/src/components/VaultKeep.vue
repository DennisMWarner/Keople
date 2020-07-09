<template>
  <div
    class="vault-keep card bg-light border border-warning rounded shadow mb-3"
    @click="displayVaultKeepDetailsPage()"
  >
    <img :src="vaultKeepData.img" class="card-img-top" alt="..." />
    <p class="card-text text-right pr-2">
      <small class="text-muted">
        views:&nbsp;{{vaultKeepData.views}}
        <!-- shares:&nbsp;{{vaultKeepData.shares}} -->
        keeps:&nbsp;{{vaultKeepData.keeps}}
      </small>
    </p>
    <div class="card-body border border-secondary rounded m-1 bg-light">
      <p class="card-title text-white p-1 border rounded bg-primary">{{vaultKeepData.name}}</p>
      <p
        class="card-text p-2 border border-white rounded shadow text-sm text-muted font-sm bg-white"
      >{{vaultKeepData.description}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "vault-keep",
  data() {
    return {};
  },
  props: ["vaultKeepData"],
  computed: {},
  methods: {
    async displayVaultKeepDetailsPage() {
      await this.$store.dispatch("getKeepById", this.vaultKeepData.id);
      console.log("displayVaultKeepDetailsPage called...");
      this.$store.state.vaultKeepsFilteredByActiveKeep = [];

      this.vaultKeepData.views += 1;
      this.$store.dispatch("editKeep", this.vaultKeepData);
      this.$store.dispatch("getVaultKeepById", this.vaultKeepData.id);
      this.$router.push(
        "/vault/" +
          this.$store.state.activeVault.id +
          "/keep/" +
          this.vaultKeepData.id
      );
    }
  },
  destroyed() {
    this.$store.state.activeVaultKeep = {};
  },
  components: {}
};
</script>


<style scoped>
</style>