<template>
  <div class="vault-save-keep-button col-12">
    <button
      class="btn btn-warning w-100"
      @click="saveKeepToVault()"
      data-dismiss="modal"
    >{{vaultData.name}}</button>
  </div>
</template>


<script>
export default {
  name: "vault-save-keep-button",
  data() {
    return {};
  },
  props: ["vaultData"],
  computed: {},
  methods: {
    saveKeepToVault() {
      console.log(
        "vault id search: ",

        this.$store.state.vaultKeeps.find(vk => vk.vaultId == this.vaultData.id)
      );
      let payload = {};
      payload.vaultId = this.vaultData.id;
      payload.keepId = this.$store.state.activeKeep.id;
      console.log("payload", payload);

      this.$store.dispatch("saveKeepToVault", payload);
      console.log("payload: ", payload);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>