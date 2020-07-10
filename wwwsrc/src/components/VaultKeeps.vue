<template>
  <div class="vault-keeps row mt-2">
    <div class="col-md-12 bg-primary">
      <div class="card-columns">
        <vault-keep v-for="vaultKeep in vaultKeeps" :vaultKeepData="vaultKeep" :key="vaultKeep.id"></vault-keep>
      </div>
    </div>
  </div>
</template>


<script>
import vaultKeep from "./VaultKeep.vue";
export default {
  name: "vault-keeps",
  data() {
    return {};
  },
  computed: {
    vaultKeeps() {
      return this.$store.state.vaultKeeps;
    }
  },
  methods: {},

  components: { vaultKeep }
};
</script>


<style scoped>
</style>