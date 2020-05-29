<template>
  <div class="vault-select-button-group-column">
    <div class="row">
      <vault-save-keep-button
        v-for="vaultButton in vaultButtons"
        :vaultData="vaultButton"
        :key="vaultButton.id"
      />
    </div>
    <create-vault />
  </div>
</template>


<script>
import createVault from "../components/CreateVault.vue";
import vaultSaveKeepButton from "../components/VaultSaveKeepButton.vue";
export default {
  name: "vault-select-button-group-column",
  data() {
    return {};
  },
  computed: {
    vaultButtons() {
      return this.$store.state.userVaults;
    }
  },
  methods: {},
  components: { vaultSaveKeepButton, createVault }
};
</script>


<style scoped>
</style>