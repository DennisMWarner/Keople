<template>
  <div class="vault-select-button col-sm-3 mt-0">
    <button
      class="btn btn-warning btn-sm border border-white btn-block text-white"
      @click="displayVaultDetailsPage()"
      data-dismiss="modal"
    >{{vaultData.name}}</button>
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
      this.$store.dispatch("getVaultById", this.vaultData.id);
      this.$router.push("/vault/" + this.vaultData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>