<template>
  <div class="create-keep mx-auto bg-primary text-center mt-2">
    <button
      class="btn btn-sm border border-white w-75 text-white bg-success btn-rounded shadow"
      data-target="#create-keep-modal"
      data-toggle="modal"
    >Create a new keep</button>

    <div
      class="modal fade"
      id="create-keep-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border border-white rounded shadow">
          <div class="modal-header bg-primary text-light border rounded shadow-sm border-white">
            <h5 class="modal-title" id="exampleModalLabel">Create a new keep</h5>
          </div>
          <div class="modal-body bg-success">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Title" v-model="newKeep.name" />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  v-model="newKeep.description"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Image URL"
                  required
                  v-model="newKeep.img"
                />
              </div>
              <div class="form-group form-check justify-content-between">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  v-model="newKeep.isPrivate"
                />
                <label
                  class="form-check-label mr-4 text-white"
                  for="exampleCheck1"
                >Private (required if you want to delete keep in the future)</label>
                <!-- <span class="ml-4">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Show my email</label>
                </span>-->
              </div>
            </form>
          </div>
          <div class="modal-footer bg-primary border border-white rounded shadow">
            <button
              type="button"
              class="btn btn-primary border rounded shadow"
              data-dismiss="modal"
            >Cancel</button>
            <button
              type="button"
              class="btn btn-warning border rounded shadow border-white"
              data-dismiss="modal"
              @click="createKeep()"
            >Save Keep</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-keep",
  data() {
    return {
      newKeep: {}
    };
  },
  computed: {},
  methods: {
    createKeep() {
      return this.$store.dispatch("createKeep", this.newKeep);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>