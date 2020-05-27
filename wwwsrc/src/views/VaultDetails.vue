<template>
  <div class="container-fluid keeps">
    <div class="row">
      <div class="col-12">
        <div
          class="btn btn- rounded shadow p-3 m-3 w-100"
          data-target="#createKeepModal"
          data-toggle="modal"
        >Create a new keep</div>
      </div>
      <div
        class="modal fade"
        id="createKeepModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content border border-secondary rounded shadow">
            <div class="modal-header bg-primary text-light border rounded shadow-sm border-light">
              <h5 class="modal-title" id="exampleModalLabel">Create a new keop</h5>
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
                    id="exampleInputPassword1"
                    placeholder="Title"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Description"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Image URL"
                  />
                </div>
                <div class="form-group form-check justify-content-between">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label mr-4" for="exampleCheck1">Make Public</label>
                  <span class="ml-4">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Show my email</label>
                  </span>
                </div>
              </form>
            </div>
            <div class="modal-footer bg-secondary border border-light rounded shadow">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save Keop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class>
        <keep v-for="keep in keeps" :keepData="keep" :key="keep.id"></keep>
      </div>
    </div>
  </div>
</template>


<script>
import keep from "./Keep.vue";
export default {
  name: "Keeps",
  data() {
    return {};
  },
  computed: {
    keeps() {
      return this.$store.state.publicKeeps;
    }
  },
  methods: {},
  components: { keep }
};
</script>


<style scoped>
</style>