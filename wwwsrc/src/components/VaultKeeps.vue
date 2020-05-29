<template>
  <div class="vault-keeps">
    <div class="row">
      <div class>
        <keep v-for="vaultKeep in vaultKeeps" :keepData="vaultKeep" :key="vaultKeep.id"></keep>
      </div>
    </div>
  </div>
</template>


<script>
import keep from "./Keep.vue";
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

  components: { keep }
};
</script>


<style scoped>
</style>