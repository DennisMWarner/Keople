<template>
  <div class="vault-save-keep-button mx-auto">
    <button
      class="btn btn-warning w-100 mb-2"
      @click="saveKeepToVault()"
      data-dismiss="modal"
    >{{vaultData.name}}</button>
  </div>
</template>


<script>
export default {
  name: "vault-save-keep-button",
  data() {
    return {
      updatedKeep: {}
    };
  },
  props: ["vaultData"],
  computed: {},
  methods: {
    saveKeepToVault() {
      this.updatedKeep.keeps = ++this.$store.state.activeKeep.keeps;
      this.updatedKeep.id = this.$store.state.activeKeep.id;
      this.$store.dispatch("editKeep", this.updatedKeep);
      console.log("updatedKeep in saveKeepToVault(): ", this.updatedKeep);
      let payload = {};
      payload.vaultId = this.vaultData.id;
      payload.keepId = this.$store.state.activeKeep.id;
      this.$store.dispatch("saveKeepToVault", payload);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>