<template>
  <div class="vault-select-button-group-column">
    <div
      v-if="this.$store.state.allVaultKeeps.indexOf(this.$store.state.allVaultKeeps.find(vk=>vk.vaultId == this.$store.state.activeVault.id && vk.keepId == this.$store.state.activeKeep.id)) == -1"
    >
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