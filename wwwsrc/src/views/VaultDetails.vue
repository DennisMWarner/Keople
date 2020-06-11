<template>
  <div class="vault-details full-background bg-primary">
    <div class="row">
      <div class="col-12 m-auto">
        <h5 class="p-1 bg-primary text-white text-center">{{this.vault.name}}</h5>
      </div>
    </div>
    <create-keep />
    <vault-keeps />
    <div class="text-center mt-1">
      <button
        class="btn btn-light rounded border border-primary text-white shadow w-50 bg-danger"
        data-target="#delete-vault-modal"
        data-toggle="modal"
      >Delete this vault</button>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="delete-vault-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">Delete {{this.vault.name}}?</h5>
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
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-danger text-info"
              @click="deleteVault()"
              data-dismiss="modal"
            >Delete {{this.vault.name}}</button>
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
.full-background {
  min-width: 100vw;
  min-height: 100vh;
}
</style>