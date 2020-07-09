<template>
  <div class="vault-keeps bg-primary">
    <div class>
      <vault-keep v-for="vaultKeep in vaultKeeps" :vaultKeepData="vaultKeep" :key="vaultKeep.id"></vault-keep>
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