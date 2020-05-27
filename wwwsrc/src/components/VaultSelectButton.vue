<template>
  <div class="vault-select-button w-100">
    <div class="col-12">
      <button class="btn btn-warning w-100 m-1" @click="saveKeepToVault()">{{vaultData.name}}</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "vault-select-button",
  data() {
    return {};
  },
  props: ["vaultData"],
  computed: {},
  methods: {
    saveKeepToVault() {
      let payload = {};
      payload.vaultId = this.vaultData.id;
      payload.keepId = this.$store.state.activeKeep.id;

      this.$store.dispatch("saveKeepToVault", payload);
      console.log("payload: ", payload);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>