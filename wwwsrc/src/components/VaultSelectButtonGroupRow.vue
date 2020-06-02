<template>
  <div class="vault-select-button-group-row" @click="displayVaultDetailsPage()">
    <vault-select-button
      v-for="vaultButton in vaultButtons"
      :vaultData="vaultButton"
      :key="vaultButton.id"
    />
  </div>
</template>


<script>
import vaultSelectButton from "../components/VaultSelectButton.vue";
export default {
  name: "vault-select-button-group-row",
  data() {
    return {};
  },
  computed: {
    vaultButtons() {
      return this.$store.state.userVaults;
    }
  },
  methods: {
    displayVaultDetailsPage() {
      console.log("vaultdata.id at diplayVaultDetailsPage:", this.vaultData.id);
      this.$router.push("/vault/" + this.vaultData.id);
    }
  },
  components: { vaultSelectButton },
  created() {
    return this.$store.dispatch("getUserVaults");
  }
};
</script>


<style scoped>
</style>