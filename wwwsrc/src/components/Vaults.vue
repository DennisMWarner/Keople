<template>
  <div class="vaults">
    <div class="row">
      <div class>
        <vault v-for="vault in vaults" :vaultData="vault" :key="vault.id"></vault>
      </div>
    </div>
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