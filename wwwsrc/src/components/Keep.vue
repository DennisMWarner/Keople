<template>
  <div class="keep" @click="displayKeepDetailsPage()">
    <div class="card col-4">
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
      this.$router.push("/keep/" + this.keepData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>