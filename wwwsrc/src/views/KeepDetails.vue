<template>
  <div class="keep-details bg-primary">
    <div class="bg-primary p-0">
      <img :src="keep.img" class="img-fluid border rounded shadow border-warning p-1" />
    </div>

    <div v-if="this.$auth.user">
      <div class="text-center mt-1">
        <button
          class="btn btn-success text-white rounded border shadow w-50"
          data-target="#save-keep-modal"
          data-toggle="modal"
          @click="saveUserKeep()"
        >Keep</button>
      </div>
    </div>
    <div
      v-if="this.$store.state.activeKeep.isPrivate  && this.$auth.user && this.$auth.user.sub == this.$store.state.activeKeep.userId"
    >
      <div class="text-center mt-1">
        <button
          class="btn btn-light text-white rounded border shadow w-50 bg-danger"
          @click="deleteKeep()"
        >Delete</button>
      </div>
    </div>

    <div
      v-if="this.$store.state.allVaultKeeps.indexOf(this.$store.state.allVaultKeeps.find(vk=>vk.vaultId == this.$store.state.activeVault.id && vk.keepId == this.$store.state.activeKeep.id))>0"
    >
      <div class="text-center mt-1">
        <button
          class="btn btn-light text-white rounded border shadow w-50 bg-danger"
          @click="removeKeepFromVault()"
        >Remove Keep From This Vault</button>
      </div>
    </div>

    <div
      class="modal fade"
      id="save-keep-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border border-secondary rounded shadow">
          <div class="modal-header bg-primary text-light border rounded shadow-sm border-light">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >Please select a vault to save this keep to:</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <div class="btn-group text-center" role="group" aria-label="Basic example">
              <vault-select-button-group-column />
            </div>
          </div>
          <div class="modal-footer bg-secondary border border-light rounded shadow">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <!-- <button type="button" class="btn btn-primary">Save Keep</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button
          class="btn btn-block border btn-danger text-white rounded m-3"
          @click="getKeepVaultInfo()"
        >Test</button>
      </div>
    </div>
  </div>
</template>


<script>
import keep from "../components/Keep.vue";
import vaultSelectButtonGroupColumn from "../components/VaultSelectButtonGroupColumn.vue";
export default {
  name: "keep-details",
  data() {
    return {
      updatedKeep: {}
    };
  },
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    }
  },
  methods: {
    deleteKeep() {
      return this.$store.dispatch("deleteKeep", this.keep.id);
    },
    saveUserKeep() {
      updatedKeep.keeps = ++this.keep.keeps;
      updatedKeep.id = this.keep.id;
      return this.$store.dispatch("saveUserKeep", updatedKeep);
    },

    getKeepVaultInfo() {
      let foundKeep = this.$store.state.vaultKeeps.indexOf(
        this.$store.state.activeKeep.id.value
      );
      console.log(
        "KeepVault return value: ",
        foundKeep,
        this.$store.state.vaultKeeps
      );
    }
  },
  components: { keep, vaultSelectButtonGroupColumn },
  mounted() {
    let activeVaultKeep = this.$store.state.allVaultKeeps.find(
      vk =>
        vk.vaultId == this.$store.state.activeVault.id &&
        vk.keepId == this.$store.state.activeKeep.id
    );
    console.log("vaultKeep search result: ", activeVaultKeep.id);
    return this.$store.dispatch("getKeepById", this.$route.params.id);
  },
  destroyed() {
    return (this.$store.activeKeep = {});
  }
};
</script>


<style scoped>
</style>