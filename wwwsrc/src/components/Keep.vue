<template>
  <div class="keep col-4" @click="displayKeepDetailsPage()">
    <img :src="keepData.img" class="card-img-top p-1" alt="..." />
    <p class="card-text row p-0">
      <small class="text-muted col-12 text-right pr-4">
        views:&nbsp;{{keepData.views}}
        shares:&nbsp;{{keepData.shares}}
        keeps:&nbsp;{{keepData.keeps}}
      </small>
    </p>
    <div class="card-body">
      <h5 class="card-title">{{keepData.name}}</h5>
      <p class="card-text">{{keepData.description}}</p>
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