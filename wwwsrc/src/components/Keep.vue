<template>
  <div
    class="keep card m-2 bg-light border border-warning rounded shadow"
    @click="displayKeepDetailsPage()"
  >
    <img :src="keepData.img" class="card-img-top" alt="..." />
    <p class="card-text text-right pr-2">
      <small class="text-muted">
        views:&nbsp;{{keepData.views}}
        <!-- shares:&nbsp;{{keepData.shares}} -->
        keeps:&nbsp;{{keepData.keeps}}
      </small>
    </p>
    <div class="card-body border border-secondary rounded m-1 bg-light">
      <p class="card-title text-white p-1 border rounded bg-primary">{{keepData.name}}</p>
      <p
        class="card-text p-2 border border-white rounded shadow text-sm text-muted font-sm bg-white"
      >{{keepData.description}}</p>
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
      this.$store.dispatch("editKeep", this.keepData);
      this.$router.push("/keep/" + this.keepData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>