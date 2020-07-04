<template>
  <div class="create-vault">
    <button
      class="btn btn-block btn-success p1 border border-dark shadow rounded"
      data-target="#create-vault-modal"
      data-toggle="modal"
    >New Vault</button>
    <div
      class="modal fade modal-sm"
      id="create-vault-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border border-secondary rounded shadow">
          <div class="modal-header bg-primary text-light border rounded shadow-sm border-light">
            <h5 class="modal-title" id="exampleModalLabel">Create a new vault</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="New vault name"
                  v-model="newVault.name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  v-model="newVault.description"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer bg-secondary border border-light rounded shadow">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="createVault()"
            >Save Keep</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-vault",
  data() {
    return {
      newVault: {},
      updatedKeep: {}
    };
  },
  computed: {},
  methods: {
    createVault() {
      this.updatedKeep.keeps = ++this.$store.state.activeKeep.keeps;
      this.updatedKeep.id = this.$store.state.activeKeep.id;
      this.$store.dispatch("editKeep", this.updatedKeep);
      let payload = {};
      let saveKeepToVaultPayload = {};
      payload.newVault = this.newVault;
      payload.keepId = this.$store.state.activeKeep.id;
      return this.$store.dispatch("createVault", payload);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>