<template>
  <div class="vault-select-button">
    <button class="btn btn-warning btn-block" @click="displayVaultDetailsPage()">{{vaultData.name}}</button>
  </div>
</template>


<script>
export default {
  name: "vault-select-button",
  data() {
    return {};
  },
  props: ["vaultData"],
  computed: {},
  methods: {
    displayVaultDetailsPage() {
      console.log(
        "this.vaultData.id at displayVaultDetailsPage: ",
        this.vaultData.id
      );
      this.$store.dispatch("getVaultById", this.vaultData.id);
      this.$router.push("/vault/" + this.vaultData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>