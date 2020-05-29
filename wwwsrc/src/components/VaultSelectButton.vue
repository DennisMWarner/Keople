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
      this.$router.push("/vault/" + this.vaultData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>