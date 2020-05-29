<template>
  <div class="vault-select-button-group-row">
    <div class="row">
      <vault-select-button
        v-for="vaultButton in vaultButtons"
        :vaultData="vaultButton"
        :key="vaultButton.id"
        class="col-3"
      />
    </div>
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
      this.$router.push("/vault/" + this.vaultData.id);
    }
  },
  components: { vaultSelectButton }
};
</script>


<style scoped>
</style>