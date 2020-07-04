<template>
  <div class="vault-details bg-primary container-fluid">
    <div class="row">
      <div class="col-12 m-auto">
        <h4
          class="p-1 rounded shadow-sm w-100 mx-auto mt-2 text-white text-center"
        >{{this.vault.name}}</h4>
      </div>
    </div>
    <vault-keeps />
    <create-keep />
    <div class="text-center mt-1">
      <button
        class="btn btn-light rounded border border-white text-white shadow w-75 bg-danger"
        data-target="#delete-vault-modal"
        data-toggle="modal"
      >Delete this vault</button>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="delete-vault-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">Delete "{{this.vault.name}}"?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Modal Are you sure you want to delete this vault?
              <br />This cannot be undone!
            </p>
          </div>
          <div class="modal-footer bg-primary">
            <button
              type="button"
              class="btn btn-success border border white"
              data-dismiss="modal"
            >Cancel</button>
            <button
              type="button"
              class="btn btn-danger text-info border border-info"
              @click="deleteVault()"
              data-dismiss="modal"
            >Delete "{{this.vault.name}}"</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import vaultKeeps from "../components/VaultKeeps";
import createKeep from "../components/CreateKeep";
export default {
  name: "vault-details",
  data() {
    return {};
  },
  computed: {
    vault() {
      return this.$store.state.activeVault;
    }
  },
  methods: {
    deleteVault() {
      this.$store.dispatch("deleteVault", this.vault.id);
      this.$router.push("/");
    }
  },
  components: { vaultKeeps, createKeep },
  mounted() {
    //clear vaultKeeps from store to prevent render before data is updated
    this.$store.state.vaultKeeps = [];
    return this.$store.dispatch("getKeepsByVaultId", this.$route.params.id);
  }
};
</script>


<style scoped>
.see-through-light {
  opacity: 0.1;
}
</style>