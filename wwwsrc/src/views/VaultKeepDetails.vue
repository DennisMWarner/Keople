<template>
  <div class="vault-keep-details bg-primary">
    <keep-details />
    <!-- <div
      v-if="this.$store.state.allVaultKeeps.indexOf(this.$store.state.allVaultKeeps.find(vk=>vk.vaultId == this.$store.state.activeVault.id && vk.keepId == this.$store.state.activeKeep.id)) >= 0"
    >-->
    <div class="text-center my-2">
      <button
        class="btn btn-light text-white rounded border shadow w-50 bg-danger"
        data-target="#remove-keep-from-vault-modal"
        data-toggle="modal"
      >Remove Keep From This Vault</button>
    </div>
    <!-- </div> -->
    <div class="modal" tabindex="-1" role="dialog" id="remove-keep-from-vault-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content border border-white">
          <div class="modal-header bg-primary text-white border border-white">
            <h5
              class="modal-title"
            >Remove "{{this.vaultKeep.name}}" from "{{this.$store.state.activeVault.name}}"?</h5>
          </div>
          <div class="modal-body bg-success text-white">
            <p>
              Are you sure you want to remove "{{this.vaultKeep.name}}" from "{{this.$store.state.activeVault.name}}"?
              <br />(It can still be added again later.)
            </p>
          </div>
          <div class="modal-footer bg-primary border border-white">
            <button
              type="button"
              class="btn btn-primary text-white shadow"
              data-dismiss="modal"
            >Cancel</button>
            <button
              type="button"
              class="btn btn-danger text-white border rounded shadow border-white"
              @click="removeKeepFromVault()"
              data-dismiss="modal"
            >Remove "{{this.vaultKeep.name}}" from "{{this.$store.state.activeVault.name}}"</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import KeepDetails from "../views/KeepDetails";
export default {
  name: "vault-keep-details",
  data() {
    return {
      updatedKeep: {}
    };
  },
  computed: {
    vaultKeep() {
      return this.$store.state.activeVaultKeep;
    }
  },
  methods: {
    removeKeepFromVault() {
      this.$store.dispatch("getAllVaultKeeps");
      this.updatedKeep.keeps = --this.vaultKeep.keeps;
      console.log("keeps count: ", this.vaultKeep.keeps, this.updatedKeep);
      this.updatedKeep.id = this.vaultKeep.id;

      let foundVaultKeep = this.$store.state.allVaultKeeps.find(
        vk =>
          vk.vaultId == this.$store.state.activeVault.id &&
          vk.keepId == this.$store.state.activeKeep.id
      );
      this.$store.dispatch("editKeep", this.updatedKeep);
      this.$store.dispatch("removeKeepFromVault", foundVaultKeep.id);
      this.$router.push("/vault/" + this.$store.state.activeVault.id);
    }
  },
  destroyed() {
    this.$store.activeVaultKeep = {};
  },
  components: { KeepDetails }
};
</script>


<style scoped>
</style>