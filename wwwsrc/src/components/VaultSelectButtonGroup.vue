<template>
  <div class="vault-select-button-group">
    <div class="row">
      <vault-select-button
        v-for="vaultButton in vaultButtons"
        :vaultData="vaultButton"
        :key="vaultButton.id"
      />
    </div>
  </div>
</template>


<script>
import vaultSelectButton from "../components/VaultSelectButton.vue";
export default {
  name: "vault-select-button-group",
  data() {
    return {};
  },
  computed: {
    vaultButtons() {
      return this.$store.state.userVaults;
    }
  },
  methods: {},
  components: { vaultSelectButton }
};
</script>


<style scoped>
</style>