<template>
  <div
    class="keep col-sm-3 card m-2 bg-light border border-warning rounded shadow"
    @click="displayKeepDetailsPage()"
  >
    <img
      :src="keepData.img"
      class="card-img-top mt-2 p-2 bg-white border border-warning rounded"
      alt="..."
    />
    <p class="card-text text-right p-0">
      <small class="text-muted pl-4">
        views:&nbsp;{{keepData.views}}
        shares:&nbsp;{{keepData.shares}}
        keeps:&nbsp;{{keepData.keeps}}
      </small>
    </p>
    <div class="card-body border p-1 border-secondary rounded mb-2">
      <h5 class="card-title text-primary">{{keepData.name}}</h5>
      <p class="card-text text-sm text-muted font-small">{{keepData.description}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "keep",
  data() {
    return {};
  },
  props: ["keepData"],
  computed: {},
  methods: {
    displayKeepDetailsPage() {
      console.log("this.auth.user: ", this.$auth.user);
      this.keepData.views += 1;
      // this.$store.dispatch("editKeep", this.keepData);
      this.$router.push("/keep/" + this.keepData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>