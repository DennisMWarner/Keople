<template>
  <div class="vault col-3" @click="displayVaultDetailsPage()">
    <div>{{vaultData.name}}</div>
  </div>
</template>


<script>
export default {
  name: "vault",
  data() {
    return {};
  },
  props: ["vaultData"],
  computed: {},
  methods: {
    //NOTE move deleteVault() to VaultDetails.vue
    // deleteVault() {
    //   this.$store.dispatch("deleteVault", this.vaultData.id);
    // },
    displayVaultDetailsPage() {
      this.$router.push("/vault/" + this.vaultData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>