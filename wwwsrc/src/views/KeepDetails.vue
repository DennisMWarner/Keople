<template>
  <div class="keep-details">
    <div class="row">
      <div class="col-12 bg-secondary p-0">
        <img :src="keep.img" class="img-fluid border rounded shadow border-dark p-3" />
        <div class="row">
          <div class="col-12 text-center">
            <button
              class="btn btn-light rounded border shadow w-100"
              data-target="#saveKeepModal"
              data-toggle="modal"
            >Keep</button>
          </div>
          <div
            class="modal fade"
            id="saveKeepModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content border border-secondary rounded shadow">
                <div
                  class="modal-header bg-primary text-light border rounded shadow-sm border-light"
                >
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
                    <vaultSelectButtonGroup />
                  </div>
                </div>
                <div class="modal-footer bg-secondary border border-light rounded shadow">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save Keep</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import keep from "../components/Keep.vue";
import vaultSelectButtonGroup from "../components/VaultSelectButtonGroup.vue";
export default {
  name: "keep-details",
  data() {
    return {};
  },
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    }
  },
  methods: {},
  components: { keep, vaultSelectButtonGroup },
  mounted() {
    return this.$store.dispatch("getKeepById", this.$route.params.id);
  }
};
</script>


<style scoped>
</style>