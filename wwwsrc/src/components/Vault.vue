<template>
  <div class="vault" @click="displayVaultDetailsPage()">
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