<template>
  <div class="keep-details">
    <div class="row">
      <div class="col-12 bg-secondary mt-1 p-0">
        <img :src="keep.img" class="img-fluid border rounded shadow border-dark p-3" />
      </div>
    </div>

    <div class="row" v-if="this.$auth.user">
      <div class="col-12 text-center mt-1">
        <button
          class="btn btn-success rounded border shadow w-50"
          data-target="#save-keep-modal"
          data-toggle="modal"
          @click="saveUserKeep()"
        >Keep</button>
      </div>
    </div>
    <div
      class="row"
      v-if="this.$store.state.activeKeep.isPrivate && this.$auth.user && this.$auth.user.sub == this.$store.state.activeKeep.userId"
    >
      <div class="col-12 text-center mt-1">
        <button
          class="btn btn-light rounded border shadow w-50 bg-danger"
          @click="deleteKeep()"
        >Delete</button>
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
          <div class="modal-body">
            <div class="btn-group" role="group" aria-label="Basic example">
              <vault-select-button-group-column />
            </div>
          </div>
          <div class="modal-footer bg-secondary border border-light rounded shadow">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <!-- <button type="button" class="btn btn-primary">Save Keep</button> -->
          </div>
        </div>
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
    }
  },
  components: { keep, vaultSelectButtonGroupColumn },
  mounted() {
    return this.$store.dispatch("getKeepById", this.$route.params.id);
  },
  destroyed() {
    return (this.$store.activeKeep = {});
  }
};
</script>


<style scoped>
</style>