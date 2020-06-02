<template>
  <div class="keep card m-2 bg-primary shadow" @click="displayKeepDetailsPage()">
    <img
      :src="keepData.img"
      class="card-img-top mt-3 border border-warning rounded bg-light"
      alt="..."
    />
    <p class="card-text p-0">
      <small class="text-muted text-right pr-4">
        views:&nbsp;{{keepData.views}}
        shares:&nbsp;{{keepData.shares}}
        keeps:&nbsp;{{keepData.keeps}}
      </small>
    </p>
    <div class="card-body border border-secondary rounded mb-3">
      <h4 class="card-title text-white">{{keepData.name}}</h4>
      <p class="card-text text-light font-small">{{keepData.description}}</p>
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