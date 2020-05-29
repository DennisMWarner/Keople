<template class="container-fluid">
  <div class="vaults row">
    <vault v-for="vault in vaults" :vaultData="vault" :key="vault.id"></vault>
  </div>
</template>


<script>
import vault from "../components/Vault.vue";
export default {
  name: "vaults",
  data() {
    return {};
  },
  computed: {
    vaults() {
      return this.$store.state.userVaults;
    }
  },
  methods: {},
  components: { vault },
  created() {
    return this.$store.dispatch("getUserVaults");
  }
};
</script>


<style scoped>
</style>